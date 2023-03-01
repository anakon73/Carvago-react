import type { Meta, Story } from '@storybook/react'

import { HomePage } from '.'

const meta: Meta = {
  title: 'Pages/HomePage',
  component: HomePage,
}

export default meta

export const Default: Story = () => {
  return (
      <HomePage />
  )
}
