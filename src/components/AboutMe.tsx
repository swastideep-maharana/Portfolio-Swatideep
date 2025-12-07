"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin, IconCode } from "@tabler/icons-react";

export const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* 1. Profile Card (Left Column, 1/3 width) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-1 flex flex-col items-center justify-center p-8 rounded-3xl bg-neutral-100 dark:bg-white/5 border border-white/20 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow Effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 rounded-full blur-[80px]" />
        
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 rounded-full p-2 border-2 border-dashed border-orange-500/30">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/SwastideepProfile.png"
              alt="Swastideep Maharana"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 text-center">Swastideep Maharana</h3>
        <p className="text-orange-500 font-medium mb-6 text-center">Full Stack Developer</p>
        
        <div className="flex gap-3">
          <SocialButton href="https://github.com/swastideep-maharana" icon={<IconBrandGithub size={20} />} />
          <SocialButton href="https://www.linkedin.com/in/swastideep-maharana-090158280/" icon={<IconBrandLinkedin size={20} />} />
          <SocialButton href="mailto:swastideep67maharana@gmail.com" icon={<IconMail size={20} />} />
        </div>
      </motion.div>

      {/* 2. Content Grid (Right Column, 2/3 width) */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        
        {/* Bio Card - Spans full width of right column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-black/20 border border-neutral-200 dark:border-white/10 hover:border-orange-500/30 transition-colors flex flex-col justify-center"
        >
          <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500"><IconCode size={20} /></span>
            My Journey
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            I'm a passionate developer focused on creating intuitive, scalable digital products. My approach combines clean code architecture with pixel-perfect design.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I specialize in the React ecosystem (Next.js, Tailwind) and robust backend solutions (Node.js). I'm constantly exploring new technologies to build better user experiences.
          </p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-3xl bg-neutral-900 text-white relative overflow-hidden group min-h-[180px] flex flex-col justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10">
            <span className="p-2 rounded-lg bg-white/10 w-fit block mb-4"><IconMapPin size={20} /></span>
            <div className="space-y-1">
              <p className="text-neutral-400 text-sm">Based in</p>
              <p className="text-2xl font-bold">India</p>
            </div>
          </div>
          <div className="relative z-10 text-right">
              <span className="text-6xl opacity-20">IN</span>
          </div>
        </motion.div>

        {/* Status/Goal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-3xl bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-colors min-h-[180px] flex flex-col justify-between"
        >
          <div>
            <h4 className="text-orange-500 font-bold mb-2">Current Goal</h4>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              Seeking opportunities to contribute to large-scale distributed systems.
            </p>
          </div>
          <div className="mt-4">
             <div className="w-full h-2 bg-orange-200 dark:bg-orange-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[85%] rounded-full animate-pulse" />
             </div>
             <p className="text-xs text-right mt-2 text-orange-600 dark:text-orange-400">Loading next adventure...</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

const SocialButton = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white dark:bg-white/10 text-neutral-900 dark:text-white shadow-sm hover:bg-orange-500 hover:text-white transition-all duration-300 border border-neutral-200 dark:border-white/10"
  >
    {icon}
  </a>
);
