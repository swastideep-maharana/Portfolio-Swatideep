"use client";
import { Paragraph } from "@/components/Paragraph";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import {
  IconCode,
  IconPalette,
  IconDeviceLaptop,
  IconRocket,
} from "@tabler/icons-react";
import Image from "next/image";

const features = [
  {
    icon: IconCode,
    title: "Clean Code",
    description:
      "Writing maintainable, efficient, and well-documented code that follows best practices and design patterns.",
  },
  {
    icon: IconPalette,
    title: "Creative Design",
    description:
      "Creating beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
  },
  {
    icon: IconDeviceLaptop,
    title: "Responsive Development",
    description:
      "Building applications that work seamlessly across all devices and screen sizes with optimal performance.",
  },
  {
    icon: IconRocket,
    title: "Modern Solutions",
    description:
      "Implementing cutting-edge technologies and frameworks to deliver innovative solutions to complex problems.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <Heading
                as="h2"
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400"
              >
                About Me
              </Heading>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400 rounded-full mt-4"
              />
            </div>

            <Paragraph className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a keen eye for creating
              elegant solutions in the least amount of time. I specialize in
              building responsive web applications using modern technologies.
            </Paragraph>

            <Paragraph className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in both front-end and back-end
              development, I strive to create seamless user experiences while
              maintaining clean and efficient code.
            </Paragraph>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                  "Tailwind CSS",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="px-4 py-2 bg-purple-50 dark:bg-black text-purple-700 dark:text-purple-300 rounded-lg text-center border border-purple-100 dark:border-purple-900/20"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Decorative Elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-black dark:to-black rounded-2xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500/10 dark:to-blue-500/10 flex items-center justify-center shadow-lg overflow-hidden"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/SwastideepProfile.png"
                    alt="Swastideep Maharana"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-6 h-6 rounded-full bg-purple-500/10 dark:bg-purple-500/5"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    top: "50%",
                    left: "50%",
                    marginTop: -3,
                    marginLeft: -3,
                    transformOrigin: `${150 + i * 50}px 0`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
