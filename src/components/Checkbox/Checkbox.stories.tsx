import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../Text'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='md'>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    } 
  ],
  argTypes: {}
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}