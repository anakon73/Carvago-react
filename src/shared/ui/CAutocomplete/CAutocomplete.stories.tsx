/* eslint-disable react/no-multi-comp */
import type { Meta, Story } from '@storybook/react'
import { roundedVariant, variant } from './types'
import { CAutocomplete, type CAutocompleteProps } from '.'

const meta: Meta<CAutocompleteProps<any>> = {
  title: 'Shared/UI/CAutocomplete',
  component: CAutocomplete,
  argTypes: {
    rounededSide: {
      control: { type: 'select', options: roundedVariant },
    },
    variant: {
      control: { type: 'select', options: variant },
    },
  },
  args: {
    rounededSide: 'square',
    variant: 'noBorder',
  },
}

export default meta

const people = [
  { id: 1, value: 'Wade Cooper' },
  { id: 2, value: 'Arlene Mccoy' },
  { id: 3, value: 'Devon Webb' },
  { id: 4, value: 'Tom Cook' },
  { id: 5, value: 'Tanya Fox' },
  { id: 6, value: 'Hellen Schmidt' },
]

export const Default: Story = (props) => {
  const [selected, setSelected] = useState()

  return (
      <CAutocomplete
          {...props}
          itemsList={people}
          onChange={setSelected}
          value={selected}
      />
  )
}

export const AutocompleteGroup: Story = (props) => {
  const [selected1, setSelected1] = useState()
  const [selected2, setSelected2] = useState()

  return (
      <div className='flex'>
          <CAutocomplete
              {...props}
              itemsList={people}
              onChange={setSelected1}
              rounededSide='left'
              value={selected1}
          />

          <CAutocomplete
              {...props}
              itemsList={people}
              onChange={setSelected2}
              rounededSide='right'
              value={selected2}
          />
      </div>
  )
}
