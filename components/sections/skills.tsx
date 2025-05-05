import { SkillBadge } from "@/components/skill-badge"
import { Database, Server, Code, Terminal, PenToolIcon as Tool, Cpu, Globe } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-4 w-4" />,
      skills: ["TypeScript", "JavaScript"],
    },
    {
      title: "Frameworks",
      icon: <Server className="h-4 w-4" />,
      skills: ["Express.js", "Next.js"],
    },
    {
      title: "Databases",
      icon: <Database className="h-4 w-4" />,
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      title: "ORMs",
      icon: <Cpu className="h-4 w-4" />,
      skills: ["Prisma", "Mongoose"],
    },
    {
      title: "Tools",
      icon: <Tool className="h-4 w-4" />,
      skills: ["Docker", "GitHub", "GitHub Actions"],
    },
    {
      title: "APIs & Integrations",
      icon: <Globe className="h-4 w-4" />,
      skills: ["OpenAI", "Binance Pay", "GatePay", "Brevo"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center mr-4">
            <Terminal className="h-5 w-5" />
          </span>
          Skills
        </h2>

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} icon={category.icon} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
