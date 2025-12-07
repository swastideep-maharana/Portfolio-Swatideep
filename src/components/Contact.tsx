"use client";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { ButtonCTA } from "./ButtonCTA";
import { ContactForm } from "./ContactForm";
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
      <div className="relative bg-white dark:bg-black rounded-2xl p-6 border border-neutral-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center justify-between">
          <ButtonCTA href={link.href} variant={link.variant} className="flex-1">
            <link.icon className="w-5 h-5 mr-2 group-hover:text-orange-500 transition-colors" />
            <span className="group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                 {link.label}
            </span>
          </ButtonCTA>
          <button
            onClick={handleCopy}
            className="ml-2 p-2 text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
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
      className="py-20 md:py-28 relative overflow-hidden bg-transparent"
    >
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Get in Touch
          </Heading>
          <div className="h-1 w-20 bg-orange-500 rounded-full mx-auto mt-6 mb-6" />
          <Paragraph className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how we can work together to
            bring your ideas to life.
          </Paragraph>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="glass rounded-2xl p-6 md:p-8 border border-white/10 dark:border-white/10 hover:border-orange-500/20 transition-colors duration-500">
            <ContactForm />
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
