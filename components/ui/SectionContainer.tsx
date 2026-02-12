'use client';

import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24',
        'flex items-center justify-center',
        className
      )}
    >
      <div className="max-w-6xl w-full">
        {children}
      </div>
    </section>
  );
}
