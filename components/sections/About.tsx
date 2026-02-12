'use client';

import { SectionContainer } from '@/components/ui/SectionContainer';
import { Terminal, TerminalLine, TerminalOutput, TerminalCursor } from '@/components/ui/Terminal';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/utils/animations';
import { siteMetadata } from '@/lib/data/metadata';
import { Mail, Linkedin, Github, Phone, FileDown } from 'lucide-react';

export function About() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: siteMetadata.email,
      href: `mailto:${siteMetadata.email}`,
      color: 'text-terminal-cyan',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteMetadata.phone,
      href: `tel:${siteMetadata.phone}`,
      color: 'text-terminal-green',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/michael-d-glenn/',
      href: siteMetadata.linkedin,
      color: 'text-terminal-cyan',
    },
    {
      icon: Github,
      label: 'Github',
      value: 'github.com/mdg258',
      href: siteMetadata.github,
      color: 'text-terminal-purple',
    },
    {
      icon: FileDown,
      label: 'Resume',
      value: 'Download PDF',
      href: '/resume/Michael_Glenn_Resume.pdf',
      color: 'text-terminal-yellow',
    },
  ];

  return (
    <SectionContainer id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Bio Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-terminal-text-bright mb-6">
            $ whoami --verbose
          </h2>

          <br />

          <div className="space-y-4 text-terminal-text text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;m a <span className="text-terminal-orange">Site Reliability</span> and{' '}
              <span className="text-terminal-cyan">Network</span> Engineer with a unique background
              spanning military service, FAANG, and Fortune 500 companies.
            </p>
            <br />
            <p>
              After completing my contract as a Lead Network Administrator and Paratrooper for the{' '}
              <span className="text-terminal-green">U.S. Army&apos;s 18th Airborne Corps</span>, I knew I
              wanted to dive deeper into technology.
            </p>

            <br />

            <p>
              I matriculated to{' '}
              <span className="text-terminal-red">Cornell University</span> as a nontraditional
              student where I completed my{' '}
              <span className="text-terminal-yellow">B.S. Information Science</span> with a concentration in{' '}
              <span className="text-terminal-yellow">Networks, Crowds, & Markets</span>.
            </p>

            <br />

            <p>
              While at Cornell, I expanded my expertise by completing technical engineering internships at{' '}
              <span className="text-terminal-cyan">Meta</span>,{' '}
              <span className="text-terminal-cyan">USAA</span>, and{' '}
              <span className="text-terminal-cyan">Cisco Meraki</span>.
            </p>
          </div>
        </motion.div>

        {/* Stats Terminal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Terminal title="contact.sh" className="h-full">
            <div className="h-4" />
            <TerminalLine prompt="$">./contact.sh --list</TerminalLine>
            <div className="h-2" />
            <TerminalOutput>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded hover:bg-terminal-bg-alt border border-transparent hover:border-terminal-green transition-all group"
                    >
                      <Icon className={`w-6 h-6 ${method.color} group-hover:scale-110 transition-transform`} />
                      <div className="flex-1">
                        <br />
                        <div className="text-terminal-comment text-sm font-mono">
                          {method.label}
                        </div>
                        <div className="text-terminal-text-bright font-mono">
                          {method.value}
                        </div>
                      </div>
                      <span className="text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  );
                })}
              </div>
            </TerminalOutput>
            <div className="h-4" />
            <div className="flex items-center">
              <span className="text-terminal-green mr-2">$</span>
              <TerminalCursor />
            </div>
          </Terminal>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
