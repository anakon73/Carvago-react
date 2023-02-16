import type { Meta, Story } from '@storybook/react'
import { ButtonVariant, ButtonSize } from './types'
import { CButton, type CButtonProps } from '.'
import {CakeIcon} from '@heroicons/react/24/solid'

const meta: Meta<CButtonProps> = {
  title: 'Shared/UI/CButton',
  component: CButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ButtonVariant },
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select', options: ButtonSize },
      defaultValue: 'sm',
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
export const WithIcon: Story = props => (
    <CButton {...props} >
        <CakeIcon className='h-6 w-6'/>
    </CButton>
)
export const WithIconAndText: Story = props => (
    <CButton {...props} >
        <CakeIcon className='h-6 w-6 mr-3'/>
        <span>text</span>
    </CButton>
)
