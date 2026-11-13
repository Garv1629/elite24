/**
 * Browser, Device, Network, and Lifecycle Resilience Handlers
 * Solves:
 * - Back-Forward Cache (bfcache) freezes
 * - Stuck body scroll locks when rotating device or resizing
 * - Mobile viewport height 100vh jumping on iOS Safari & Chrome
 * - Cross-browser matchMedia listener compatibility (older Safari/WebKit)
 * - Safe handling of global script and network rejection errors
 */

export function initLifecycleResilience(): () => void {
  if (typeof window === 'undefined') return () => {};

  // 1. Mobile Dynamic Viewport Height Fix (--vh)
  const setVhProperty = () => {
    try {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    } catch {
      // Ignore in restricted environments
    }
  };

  setVhProperty();

  // 2. Window Resize & Orientation Change Safety
  let resizeTimer: ReturnType<typeof setTimeout> | null = null;
  const handleResize = () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setVhProperty();
      // Ensure body overflow isn't permanently trapped if a modal was destroyed during layout shift
      const hasActiveModal = document.querySelector('[role="dialog"], .fixed.inset-0');
      if (!hasActiveModal && document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    }, 150);
  };

  // 3. Back-Forward Cache (bfcache) recovery on browser navigation
  const handlePageShow = (event: PageTransitionEvent) => {
    if (event.persisted) {
      // Restored from bfcache: recalculate heights and unlock body if stuck
      setVhProperty();
      const hasActiveModal = document.querySelector('[role="dialog"], .fixed.inset-0');
      if (!hasActiveModal) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    }
  };

  // 4. Global Unhandled Rejection & Error Protection
  const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    // Check if rejection is related to dynamic import, network drop, or aborted fetch
    const reason = event.reason;
    const isNetworkOrChunk =
      reason?.message?.includes?.('Failed to fetch') ||
      reason?.message?.includes?.('Importing a module script failed') ||
      reason?.message?.includes?.('dynamically imported module') ||
      reason?.name === 'AbortError';

    if (isNetworkOrChunk) {
      console.warn('[Resilience] Handled transient network/chunk rejection:', reason?.message || reason);
      // Prevent browser default error alert / unhandled rejection crash
      event.preventDefault();
    }
  };

  const handleGlobalError = (event: ErrorEvent) => {
    if (event.message?.includes?.('ResizeObserver loop completed with undelivered notifications') ||
        event.message?.includes?.('ResizeObserver loop limit exceeded')) {
      // Benign browser notification that happens on rapid device resizing
      event.stopImmediatePropagation();
    }
  };

  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('orientationchange', handleResize, { passive: true });
  window.addEventListener('pageshow', handlePageShow);
  window.addEventListener('unhandledrejection', handleUnhandledRejection);
  window.addEventListener('error', handleGlobalError);

  return () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('orientationchange', handleResize);
    window.removeEventListener('pageshow', handlePageShow);
    window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    window.removeEventListener('error', handleGlobalError);
  };
}

/**
 * Universal safe media query listener compatible with older Safari/iOS and modern browsers
 */
export function safeAddMediaQueryListener(
  mql: MediaQueryList,
  callback: (e: MediaQueryListEvent | MediaQueryList) => void
): () => void {
  try {
    if (mql.addEventListener) {
      mql.addEventListener('change', callback);
      return () => mql.removeEventListener('change', callback);
    } else if ((mql as any).addListener) {
      (mql as any).addListener(callback);
      return () => (mql as any).removeListener(callback);
    }
  } catch (err) {
    console.warn('[Resilience] MediaQuery listener fallback:', err);
  }
  return () => {};
}

