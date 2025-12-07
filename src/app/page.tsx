import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { AboutMe } from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Projects */}
      <section id="projects" className="w-full py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <div className="h-1 w-20 bg-orange-500 rounded-full" />
          </div>
          <Products />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full py-24 md:py-32 bg-neutral-100 dark:bg-neutral-900/20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
           <TechStack />
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="w-full py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-orange-500 rounded-full" />
          </div>
          <AboutMe />
        </div>
      </section>
    </>
  );
}
