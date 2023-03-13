import type { Meta, Story } from '@storybook/react'
import { SearchForm } from '.'

const meta: Meta = {
  title: 'Widget/SearchForm',
  component: SearchForm,
}

export default meta

export const Default: Story = () => {
  return (
      <SearchForm />
  )
}
