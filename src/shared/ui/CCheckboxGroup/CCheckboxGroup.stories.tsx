import type { Meta, Story } from '@storybook/react'
import { CCheckboxGroup, type CCheckboxGroupProps } from '.'

const meta: Meta<CCheckboxGroupProps> = {
  title: 'Shared/ui/CCheckboxGroup',
  component: CCheckboxGroup,
}

export default meta

export const Default: Story = () => {
  const options: string[] = ['Manual', 'Automatic', 'Semi-automatic']
  const [values, setValues] = useState<string[]>([])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (values.includes(value)) {
      const filteredValues = values.filter((item) => {
        return item !== value
      })
      setValues([...filteredValues])
    }
    else { setValues([...values, value]) }
  }

  return (
      <CCheckboxGroup
          mainOptions={['Manual', 'Automatic']}
          onChange={onChange}
          options={options}
          values={values}
      />
  )
}
