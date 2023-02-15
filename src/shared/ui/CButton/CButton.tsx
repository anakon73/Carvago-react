import type { ButtonVariantType } from './types'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: ButtonVariantType
}

export const CButton = ({ children = 'Button', variant = 'light', ...props }: Props) => {
  const classes: string[] = [
    'px-4',
    'py-2',
    'text-white',
    variant === 'primary'
      ? 'bg-blue-200'
      : variant === 'dark' ? 'bg-red-200' : 'bg-green-200',
  ]

  return (
      <button
          className={classes.join(' ')}
          {...props}
      >
          {children}
      </button>
  )
}
