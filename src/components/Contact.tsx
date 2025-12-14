"use client";
import React, { useState } from "react";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";

const socials = [
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/swastideep-maharana-090158280/",
    label: "LinkedIn",
  },
  {
    icon: IconBrandGithub,
    href: "https://github.com/swastideep-maharana",
    label: "GitHub",
  },
];

export const Contact = () => {
    const [emailCopied, setEmailCopied] = useState(false);
    const email = "swastideep67maharana@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Info & Connect */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-start space-y-8"
        >
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
                    Let's Connect
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I'm currently seeking new opportunities and would love to hear from you. 
                    Whether you have a question, a project idea, or just want to say hi, 
                    my inbox is always open.
                </p>
            </div>

            {/* Email Card */}
            <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200 dark:border-white/10 shadow-xl transition-all duration-300 group hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:border-orange-500/30 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                        <div className="p-3 sm:p-4 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-500 shrink-0 ring-1 ring-orange-500/20">
                            <IconMail className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <div className="w-full min-w-0">
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">Mail me at</p>
                            <h3 className="text-neutral-900 dark:text-white font-bold text-lg sm:text-xl md:text-2xl break-all leading-tight">
                                {email}
                            </h3>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-6">
                        <a 
                            href={`mailto:${email}`}
                            className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-center text-sm sm:text-base hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Send Email
                        </a>
                        <button
                            onClick={handleCopyEmail}
                            className="px-5 py-3 rounded-xl border border-neutral-200 dark:border-white/10 hover:bg-orange-500 hover:text-white hover:border-orange-500 dark:hover:bg-orange-500 dark:hover:text-white dark:hover:border-orange-500 transition-colors text-neutral-600 dark:text-neutral-300 backdrop-blur-sm"
                            title="Copy Email"
                        >
                            {emailCopied ? <IconCheck className="w-5 h-5 text-white" /> : <IconCopy className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Socials Row */}
            <div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">
                    Or find me on social media
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-lg group/social"
                            title={social.label}
                        >
                            <social.icon className="w-5 h-5 transition-transform group-hover/social:scale-110" />
                            <span className="font-medium">{social.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <div className="bg-white dark:bg-neutral-900/30 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-white/10 shadow-2xl">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Send a Message
                </h3>
                <ContactForm />
            </div>
        </motion.div>

      </div>
    </section>
  );
};
