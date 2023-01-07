import { Box, Toast, ToastProps } from '@enay-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
export default {
  title: 'Notifications/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {},

  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            height: 150,
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    duration: 10000,
  },
}
