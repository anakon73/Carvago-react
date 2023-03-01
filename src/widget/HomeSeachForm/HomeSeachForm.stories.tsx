import type { Meta, Story } from '@storybook/react'
import { HomeSearchForm } from '.'

const meta: Meta = {
  title: 'Widget/HomePageForm',
  component: HomeSearchForm,
}

export default meta

export const Default: Story = () => {
  return (
      <HomeSearchForm />
  )
}
