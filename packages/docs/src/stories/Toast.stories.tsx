import {
  Box,
  Button,
  EnayToastProvider,
  EnayToastViewport,
  Toast,
  ToastProps,
} from '@enay-ui/react'
import type { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

export default {
  title: 'Notifications/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
    variant: 'Variant.note',
    darkMode: 'false',
  },
  argTypes: {
    title: {
      description: 'Toast title',
      control: {
        type: 'text',
      },
    },

    open: {
      description: 'Toast visible?',
      defaultValue: {
        open: true,
      },
      control: 'boolean',
    },
  },

  decorators: [
    (Story) => {
      return (
        <>
          <Box
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              padding: 100,
              height: '100%',
              overflow: 'auto',
            }}
          ></Box>
          <EnayToastProvider>
            {Story()}
            <EnayToastViewport />
          </EnayToastProvider>
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toast = canvas.getByRole('region')

    console.log(toast)
  },
  args: {
    duration: 10000,
  },
}

const Template: ComponentStory<typeof Toast> = (args) => <Button>teste</Button>

export const Default = Template.bind({})
