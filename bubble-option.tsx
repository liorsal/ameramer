import * as React from "react"
import { cn } from "@/lib/utils"

interface BubbleOptionProps {
  label: string
  selected: boolean
  onClick: () => void
}

export function BubbleOption({ label, selected, onClick }: BubbleOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        selected
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      )}
    >
      {label}
    </button>
  )
}

