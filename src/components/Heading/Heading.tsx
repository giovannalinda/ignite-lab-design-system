import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type HeadingProps = {
  size?: 'sm' | 'md' | 'lg' 
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Heading({ children, asChild, className, size = 'md' }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={clsx('text-gray-100 font-bold', 
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}