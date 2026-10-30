import React, { useId } from 'react';
import { cn } from '@/lib/utils';

interface LogoMarkProps {
  className?: string;
}

/** Code brackets cradling a lamp flame: "Guru" is the light that removes darkness. */
export const LogoMark: React.FC<LogoMarkProps> = ({ className }) => {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-b`} x1="6" y1="8" x2="58" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5B8CFF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id={`${id}-f`} x1="32" y1="6" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFD36B" />
          <stop offset="1" stopColor="#FF7A1A" />
        </linearGradient>
      </defs>
      <path d="M24 13 8 32l16 19" stroke={`url(#${id}-b)`} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 13l16 19-16 19" stroke={`url(#${id}-b)`} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(0 7)">
        <path d="M32.5 6.5c1.6 7.6 9.9 13.1 9.9 24.4a10.4 10.4 0 0 1-20.8 0c0-5.1 2.6-8.8 5.4-11.9.4 3.6 1.9 5.9 4.2 6.8-1.4-7.1-1.3-12.5 1.3-19.3Z" fill={`url(#${id}-f)`} />
        <path d="M32 29.5c2.9 2.6 4.4 5 4.4 7.6a4.4 4.4 0 0 1-8.8 0c0-2.6 1.5-5 4.4-7.6Z" fill="#FFF3D1" opacity=".95" />
      </g>
    </svg>
  );
};

interface LogoProps {
  className?: string;
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, compact }) => (
  <span className={cn('gk-logo', className)}>
    <LogoMark className="gk-logo-mark" />
    {!compact && (
      <span className="gk-logo-text">
        <strong>Guru Kirpa</strong>
        <small>INFOTECH</small>
      </span>
    )}
  </span>
);
