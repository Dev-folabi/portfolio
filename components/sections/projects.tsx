import { ProjectCard } from "@/components/project-card";
import { Briefcase } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Xedla-Pay",
      demoUrl: "https://xedla.com/",
      description:
        "A fintech payment platform enabling secure digital transactions, user accounts, escrow flows, and tier-based transaction limits.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
      ],
      highlights: [
        "Built core payment and transaction APIs, including escrow and pending balance handling",
        "Implemented tier-based transaction limits and verification logic",
        "Designed secure authentication and authorization flows",
        "Optimized database queries for high-volume transaction processing",
      ],
    },
    {
      title: "Nesterlify",
      demoUrl: "https://nesterlify.com/",
      description:
        "A crypto-powered booking platform for flights, car rentals, and vacation packages, supporting end-to-end crypto payments.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Binance Pay",
        "GatePay",
        "NowPayments",
        "Redis",
      ],
      highlights: [
        "Designed booking and payment APIs for flight, car, and vacation reservations",
        "Integrated multiple crypto payment gateways with webhook-based confirmation",
        "Implemented transaction verification, fallback handling, and idempotent flows",
        "Optimized performance using caching and efficient database access patterns",
      ],
    },
    {
      title: "Cabty",
      demoUrl: "https://cabty.net",
      description:
        "Backend systems for a production ride-hailing application available on Android and iOS, including real-time ride matching and scheduling.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
      highlights: [
        "Built a group ride matching engine based on geolocation and time windows",
        "Developed background services for near real-time ride request processing",
        "Implemented transactional ride scheduling to ensure data consistency",
        "Designed driver assignment logic to prevent overbooking and ensure fairness",
      ],
    },
    {
      title: "EduStack",
      demoUrl: "https://edustack.com.ng",
      description:
        "A multi-tenant school management SaaS supporting CBT exams, academic records, role-based access, and multi-school operations.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
      ],
      highlights: [
        "Designed tenant-aware data models for multi-school isolation",
        "Built CBT engine, promotion workflows, and academic session management",
        "Implemented role-based access for admins, staff, students, and parents",
        "Developed result upload and dynamic report card systems",
      ],
    },
    {
      title: "DeclutMart",
      demoUrl: "https://declutmart.com",
      description:
        "An online marketplace backend enabling users to buy and sell pre-owned items with secure payments and order workflows.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
      ],
      highlights: [
        "Designed APIs for user authentication, product listings, and order processing",
        "Integrated secure payment flows for reliable checkout experiences",
        "Implemented real-time order status updates using WebSockets",
        "Optimized backend performance with caching and query optimization",
      ],
    },
    {
      title: "Skillployment",
      demoUrl: "https://skillployments.com",
      description:
        "An LMS platform enabling instructors to create courses and learners to enroll, take quizzes, and track progress across categories.",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
      ],
      highlights: [
        "Built instructor and learner dashboards with course and progress tracking",
        "Implemented enrollment workflows, quizzes, and assessment logic",
        "Designed scalable data models for courses, lessons, and user progress",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center mr-4">
            {/* <span className="text-xl">🚀</span> */}
            <Briefcase className="h-5 w-5" />
          </span>
          Experience
          {/* Projects */}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              highlights={project.highlights}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
