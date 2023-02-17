export type ButtonVariant = typeof ButtonVariant[number]

export const ButtonVariant = ['primary', 'warning', 'light', 'link','underline'] as const

export type ButtonSize = typeof ButtonSize[number]

export const ButtonSize = ['sm', 'md', 'lg', 'square'] as const