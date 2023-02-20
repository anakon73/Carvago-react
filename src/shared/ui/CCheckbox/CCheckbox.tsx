import clsx from 'clsx'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  withOutline?: boolean
}

export const CCheckbox = ({ withOutline, ...props }: Props) => {
  return (
      <input
          className={clsx(
            'h-5 w-5 cursor-pointer rounded-md border-blue-800',
            'checked:ring-2 checked:ring-blue-300 checked:ring-offset-0',
            'focus:ring-blue-300 focus:ring-offset-0',
            [withOutline && 'hover:ring-4 hover:ring-blue-300'],
          )}
          type="checkbox"
          {...props}
      />

  )
}
