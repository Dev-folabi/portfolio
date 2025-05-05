import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const techStack = [
    { category: "Languages", items: ["TypeScript", "JavaScript"] },
    { category: "Frameworks", items: ["Express.js", "Next.js"] },
    { category: "ORMs", items: ["Prisma", "Mongoose"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
    { category: "DevOps/Tools", items: ["Docker", "GitHub Actions", "Brevo", "Binance Pay", "GatePay", "NowPayments"] },
    { category: "APIs", items: ["OpenAI"] },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center mr-4">
            <span className="text-xl">👨‍💻</span>
          </span>
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-indigo-100 dark:border-indigo-900 h-full">
              <CardContent className="pt-6 pb-6">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed h-full">
                  I'm a backend engineer who specializes in building robust systems using TypeScript, Node.js (Express),
                  and databases like PostgreSQL and MongoDB. I enjoy working on SaaS platforms, AI integrations, and
                  fintech products. I'm currently the backend engineer behind{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Mentor AI</span>,{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">EduStack</span>, and{" "}
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">Nesterlify</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-indigo-100 dark:border-indigo-900 h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
                <div className="space-y-4">
                  {techStack.map((tech) => (
                    <div key={tech.category}>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{tech.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item) => (
                          <Badge
                            key={item}
                            variant="secondary"
                            className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/40"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
