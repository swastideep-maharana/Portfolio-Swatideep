"use client";

import { motion } from "framer-motion";
import { IconBrandReact, IconBrandNodejs, IconBrandNextjs, IconBrandTypescript, IconBrandTailwind, IconDatabase, IconBrandDocker, IconBrandAws, IconBrandGit, IconBrandFigma } from "@tabler/icons-react";

export const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: IconBrandReact, color: "text-[#61DAFB] group-hover:text-[#61DAFB]" },
        { name: "Next.js", icon: IconBrandNextjs, color: "text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white" },
        { name: "TypeScript", icon: IconBrandTypescript, color: "text-[#3178C6] group-hover:text-[#3178C6]" },
        { name: "Tailwind CSS", icon: IconBrandTailwind, color: "text-[#06B6D4] group-hover:text-[#06B6D4]" },
        { name: "Figma", icon: IconBrandFigma, color: "text-[#F24E1E] group-hover:text-[#F24E1E]" },
      ],
    },
    {
      category: "Backend & Infrastructure",
      skills: [
        { name: "Node.js", icon: IconBrandNodejs, color: "text-[#339933] group-hover:text-[#339933]" },
        { name: "Database", icon: IconDatabase, color: "text-[#47A248] group-hover:text-[#47A248]" }, 
        { name: "Docker", icon: IconBrandDocker, color: "text-[#2496ED] group-hover:text-[#2496ED]" },
        { name: "AWS", icon: IconBrandAws, color: "text-[#FF9900] group-hover:text-[#FF9900]" },
        { name: "Git", icon: IconBrandGit, color: "text-[#F05032] group-hover:text-[#F05032]" },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Built with the latest technologies for maximum performance and scalability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent blur-xl" />
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
            </div>

            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 relative z-10">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative z-10">
              {group.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="flex flex-col items-center gap-3 group/skill cursor-pointer">
                  <div className={`p-4 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 shadow-sm transition-all duration-300 group-hover/skill:shadow-[0_0_20px_rgba(251,146,60,0.3)] group-hover/skill:border-orange-500/50 ${skill.color}`}>
                    <skill.icon className="w-8 h-8" stroke={1.5} />
                  </div>
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 group-hover/skill:text-neutral-900 dark:group-hover/skill:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
