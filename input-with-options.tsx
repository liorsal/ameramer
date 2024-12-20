import * as React from "react"
import { Input } from "@/components/ui/input"

interface InputWithFixedUnitProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  unit: string
}

export const InputWithFixedUnit = React.forwardRef<HTMLInputElement, InputWithFixedUnitProps>(
  ({ className, type, label, unit, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
        <div className="flex items-center">
          <Input
            type={type}
            className="flex-grow"
            ref={ref}
            {...props}
          />
          <span className="ml-2 text-sm font-semibold text-gray-700">{unit}</span>
        </div>
      </div>
    )
  }
)

InputWithFixedUnit.displayName = "InputWithFixedUnit"

