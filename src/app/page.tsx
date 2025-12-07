import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Projects Section */}
      <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-neutral-900 dark:text-white mb-16">
            Featured Projects
          </h2>
          <Products />
        </div>
      </section>

      {/* About Me - Bento Grid Section */}
      <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-neutral-900 dark:text-white mb-16">
            About Me
          </h2>
          <BentoGrid />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32">
        <div className="w-full max-w-7xl mx-auto">
          <TechStack />
        </div>
      </section>
    </>
  );
}
