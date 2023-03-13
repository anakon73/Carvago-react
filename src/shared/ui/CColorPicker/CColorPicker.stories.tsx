import type { Meta, Story } from '@storybook/react'
import { CColorPicker, type CColorPickerProps } from '.'

const meta: Meta<CColorPickerProps> = {
  title: 'Shared/ui/CColorPicker',
  component: CColorPicker,
}

export default meta

export const Default: Story = () => {
  const colors = [
    'yellow',
    'orange',
    'red',
    'purple',
    'blue',
    'green',
    'SandyBrown',
    'beige',
    'white',
    'black',
    'gray',
    'silver',
    'gold',
  ]

  const [selectedColors, setSelecetedColors] = useState<string[]>([])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (selectedColors.includes(value)) {
      const filteredValues = selectedColors.filter((item) => {
        return item !== value
      })
      setSelecetedColors([...filteredValues])
    }
    else { setSelecetedColors([...selectedColors, value]) }
  }

  return (
      <CColorPicker
          colors={colors}
          onChange={onChange}
          values={selectedColors}
      />
  )
}
