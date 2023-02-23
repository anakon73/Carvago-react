import clsx from 'clsx'
import React from 'react'
import type { ButtonSize, ButtonVariant } from './types'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  classes?: string
}

export const CButton = React.forwardRef<HTMLButtonElement, Props>((
  { children, variant, size, classes, ...props },
  ref,
) => {
  return (
      <button
          className={clsx(
            classes,
            'flex items-center font-sans',
            [
              size === 'square' && 'px-2',
              size === 'sm' && 'px-4',
              size === 'md' && 'px-12',
              size === 'lg' && 'px-24',
            ],
            [
              variant === 'primary' && [
                'rounded bg-blue-700 py-2 text-white',
                'disabled:bg-slate-300',
              ],
              variant === 'warning' && [
                'rounded bg-gradient-to-r from-yellow-600 py-2',
                'to-orange-600 text-white',
                'disabled:from-orange-200 disabled:to-orange-200',
                'hover:from-orange-700 hover:to-orange-700',
              ],
              variant === 'light' && [
                'rounded py-1 font-normal text-slate-600',
                'hover:bg-slate-100 hover:font-semibold',
              ],
              variant === 'link' && [
                'font-light text-blue-400',
              ],
              variant === 'underline' && [
                'text-indigo-900 decoration-[3px]',
                'hover:underline hover:underline-offset-[30px]',
                'hover:text-blue-800',
              ],
            ],
          )}
          ref={ref}
          {...props}
      >
          {children}
      </button>
  )
})

CButton.displayName = 'CButton'
