import React, { useEffect, useState } from 'react';
import { useNetworkStatus } from '../utils/networkManager';
import { Wifi, WifiOff, RefreshCw } from 'lucide-react';

export const NetworkStatusNotifier: React.FC = () => {
  const { isOnline, status } = useNetworkStatus();
  const [visible, setVisible] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setVisible(true);
      setWasOffline(true);
    } else if (wasOffline) {
      // Just reconnected
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setWasOffline(false);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  if (!visible) return null;

  return (
    <aside
      aria-live="polite"
      aria-atomic="true"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none transition-all duration-300 animate-in fade-in slide-in-from-top-2"
    >
      <div className={`px-4 py-2 rounded-full shadow-lg border backdrop-blur-md flex items-center gap-2.5 text-xs font-mono tracking-wide ${
        !isOnline
          ? 'bg-[#111111]/90 border-[#E09290]/40 text-[#FAF8EE]'
          : 'bg-[#FAF8EE]/95 border-emerald-500/40 text-[#111111]'
      }`}>
        {!isOnline ? (
          <>
            <span className="w-2 h-2 rounded-full bg-[#E09290] animate-pulse" />
            <WifiOff className="w-3.5 h-3.5 text-[#E09290]" />
            <span>Network interrupted · Reconnecting smoothly</span>
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <Wifi className="w-3.5 h-3.5 text-emerald-600" />
            <span>Connection restored · All systems active</span>
          </>
        )}
      </div>
    </aside>
  );
};

