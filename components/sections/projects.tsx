import { ProjectCard } from "@/components/project-card"

export default function Projects() {
  const projects = [
    {
      title: "Mentor AI",
      description:
        "A multilingual AI career mentor platform offering tailored learning paths, mock interviews, real-time coaching, and integration with OpenAI.",
      techStack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "MongoDB", "OpenAI API"],
      highlights: [
        "Built onboarding flow, chat engine, and AI integration logic",
        "Supports multilingual interaction and dynamic mentor loading",
      ],
    },
    {
      title: "EduStack",
      description:
        "A SaaS school management system with features like CBT, session/term handling, class/section management, and result uploads.",
      techStack: ["TypeScript", "Express.js", "Prisma ORM", "PostgreSQL"],
      highlights: ["Supports multi-school setup", "Built CBT engine and student promotion logic"],
    },
    {
      title: "Nesterlify",
      description:
        "A crypto-powered booking system for flights, cars, and vacations. Built for a client and supports only crypto payments.",
      techStack: ["MongoDB", "Mongoose", "Brevo", "Binance Pay", "NowPayments"],
      highlights: ["Integrated Binance Pay and GatePay", "Built secure booking and notification flow"],
    },
    {
      title: "DeclutMart",
      description: "A product decluttering marketplace backend.",
      techStack: ["Express.js", "TypeScript", "MongoDB"],
      highlights: ["Handled product listings, user roles, and order processing"],
    },
    {
      title: "JAMB Focus",
      description: "A CBT-focused learning platform.",
      techStack: ["Express.js", "MongoDB", "Node.js"],
      highlights: ["Backend engineer for quiz logic and performance tracking"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center mr-4">
            <span className="text-xl">🚀</span>
          </span>
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              highlights={project.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
