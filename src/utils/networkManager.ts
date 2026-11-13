import { useState, useEffect } from 'react';

export type NetworkState = 'online' | 'offline' | 'reconnecting';

export interface NetworkInfo {
  status: NetworkState;
  isOnline: boolean;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
}

type NetworkCallback = (info: NetworkInfo) => void;
const listeners = new Set<NetworkCallback>();

let currentStatus: NetworkState = typeof navigator !== 'undefined' && !navigator.onLine ? 'offline' : 'online';

function notifyListeners() {
  const info: NetworkInfo = {
    status: currentStatus,
    isOnline: currentStatus === 'online',
    effectiveType: (navigator as any)?.connection?.effectiveType,
    downlink: (navigator as any)?.connection?.downlink,
    rtt: (navigator as any)?.connection?.rtt,
  };
  listeners.forEach(fn => {
    try {
      fn(info);
    } catch (err) {
      console.warn('[NetworkManager] Listener error:', err);
    }
  });
}

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    currentStatus = 'reconnecting';
    notifyListeners();
    // Verify true internet access via HEAD request or brief delay
    setTimeout(() => {
      currentStatus = 'online';
      notifyListeners();
    }, 600);
  });

  window.addEventListener('offline', () => {
    currentStatus = 'offline';
    notifyListeners();
  });

  // Modern browser network connection API (detects WiFi <-> 4G/5G transitions and IP changes)
  const conn = (navigator as any)?.connection;
  if (conn?.addEventListener) {
    conn.addEventListener('change', () => {
      if (navigator.onLine) {
        currentStatus = 'online';
      }
      notifyListeners();
    });
  }
}

export function subscribeNetworkStatus(callback: NetworkCallback): () => void {
  listeners.add(callback);
  // Initial fire
  callback({
    status: currentStatus,
    isOnline: currentStatus === 'online',
    effectiveType: (navigator as any)?.connection?.effectiveType,
  });
  return () => {
    listeners.delete(callback);
  };
}

export function useNetworkStatus(): NetworkInfo {
  const [info, setInfo] = useState<NetworkInfo>({
    status: currentStatus,
    isOnline: currentStatus === 'online',
  });

  useEffect(() => {
    return subscribeNetworkStatus(setInfo);
  }, []);

  return info;
}

