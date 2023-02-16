import clsx from 'clsx'
import type { ButtonVariant, ButtonSize } from './types'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

export const CButton = ({ children, variant, size, ...props }: Props) => {
  return (
      <button
          className={clsx(
            'py-2 font-semibold flex',
            [
              size === 'square' && 'px-2',
              size === 'sm' && 'px-4',
              size === 'md' && 'px-12',
              size === 'lg' && 'px-36',
            ],
            [
              variant === 'primary' && [
                'bg-blue-700 text-white rounded',
                'disabled:bg-slate-300'
              ],
              variant === 'warning' && [
                'bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded',
                'disabled:from-orange-200 disabled:to-orange-200',
                'hover:from-orange-700 hover:to-orange-700'
              ],
              variant === 'light' && [
                'text-slate-500 rounded font-light',
                'hover:bg-slate-100'
              ],
              variant === 'link' && [
                'text-blue-400 font-light',
              ],
              variant === 'underline' && [
                'text-blue-800',
                'hover:underline hover:underline-offset-8'
              ],
            ]
          )}
          {...props}
      >
          {children}
      </button>
  )
}
