import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Button from './Card.vue'

const meta = {
  title: 'Components/Card',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const primary: Story = {
  args: {
    title: 'Hello world',
    default: 'This is the content of the card',
  },
}
