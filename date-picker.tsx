import * as React from "react"
import { Input } from "@/components/ui/input"

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="mb-1 block font-medium text-red-100 text-right">
          {label}
        </label>
        <Input
          type="date"
          className={className}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

DatePicker.displayName = "DatePicker"

