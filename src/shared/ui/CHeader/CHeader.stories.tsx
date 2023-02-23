import type { Meta, Story } from '@storybook/react'
import { CHeader } from '.'

const meta: Meta = {
  title: 'Shared/ui/CHeader',
  component: CHeader,
}

export default meta

export const Default: Story = () => {
  return (
      <CHeader />
  )
}
