import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from 'lucide-react'

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    options: string[]
    onChange: (value: string) => void
    label?: string | React.ReactNode
  }
>(({ className, options, onChange, label, ...props }, ref) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <RadioGroupPrimitive.Root
        className={cn("flex flex-wrap gap-4 justify-start", className)}
        {...props}
        ref={ref}
      >
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-reverse space-x-2">
            <label
              htmlFor={option}
              className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option}
            </label>
            <RadioGroupPrimitive.Item
              id={option}
              value={option}
              className="h-5 w-5 rounded-full border border-amber-400 text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              onClick={() => onChange(option)}
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Circle className="h-2.5 w-2.5 fill-current text-amber-600" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
          </div>
        ))}
      </RadioGroupPrimitive.Root>
    </div>
  )
})

RadioGroup.displayName = "RadioGroup"

const CheckboxGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    options: string[]
    name: string
    value: string[]
    onChange: (value: string[]) => void
  }
>(({ className, options, name, value, onChange, ...props }, ref) => {
  const handleChange = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option]
    onChange(newValue)
  }

  return (
    <div
      className={cn("flex flex-wrap gap-4 justify-end", className)}
      {...props}
      ref={ref}
    >
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-reverse space-x-2">
          <label
            htmlFor={`${name}-${option}`}
            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option}
          </label>
          <input
            type="checkbox"
            id={`${name}-${option}`}
            checked={value.includes(option)}
            onChange={() => handleChange(option)}
            className="h-5 w-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
          />
        </div>
      ))}
    </div>
  )
})

CheckboxGroup.displayName = "CheckboxGroup"

export { RadioGroup, CheckboxGroup }

