export const roundedVariant = ['left', 'right', 'square'] as const
export const variant = ['border', 'noBorder'] as const

export type roundedVariant = typeof roundedVariant[number]
export type variant = typeof variant[number]
