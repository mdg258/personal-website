'use client';

import { Terminal, TerminalOutput, TerminalCursor } from '@/components/ui/Terminal';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

function TypingText({ text, delay = 0, shouldStart = true }: { text: string; delay?: number; shouldStart?: boolean }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, shouldStart]);

  return (
    <div className={`flex items-center mb-2 ${shouldStart ? 'opacity-100' : 'opacity-0'}`}>
      <span className="text-terminal-green mr-2">$</span>
      <span className="text-terminal-text">{displayedText}</span>
      {!isComplete && shouldStart && <TerminalCursor />}
    </div>
  );
}

export function Hero() {
  const [showCursor, setShowCursor] = useState(false);
  const [showOutput1, setShowOutput1] = useState(false);
  const [showOutput2, setShowOutput2] = useState(false);
  const [showOutput3, setShowOutput3] = useState(false);
  const [showOutput4, setShowOutput4] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowOutput1(true), 1500);   // After "whoami" types (with initial delay)
    setTimeout(() => setShowOutput2(true), 2500);   // After "cat role.txt" types
    setTimeout(() => setShowOutput3(true), 4100);   // After "git log" types
    setTimeout(() => setShowOutput4(true), 5850);   // After "cat credentials" types
    setTimeout(() => setShowCursor(true), 7000);    // Show final cursor
  }, []);

  return (
    <SectionContainer id="hero" className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="w-full flex items-center justify-center"
      >
        <Terminal title="michael@portfolio:~" className="max-w-4xl w-full h-[530px]">
          <TypingText text="whoami" delay={800} shouldStart={true} />
          <div className={showOutput1 ? 'opacity-100' : 'opacity-0'}>
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showOutput1 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-terminal-text-bright text-2xl sm:text-3xl lg:text-4xl font-bold"
              >
                Michael D. Glenn
              </motion.div>
            </TerminalOutput>
          </div>

          <div className="h-6" />

          <TypingText text="cat role.txt" delay={200} shouldStart={showOutput1} />
          <div className={showOutput2 ? 'opacity-100' : 'opacity-0'}>
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showOutput2 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-terminal-cyan text-lg sm:text-xl lg:text-2xl"
              >
                Site Reliability | Network Automation | Infrastructure
              </motion.div>
            </TerminalOutput>
          </div>

          <div className="h-6" />

          <TypingText text="git log --oneline --graph" delay={200} shouldStart={showOutput2} />
          <div className={showOutput3 ? 'opacity-100' : 'opacity-0'}>
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showOutput3 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col text-terminal-text font-mono text-sm"
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
          </div>

          <div className="h-6" />

          <TypingText text="cat /etc/security/credentials" delay={200} shouldStart={showOutput3} />
          <div className={showOutput4 ? 'opacity-100' : 'opacity-0'}>
            <TerminalOutput>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showOutput4 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 text-terminal-text"
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
          </div>

          <div className="h-6" />

          <div className={showCursor ? 'opacity-100' : 'opacity-0'}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showCursor ? 1 : 0 }}
              className="flex items-center"
            >
              <span className="text-terminal-green mr-2">$</span>
              <TerminalCursor />
            </motion.div>
          </div>
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
