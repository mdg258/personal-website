'use client';

import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

interface TerminalProps {
  children: ReactNode;
  className?: string;
  showHeader?: boolean;
  title?: string;
}

export function Terminal({ children, className, showHeader = true, title = '~' }: TerminalProps) {
  return (
    <div
      className={cn(
        'bg-terminal-bg-alt border border-terminal-border rounded-lg overflow-hidden',
        'shadow-lg',
        className
      )}
    >
      {showHeader && (
        <div className="bg-terminal-bg border-b border-terminal-border px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
          </div>
          <span className="ml-4 text-sm text-terminal-comment font-mono">{title}</span>
        </div>
      )}
      <div className="p-6 font-mono text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
}

interface TerminalLineProps {
  prompt?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalLine({ prompt = '$', children, className }: TerminalLineProps) {
  return (
    <div className={cn('flex gap-2 mb-2', className)}>
      <span className="text-terminal-green select-none">{prompt}</span>
      <span className="text-terminal-text-bright">{children}</span>
    </div>
  );
}

interface TerminalOutputProps {
  children: ReactNode;
  className?: string;
}

export function TerminalOutput({ children, className }: TerminalOutputProps) {
  return (
    <div className={cn('text-terminal-text ml-4 mb-3', className)}>
      {children}
    </div>
  );
}

export function TerminalCursor({ className }: { className?: string }) {
  return (
    <span className={cn('inline-block w-2 h-4 bg-terminal-green ml-1 animate-blink', className)}>

    </span>
  );
}
