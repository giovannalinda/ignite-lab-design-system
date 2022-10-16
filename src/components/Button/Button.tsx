import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type ButtonProps = {
  children: ReactNode
  asChild?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={clsx(
        'py-3 px-4 bg-cyan-700 rounded font-semibold text-gray-900 text-sm w-full transition-colors hover:bg-cyan-500',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}