import { useState } from 'react'
import type { Meta, Story } from '@storybook/react'
import { roundedVariant } from './types'
import { CSelect, type CSelectProps } from '.'

const years = [
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
  2017,
  2016,
  2015,
  2014,
]

const meta: Meta<CSelectProps<number>> = {
  title: 'Shared/UI/CSelect',
  component: CSelect,
  argTypes: {
    rounededSide: {
      control: { type: 'select', options: roundedVariant },
      defaultValue: 'noRounded',
    },
  },
}

export default meta

export const Default: Story = (props) => {
  const [year, setYear] = useState(0)

  return (
      <CSelect
          {...props}
          itemsList={years}
          onChange={(e: number) => setYear(e)}
          value={year}
      />
  )
}
