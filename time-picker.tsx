import * as React from "react"
import { Input } from "@/components/ui/input"

interface TimePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="mb-1 block font-medium text-red-100 text-right">
          {label}
        </label>
        <Input
          type="time"
          className={className}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

TimePicker.displayName = "TimePicker"

