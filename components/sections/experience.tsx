import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "Xedla Pay",
      period: "2024 – Present",
      responsibilities: [
        "Built and maintained high-performance microservices for handling user transactions, wallets, escrow service and payment gateways.",
        "Collaborated with frontend and DevOps teams to deploy features seamlessly using CI/CD pipelines and Docker.",
        "Integrated third-party services for secure authentication, in-app notifications, and analytics.",
        "Developed robust REST APIs with full test coverage using TypeScript and Jest.",
        "Ensured system scalability and uptime through distributed job queues and background task management using BullMQ.",
      ],
    },
    {
      title: "Lead Backend Developer",
      company: "Mentor AI",
      period: "2024 – Present",
      responsibilities: [
        "Architected the core backend of a multilingual AI-powered mentorship platform tailored to users' career goals.",
        "Integrated OpenAI's API for real-time chat, voice coaching, and smart learning path generation.",
        "Built onboarding flow, user progress tracking, and dynamic mentor assignment using PostgreSQL.",
        "Designed a scalable architecture separating AI logic, chat sessions, and user profiles into dedicated services.",
        "Implemented secure user authentication and session persistence.",
      ],
    },
    {
      title: "Backend Developer",
      company: "EduStack",
      period: "2023 – 2024",
      responsibilities: [
        "Developed a full-featured SaaS school management system supporting multi-tenant setup (multi-school).",
        "Engineered computer-based test (CBT) modules with automated grading and result publishing.",
        "Designed academic models for sessions, terms, classes, and student promotion history using Prisma ORM.",
        "Integrated parent-student portals, staff management, and dynamic role-based access control.",
        "Added email and in-app notifications using event-based architecture.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Nesterlify",
      period: "2024",
      responsibilities: [
        "Built a crypto-powered booking backend system for flights, cars, and vacations.",
        "Integrated multiple crypto payment gateways including Binance Pay and NowPayments.",
        "Designed secure booking workflows and real-time availability checks using Mongoose and MongoDB.",
        "Used Brevo for transactional email notifications and booking confirmations.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center mr-4">
            <Briefcase className="h-5 w-5" />
          </span>
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-indigo-100 dark:border-indigo-900">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}{" "}
                      {exp.company && <span className="text-indigo-600 dark:text-indigo-400">@ {exp.company}</span>}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="mt-2 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
