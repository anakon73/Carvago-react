import type { Meta, Story } from '@storybook/react'
import { ButtonVariant } from './types'
import { CButton, type CButtonProps } from '.'

const meta: Meta<CButtonProps> = {
  title: 'Shared/UI/CButton',
  component: CButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ButtonVariant },
      defaultValue: 'primary',
    },
    disabled: { control: { type: 'boolean' }, defaultValue: 'false' },
  },
}

export default meta

export const Default: Story = props => (
    <CButton {...props} >
        Default
    </CButton>
)
