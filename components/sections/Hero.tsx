'use client';

import { Terminal, TerminalOutput, TerminalCursor } from '@/components/ui/Terminal';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function TypingText({ text, delay = 0, onComplete }: { text: string; delay?: number; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // Keep ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }
      }, 50);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [text, delay]);

  return (
    <div className="flex items-center mb-2">
      <span className="text-terminal-green mr-2">$</span>
      <span className="text-terminal-text">{displayedText}</span>
      {!isComplete && <TerminalCursor />}
    </div>
  );
}

export function Hero() {
  const [showCursor, setShowCursor] = useState(false);
  const [showOutput1, setShowOutput1] = useState(false);
  const [showCommand2, setShowCommand2] = useState(false);
  const [showOutput2, setShowOutput2] = useState(false);
  const [showCommand3, setShowCommand3] = useState(false);
  const [showOutput3, setShowOutput3] = useState(false);
  const [showCommand4, setShowCommand4] = useState(false);
  const [showOutput4, setShowOutput4] = useState(false);

  return (
    <SectionContainer id="hero" className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="w-full flex items-center justify-center"
      >
        <Terminal title="michael@portfolio:~" className="max-w-4xl w-full h-[530px]">
          <TypingText
            text="whoami"
            delay={800}
            onComplete={() => setShowOutput1(true)}
          />

          {showOutput1 && (
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-terminal-text-bright text-2xl sm:text-3xl lg:text-4xl font-bold"
                onAnimationComplete={() => setShowCommand2(true)}
              >
                Michael D. Glenn
              </motion.div>
            </TerminalOutput>
          )}

          {showCommand2 && (
            <>
              <div className="h-6" />
              <TypingText
                text="cat role.txt"
                delay={200}
                onComplete={() => setShowOutput2(true)}
              />
            </>
          )}

          {showOutput2 && (
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-terminal-cyan text-lg sm:text-xl lg:text-2xl"
                onAnimationComplete={() => setShowCommand3(true)}
              >
                Site Reliability | Network Automation | Infrastructure
              </motion.div>
            </TerminalOutput>
          )}

          {showCommand3 && (
            <>
              <div className="h-6" />
              <TypingText
                text="git log --oneline --graph"
                delay={200}
                onComplete={() => setShowOutput3(true)}
              />
            </>
          )}

          {showOutput3 && (
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col text-terminal-text font-mono text-sm"
                onAnimationComplete={() => setShowCommand4(true)}
              >
                <span><span className="text-terminal-orange">*</span> <span className="text-terminal-yellow">2025</span>  feat: Graduated @ Cornell University</span>
                <span><span className="text-terminal-orange">*</span> <span className="text-terminal-yellow">2025</span>  feat: Site Reliability @ Cisco Meraki</span>
                <span><span className="text-terminal-orange">*</span> <span className="text-terminal-yellow">2024</span>  feat: Infrastructure @ USAA</span>
                <span><span className="text-terminal-orange">*</span> <span className="text-terminal-yellow">2023</span>  feat: Network Automation @ Meta</span>
                <span><span className="text-terminal-orange">*</span> <span className="text-terminal-yellow">2022</span>  feat: Network Automation @ Meta</span>
                <span><span className="text-terminal-orange">*</span> <span className="text-terminal-yellow">2021</span>  feat: Matriculated @ Cornell University</span>
                <span><span className="text-terminal-orange">*</span> <span className="text-terminal-yellow">2017</span>  init: Army Network Engineer & Paratrooper</span>
              </motion.div>
            </TerminalOutput>
          )}

          {showCommand4 && (
            <>
              <div className="h-6" />
              <TypingText
                text="cat /etc/security/credentials"
                delay={200}
                onComplete={() => setShowOutput4(true)}
              />
            </>
          )}

          {showOutput4 && (
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 text-terminal-text"
                onAnimationComplete={() => setShowCursor(true)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green">✓</span>
                  <span>CompTIA Security+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green">✓</span>
                  <span>CompTIA Network+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green">✓</span>
                  <span>Top Secret/SCI clearance (inactive)</span>
                </div>
              </motion.div>
            </TerminalOutput>
          )}

          {showCursor && (
            <>
              <div className="h-6" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center"
              >
                <span className="text-terminal-green mr-2">$</span>
                <TerminalCursor />
              </motion.div>
            </>
          )}
        </Terminal>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-terminal-comment cursor-pointer hover:text-terminal-green transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-mono">scroll down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
