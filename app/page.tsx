import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* <Skills /> */}
      <Contact />
    </main>
  );
}
