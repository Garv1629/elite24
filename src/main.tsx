import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global resilience handlers for uncaught rejections and errors
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    // Avoid noisy uncaught promise errors from network change / aborted requests
    const reason = event.reason;
    if (
      reason?.message?.includes?.('Failed to fetch') ||
      reason?.message?.includes?.('dynamically imported module') ||
      reason?.name === 'AbortError'
    ) {
      console.warn('[Global Resilience] Transient network rejection absorbed:', reason?.message || reason);
      event.preventDefault();
    }
  });
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(<App />);
}
