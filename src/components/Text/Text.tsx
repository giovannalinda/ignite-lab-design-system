import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type TextProps = {
  size?: 'sm' | 'md' | 'lg' 
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Text({ children, asChild, className, size = 'md' }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={clsx('text-gray-100', 
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}