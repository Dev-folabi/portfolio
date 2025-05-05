import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  highlights: string[]
  demoUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, techStack, highlights, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="border-indigo-100 dark:border-indigo-900 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-white dark:from-indigo-950/40 dark:to-gray-900 pb-4">
        <CardTitle className="text-xl font-bold text-indigo-700 dark:text-indigo-400">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Highlights</h4>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </CardContent>

      {(demoUrl || githubUrl) && (
        <CardFooter className="flex gap-2 pt-2 pb-4">
          {demoUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-indigo-600 border-indigo-200 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-indigo-950/40"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}

          {githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-indigo-600 border-indigo-200 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-800 dark:hover:bg-indigo-950/40"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
