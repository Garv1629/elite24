import React, { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';
import { useNetworkStatus } from '../utils/networkManager';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  srcSet,
  alt,
  className = '',
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [retryAttempt, setRetryAttempt] = useState(0);
  const { isOnline } = useNetworkStatus();

  // Reset error when src changes or when connection returns online
  useEffect(() => {
    if (hasError && isOnline) {
      setHasError(false);
      setRetryAttempt((prev) => prev + 1);
    }
  }, [src, isOnline]);

  const handleError = () => {
    if (retryAttempt < 1) {
      // Auto-retry once after 1.2s to handle momentary WiFi/IP handover drop
      setTimeout(() => {
        setRetryAttempt((prev) => prev + 1);
      }, 1200);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !src) {
    return (
      <div
        className={`bg-[#E2DCC2]/60 border border-[#111111]/10 flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
        role="img"
        aria-label={alt || 'Elite24 Architectural Preview'}
      >
        <div className="w-10 h-10 rounded-full bg-[#F2EED8] border border-[#111111]/15 flex items-center justify-center text-[#E09290] mb-2 shadow-sm">
          <Building2 className="w-5 h-5" />
        </div>
        <span className="text-[11px] uppercase tracking-widest font-mono text-[#111111]/70 font-semibold">
          {fallbackTitle || alt || 'Elite24 Architecture'}
        </span>
        <span className="text-[9px] uppercase tracking-wider font-mono text-[#111111]/40 mt-1">
          Verified Property Residence
        </span>
      </div>
    );
  }

  // Append a cache-buster query on retry to force network re-fetch
  const effectiveSrc = retryAttempt > 0 && src
    ? (src.includes('?') ? `${src}&retry=${retryAttempt}` : `${src}?retry=${retryAttempt}`)
    : src;

  return (
    <img
      src={effectiveSrc}
      srcSet={srcSet}
      alt={alt || ''}
      className={className}
      loading="lazy"
      decoding="async"
      onError={handleError}
      {...props}
    />
  );
};

