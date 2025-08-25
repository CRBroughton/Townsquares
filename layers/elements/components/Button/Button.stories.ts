import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {}
export const secondary: Story = {
  args: {
    variant: 'secondary',
  },
}
export const warning: Story = {
  args: {
    variant: 'warning',
  },
}
export const fit: Story = {
  args: {
    fit: true,
  },
}
export const disabled: Story = {
  args: {
    disabled: true,
  },
}
