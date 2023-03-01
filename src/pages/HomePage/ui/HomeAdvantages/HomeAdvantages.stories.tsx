import type { Meta, Story } from '@storybook/react'

import { HomeAdvantages } from '.'

const meta: Meta = {
  title: 'Pages/HomePage/UI/HomeAdvantages',
  component: HomeAdvantages,
}

export default meta

export const Default: Story = () => {
  return (
      <HomeAdvantages />
  )
}
