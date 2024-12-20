import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StatusButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'red' | 'yellow' | 'green' | 'purple'
}

export const StatusButton = React.forwardRef<HTMLButtonElement, StatusButtonProps>(
  ({ className, color, children, ...props }, ref) => {
    const colorClasses = {
      red: 'bg-red-500 hover:bg-red-600',
      yellow: 'bg-yellow-500 hover:bg-yellow-600',
      green: 'bg-green-500 hover:bg-green-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
    }

    return (
      <Button
        className={cn(colorClasses[color], 'text-white', className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

StatusButton.displayName = "StatusButton"

