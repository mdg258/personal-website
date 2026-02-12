'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
}

export function TypingEffect({
  text,
  speed = 50,
  delay = 0,
  onComplete,
  className
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isStarted, onComplete]);

  return <span className={className}>{displayedText}</span>;
}

interface TypingSequenceProps {
  sequences: {
    text: string;
    speed?: number;
    delay?: number;
    isCommand?: boolean;
  }[];
  className?: string;
}

export function TypingSequence({ sequences, className }: TypingSequenceProps) {
  const [currentSequence, setCurrentSequence] = useState(0);

  const handleComplete = () => {
    if (currentSequence < sequences.length - 1) {
      setCurrentSequence(currentSequence + 1);
    }
  };

  return (
    <div className={className}>
      {sequences.map((seq, index) => (
        <div key={index}>
          {index <= currentSequence && (
            <TypingEffect
              text={seq.text}
              speed={seq.speed || 50}
              delay={seq.delay || 0}
              onComplete={index === currentSequence ? handleComplete : undefined}
              className={seq.isCommand ? 'text-terminal-green' : 'text-terminal-text-bright'}
            />
          )}
        </div>
      ))}
    </div>
  );
}
