import clsx from 'clsx'
import type { ButtonSize, ButtonVariant } from './types'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

export const CButton = ({ children, variant, size, ...props }: Props) => {
  return (
      <button
          className={clsx(
            'flex py-2 font-semibold',
            [
              size === 'square' && 'px-2',
              size === 'sm' && 'px-4',
              size === 'md' && 'px-12',
              size === 'lg' && 'px-36',
            ],
            [
              variant === 'primary' && [
                'rounded bg-blue-700 text-white',
                'disabled:bg-slate-300',
              ],
              variant === 'warning' && [
                'rounded bg-gradient-to-r from-yellow-600',
                'to-orange-600 text-white',
                'disabled:from-orange-200 disabled:to-orange-200',
                'hover:from-orange-700 hover:to-orange-700',
              ],
              variant === 'light' && [
                'rounded font-light text-slate-500',
                'hover:bg-slate-100',
              ],
              variant === 'link' && [
                'font-light text-blue-400',
              ],
              variant === 'underline' && [
                'text-blue-800',
                'hover:underline hover:underline-offset-8',
              ],
            ],
          )}
          {...props}
      >
          {children}
      </button>
  )
}
