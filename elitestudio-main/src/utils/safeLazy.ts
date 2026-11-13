import React, { ComponentType, lazy } from 'react';

interface SafeLazyOptions {
  retries?: number;
  interval?: number;
  reloadOnFailure?: boolean;
}

/**
 * Robust wrapper for React.lazy that handles network dropouts, WiFi/IP address changes,
 * stale chunk cache, and browser reloads gracefully without unhandled exceptions.
 */
export function safeLazy<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  options: SafeLazyOptions = {}
): React.LazyExoticComponent<T> {
  const { retries = 3, interval = 1200, reloadOnFailure = false } = options;

  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      let attempts = 0;

      const attemptLoad = () => {
        attempts++;
        factory()
          .then((module) => {
            resolve(module);
          })
          .catch((error: unknown) => {
            console.warn(`[SafeLazy] Chunk loading attempt ${attempts}/${retries} failed:`, error);

            // If offline, wait for network reconnection
            if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && !navigator.onLine) {
              const handleOnline = () => {
                window.removeEventListener('online', handleOnline);
                console.log('[SafeLazy] Network restored. Retrying chunk load immediately...');
                attemptLoad();
              };
              window.addEventListener('online', handleOnline);
              return;
            }

            if (attempts < retries) {
              // Retry with progressive backoff
              const delay = interval * attempts;
              setTimeout(attemptLoad, delay);
            } else {
              // If repeated failures occur (e.g. hash mismatch after new deployment)
              if (reloadOnFailure && typeof window !== 'undefined') {
                const reloadKey = 'chunk_reload_lock_' + window.location.pathname;
                const hasReloaded = sessionStorage.getItem(reloadKey);
                if (!hasReloaded) {
                  sessionStorage.setItem(reloadKey, 'true');
                  window.location.reload();
                  return;
                }
              }
              reject(error);
            }
          });
      };

      attemptLoad();
    });
  });
}

