import { AboutMe } from "@/components/AboutMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Swastideep Maharana",
  description: "Full Stack Developer - About Me",
};

export default function AboutPage() {
  return (
    <div className="py-20 md:py-32 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col mb-16">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
          About Me
        </h1>
        <div className="h-1 w-24 bg-orange-500 rounded-full" />
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
           {`I'm Swastideep, a developer who loves building things for the web. 
           Here's a glimpse into my world, my journey, and what drives me.`}
        </p>
      </div>
      
      <AboutMe />
    </div>
  );
}
