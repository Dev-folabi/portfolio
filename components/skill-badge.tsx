import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface SkillBadgeProps {
  icon: ReactNode
  label: string
}

export function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <Badge className="py-3 px-4 h-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-indigo-100 dark:border-indigo-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-300">
      <div className="flex items-center gap-2">
        <span className="text-indigo-600 dark:text-indigo-400">{icon}</span>
        <span>{label}</span>
      </div>
    </Badge>
  )
}
