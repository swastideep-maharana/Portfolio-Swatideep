"use client";
import { Paragraph } from "@/components/Paragraph";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "./Heading";
import { ButtonCTA } from "./ButtonCTA";
import {
  IconBrandGithub,
  IconExternalLink,
  IconChevronLeft,
  IconChevronRight,
  IconSearch,
  IconX,
  IconStar,
  IconGitFork,
  IconEye,
  IconCalendar,
  IconLayoutGrid,
  IconLayoutList,
  IconVideo,
  IconPhoto,
  IconBrandVercel,
  IconServer,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandSocketIo,
  IconBrain,
  IconMicrophone,
  IconCode,
} from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";

// Add project statistics interface
interface ProjectStats {
  stars: number;
  forks: number;
  views: number;
  lastUpdated: string;
}

const projects = [
  {
    title: "AI Tutor Companion",
    description:
      "AI Learning Companion transforms education through personalized AI tutoring and voice interaction. Built with Next.js and TypeScript, it offers interactive learning sessions with voice-enabled AI companions that adapt to your learning style.",
    image: "/Ai-tutuor.png",
    github:
      "https://github.com/swastideep-maharana/AI-Voice-Agent-Interview-Prep",
    live: "https://ai-voice-agent-interview-prep-4ztc.vercel.app",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Integration",
      "Voice API",
    ],
    stats: {
      stars: 10,
      forks: 5,
      views: 1000,
      lastUpdated: "2024-03-15",
    },
    timeline: {
      startDate: "2024-01-01",
      endDate: "2024-02-15",
      milestones: [
        "Frontend Development",
        "Backend API Integration",
        "Payment Gateway Integration",
        "Testing & Deployment",
      ],
    },
  },
  {
    title: "Tomato - Food Ordering & Delivery",
    description:
      "A full-stack food delivery web application with real-time order tracking, user authentication, and seamless payment integration. Features include restaurant listings, menu management, and order history.",
    image: "/tomato.png",
    github: "https://github.com/swastideep-maharana/Food-Delivery-Web-Frontend",
    live: "https://food-delivery-web-frontend-eexv.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    stats: {
      stars: 15,
      forks: 8,
      views: 1200,
      lastUpdated: "2024-03-15",
    },
    timeline: {
      startDate: "2024-01-01",
      endDate: "2024-02-15",
      milestones: [
        "Frontend Development",
        "Backend API Integration",
        "Payment Gateway Integration",
        "Testing & Deployment",
      ],
    },
  },
  {
    title: "ChatterBox",
    description:
      "A real-time chat application with features like user authentication, message history, and group chat functionality. Built with modern web technologies for optimal performance.",
    image: "/chatterbox.png",
    github: "https://github.com/swastideep-maharana/ChatterBox",
    live: "https://chatterbox-chat-app.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    stats: {
      stars: 5,
      forks: 2,
      views: 500,
      lastUpdated: "2024-03-15",
    },
    timeline: {
      startDate: "2024-01-01",
      endDate: "2024-02-15",
      milestones: [
        "Frontend Development",
        "Backend API Integration",
        "Payment Gateway Integration",
        "Testing & Deployment",
      ],
    },
  },
  {
    title: "BinkeyIt - E-commerce Platform",
    description:
      "A comprehensive e-commerce platform with features like product catalog, shopping cart, user authentication, payment processing, and order management. Built with modern web technologies for optimal performance.",
    image: "/binkeyit.png",
    github: "https://github.com/swastideep-maharana/BinkeyIt-Ecommerce",
    live: "https://binkeyit-ecommercee.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    stats: {
      stars: 8,
      forks: 3,
      views: 800,
      lastUpdated: "2024-03-15",
    },
    timeline: {
      startDate: "2024-01-01",
      endDate: "2024-02-15",
      milestones: [
        "Frontend Development",
        "Backend API Integration",
        "Payment Gateway Integration",
        "Testing & Deployment",
      ],
    },
  },
  {
    title: "Buildix",
    description:
      "A modern construction company website showcasing services, projects, and client testimonials. Features include project portfolio, contact forms, and service information.",
    image: "/buildix.png",
    github: "https://github.com/swastideep-maharana/buildix",
    live: "https://buildix-construction.vercel.app",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    stats: {
      stars: 3,
      forks: 1,
      views: 300,
      lastUpdated: "2024-03-15",
    },
    timeline: {
      startDate: "2024-01-01",
      endDate: "2024-02-15",
      milestones: [
        "Frontend Development",
        "Backend API Integration",
        "Payment Gateway Integration",
        "Testing & Deployment",
      ],
    },
  },
];

// Add unique technologies from all projects
const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.tech))
).sort();

// Add tech icon mapping with special styling for MERN stack
const techIcons: { [key: string]: any } = {
  "Next.js": IconBrandVercel,
  React: IconBrandReact,
  "Node.js": IconBrandNodejs,
  MongoDB: IconBrandMongodb,
  TypeScript: IconBrandTypescript,
  "Tailwind CSS": IconBrandTailwind,
  "Socket.io": IconBrandSocketIo,
  "AI Integration": IconBrain,
  "Voice API": IconMicrophone,
};

// Add ProjectStats component
const ProjectStats = ({ stats }: { stats: ProjectStats }) => (
  <div className="grid grid-cols-2 gap-4 p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl">
    <div className="flex items-center gap-2">
      <IconStar className="w-5 h-5 text-yellow-500" />
      <div>
        <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Stars
        </div>
        <div className="text-lg font-semibold text-zinc-900 dark:text-white">
          {stats.stars}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <IconGitFork className="w-5 h-5 text-purple-500" />
      <div>
        <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Forks
        </div>
        <div className="text-lg font-semibold text-zinc-900 dark:text-white">
          {stats.forks}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <IconEye className="w-5 h-5 text-blue-500" />
      <div>
        <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Views
        </div>
        <div className="text-lg font-semibold text-zinc-900 dark:text-white">
          {stats.views}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <IconCalendar className="w-5 h-5 text-green-500" />
      <div>
        <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Updated
        </div>
        <div className="text-lg font-semibold text-zinc-900 dark:text-white">
          {new Date(stats.lastUpdated).toLocaleDateString()}
        </div>
      </div>
    </div>
  </div>
);

// Add ProjectTimeline component
const ProjectTimeline = ({
  timeline,
}: {
  timeline: (typeof projects)[0]["timeline"];
}) => (
  <div className="mt-4 space-y-4">
    <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
      Project Timeline
    </h4>
    <div className="relative pl-4 border-l-2 border-purple-500/20">
      {timeline.milestones.map((milestone, index) => (
        <div key={index} className="relative mb-6 last:mb-0">
          <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-500" />
          <div className="ml-4">
            <div className="text-sm font-medium text-zinc-900 dark:text-white">
              {milestone}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              {index === 0
                ? timeline.startDate
                : index === timeline.milestones.length - 1
                  ? timeline.endDate
                  : ""}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProjectCard = ({
  title,
  description,
  image,
  github,
  live,
  tech,
  stats,
  direction,
  index,
}: {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
  stats: ProjectStats;
  direction: number;
  index: number;
}) => (
  <motion.div
    initial={{
      opacity: 0,
      y: 200,
      rotateX: 90,
      rotateY: -45,
      scale: 0.5,
      filter: "blur(20px) brightness(0.5)",
    }}
    animate={{
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      filter: "blur(0px) brightness(1)",
    }}
    exit={{
      opacity: 0,
      y: -200,
      rotateX: -90,
      rotateY: 45,
      scale: 0.5,
      filter: "blur(20px) brightness(0.5)",
    }}
    transition={{
      duration: 1,
      delay: index * 0.3,
      ease: [0.22, 1, 0.36, 1],
      type: "spring",
      stiffness: 50,
      damping: 15,
    }}
    whileHover={{
      y: -15,
      rotateX: 10,
      rotateY: -10,
      scale: 1.02,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    }}
    className="relative perspective-2000"
  >
    <motion.div
      className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 transform-gpu"
      style={{
        transformStyle: "preserve-3d",
        boxShadow:
          "0 30px 60px rgba(0,0,0,0.3), 0 0 20px rgba(147, 51, 234, 0.2)",
      }}
      whileHover={{
        boxShadow:
          "0 40px 80px rgba(0,0,0,0.4), 0 0 30px rgba(147, 51, 234, 0.3)",
      }}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-[400px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.3 }}
        />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{
            scale: 1.5,
            rotate: 15,
            filter: "brightness(0.3) contrast(1.2)",
          }}
          animate={{
            scale: 1,
            rotate: 0,
            filter: "brightness(1) contrast(1)",
          }}
          whileHover={{
            scale: 1.15,
            rotate: 5,
            filter: "brightness(1.1) contrast(1.1)",
            transition: {
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: index * 0.3,
          }}
        />

        {/* Project Number with 3D effect */}
        <motion.div
          className="absolute top-4 left-4 z-20"
          initial={{
            opacity: 0,
            x: -100,
            rotateY: -180,
            scale: 0.2,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.9 + index * 0.3,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <span className="text-6xl font-bold text-white/10 transform-gpu">
            0{index + 1}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        <div className="space-y-4">
          <motion.h3
            className="text-3xl font-bold text-white"
            initial={{
              opacity: 0,
              y: 50,
              rotateX: 90,
              filter: "blur(10px) brightness(0.5)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px) brightness(1)",
            }}
            transition={{
              delay: 1.2 + index * 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            {title}
          </motion.h3>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 1.5 + index * 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <Paragraph className="text-zinc-400 text-lg leading-relaxed">
              {description}
            </Paragraph>
          </motion.div>

          {/* Tech Stack with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 + index * 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {tech.map((item, i) => {
              const Icon = techIcons[item] || IconCode;
              const isCoreTech = ["React", "Node.js", "MongoDB"].includes(item);
              return (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                    rotate: -45,
                    y: 50,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 2.1 + index * 0.3 + i * 0.15,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    y: -5,
                    filter: "brightness(1.1)",
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 5,
                    },
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-2.5 ${
                    isCoreTech
                      ? "bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 text-purple-600 dark:text-purple-300 border-0 hover:from-purple-500/10 hover:to-blue-500/10 dark:hover:from-purple-500/20 dark:hover:to-blue-500/20"
                      : "bg-white/50 dark:bg-black/50 text-purple-700 dark:text-purple-400 border border-purple-100/50 dark:border-purple-900/20 hover:bg-white/80 dark:hover:bg-black/80"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isCoreTech ? "text-purple-500 dark:text-purple-400" : "text-purple-600 dark:text-purple-500"}`}
                  />
                  <span className="font-semibold">{item}</span>
                </motion.span>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.8,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 2.4 + index * 0.3,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <ButtonCTA
            href={live}
            variant="primary"
            className="w-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform-gpu hover:scale-110 transition-all duration-300"
          >
            <IconExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </ButtonCTA>
        </motion.div>
      </div>

      {/* Stats with 3D hover effect */}
      <motion.div
        className="p-6 border-t border-zinc-100 dark:border-zinc-800"
        initial={{
          opacity: 0,
          y: 30,
          rotateX: 90,
          filter: "blur(5px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
        }}
        transition={{
          delay: 2.7 + index * 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
          {[
            { icon: IconStar, value: stats.stars, color: "text-yellow-500" },
            { icon: IconGitFork, value: stats.forks, color: "text-purple-500" },
            { icon: IconEye, value: stats.views, color: "text-blue-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2"
              whileHover={{
                scale: 1.3,
                rotateY: 30,
                y: -5,
                filter: "brightness(1.2)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 5,
                },
              }}
            >
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <span>{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);

// Add ProjectModal component
const ProjectModal = ({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
      >
        <IconX className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
      </button>

      <div className="relative h-[400px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-white/10 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>

        {/* Project Stats */}
        <ProjectStats stats={project.stats} />

        {/* Project Timeline */}
        <ProjectTimeline timeline={project.timeline} />

        <div className="flex gap-4">
          <ButtonCTA href={project.live} variant="primary" className="flex-1">
            <IconExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </ButtonCTA>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Add view mode type
type ViewMode = "grid" | "list";

export const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = !selectedTech || project.tech.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <section
      id="projects"
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

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
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
            Featured Projects
          </Heading>
          <Paragraph className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in web
            development and design.
          </Paragraph>

          {/* View Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-purple-500 text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              <IconLayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-purple-500 text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              <IconLayoutList className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all duration-300"
              />
              <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
            </div>
          </motion.div>

          {/* Technology Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedTech === null
                  ? "bg-purple-500 text-white"
                  : "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30"
              }`}
            >
              All Projects
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedTech === tech
                    ? "bg-purple-500 text-white"
                    : "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/30"
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-zinc-600 dark:text-zinc-400"
          >
            Showing {filteredProjects.length} of {projects.length} projects
          </motion.div>
        </motion.div>

        {/* Project Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-8"
          }
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white dark:bg-black rounded-2xl overflow-hidden border border-purple-100/50 dark:border-purple-900/10 shadow-sm hover:shadow-md transition-all duration-300 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative ${viewMode === "list" ? "w-1/3" : "aspect-video"} overflow-hidden`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <IconPhoto className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-50 dark:bg-black text-purple-700 dark:text-purple-300 rounded-full border border-purple-100 dark:border-purple-900/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <ButtonCTA
                    href={project.live}
                    variant="primary"
                    className="w-full"
                  >
                    <IconExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </ButtonCTA>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Preview Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconX className="w-5 h-5 text-white" />
                </button>
                <Image
                  src={selectedImage}
                  alt="Project Preview"
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
