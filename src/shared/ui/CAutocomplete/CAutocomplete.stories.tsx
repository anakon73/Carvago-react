import type { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { CAutocomplete, type CAutocompleteProps } from '.'

const meta: Meta<CAutocompleteProps<any>> = {
  title: 'Shared/UI/CAutocomplete',
  component: CAutocomplete,
}

export default meta

const people = [
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' },
  { value: 5, label: 'Tanya Fox' },
  { value: 6, label: 'Hellen Schmidt' },
]

export const Default: Story = (props) => {
  const [selected, setSelected] = useState(people[0])

  return (
      <CAutocomplete
          itemsList={people}
          onChange={setSelected}
          value={selected}
          {...props}
      />
  )
}
