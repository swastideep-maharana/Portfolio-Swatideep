import { AllProjects } from "@/components/AllProjects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Swastideep Maharana",
  description: "Showcase of my latest works and experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="py-20 md:py-32 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col mb-16">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
          Selected Work
        </h1>
        <div className="h-1 w-24 bg-orange-500 rounded-full" />
        <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
           A collection of projects where I've pushed the boundaries of design and engineering.
           From AI-powered tools to immersive web applications.
        </p>
      </div>

      <AllProjects />
    </div>
  );
}
