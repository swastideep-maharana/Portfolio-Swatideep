"use client";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { ButtonCTA } from "./ButtonCTA";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";

const socialLinks = [
  {
    icon: IconMail,
    href: "mailto:swastideep67maharana@gmail.com",
    label: "Send me an email",
    variant: "primary" as const,
    copyText: "swastideep67maharana@gmail.com",
  },
  {
    icon: IconBrandGithub,
    href: "https://github.com/swastideep-maharana",
    label: "View my GitHub",
    variant: "secondary" as const,
    copyText: "https://github.com/swastideep-maharana",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/swastideep-maharana-090158280/",
    label: "Connect on LinkedIn",
    variant: "secondary" as const,
    copyText: "https://www.linkedin.com/in/swastideep-maharana-090158280/",
  },
  {
    icon: IconBrandTwitter,
    href: "https://twitter.com/swastideep884",
    label: "Follow on Twitter",
    variant: "secondary" as const,
    copyText: "https://twitter.com/swastideep884",
  },
];

const SocialLink = ({
  link,
  index,
}: {
  link: (typeof socialLinks)[0];
  index: number;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link.copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      key={link.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="relative group"
    >
      <div className="relative bg-white dark:bg-black rounded-2xl p-6 border border-purple-100/50 dark:border-purple-900/10 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/5 dark:to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center justify-between">
          <ButtonCTA href={link.href} variant={link.variant} className="flex-1">
            <link.icon className="w-5 h-5 mr-2" />
            {link.label}
          </ButtonCTA>
          <button
            onClick={handleCopy}
            className="ml-2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <IconCheck className="w-5 h-5 text-green-500" />
            ) : (
              <IconCopy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-white dark:from-black dark:via-black dark:to-black" />

      {/* Accent Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent dark:via-purple-500/10"
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <Heading
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400"
          >
            Get in Touch
          </Heading>
          <Paragraph className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can work together to
            bring your ideas to life.
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {socialLinks.map((link, index) => (
            <SocialLink key={link.href} link={link} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
