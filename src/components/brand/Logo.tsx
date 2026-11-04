import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarkProps {
  className?: string;
}

/** The Guru Kirpa symbol: a blue half and a gold half of wings and diamonds (see /logo-mark.svg). */
export const LogoMark: React.FC<LogoMarkProps> = ({ className }) => (
  <img className={className} src="/logo-mark.svg" alt="" width={42} height={42} aria-hidden="true" />
);

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
