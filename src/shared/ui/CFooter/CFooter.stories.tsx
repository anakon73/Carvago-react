import type { Meta, Story } from '@storybook/react'
import { CFooter } from '.'

const meta: Meta = {
  title: 'Shared/ui/CFooter',
  component: CFooter,
}

export default meta

export const Default: Story = () => {
  return (
      <CFooter />
  )
}
