import * as React from "react"
import { BubbleOption } from "./bubble-option"

interface BubbleOptionGroupProps {
  options: string[]
  name: string
  value: string
  onChange: (value: string) => void
  label?: string | React.ReactNode
}

export function BubbleOptionGroup({ options, name, value, onChange, label }: BubbleOptionGroupProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <BubbleOption
            key={option}
            label={option}
            selected={value === option}
            onClick={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  )
}

