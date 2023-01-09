import {
  Box,
  Button,
  EnayToastProvider,
  EnayToastViewport,
  Toast,
  ToastProps,
} from '@enay-ui/react'
import type { Meta, StoryObj, ComponentStory } from '@storybook/react'
import { useState, useId } from 'react'

export default {
  title: 'Notifications/Toast',
  component: Toast,
  subcomponents: { EnayToastProvider, EnayToastViewport },
  argTypes: {
    variant: {
      options: ['basic', 'success', 'danger', 'warning'],
      control: 'inline-radio',
      table: {
        category: 'Appearance',
      },
    },
    duration: {
      type: 'number',
      table: {
        category: 'Countdown',
      },
    },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
  decorators: [
    (Story) => (
      <EnayToastProvider swipeDirection="right">
        {Story()}
        <EnayToastViewport position="bottomLeft" />
      </EnayToastProvider>
    ),
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    duration: 6000,
  },
}

const Template: ComponentStory<typeof Toast> = (args) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])
  const [counter, setCounter] = useState(0)
  const snackId = useId()

  const handleToastAdd = () => {
    const _id = `${snackId}-${counter}`
    setToasts((toasts) => [...toasts, { _id, ...args }])
    setCounter(counter + 1)
  }
  const handleRemove = (id: string) => {
    setToasts((toast) => toast.filter((item) => item.id !== id))
  }

  return (
    <Box as="div" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
      <Button onClick={handleToastAdd}>Basic</Button>
      <Button onClick={handleToastAdd}>Success</Button>
      <Button onClick={handleToastAdd}>Danger</Button>
      <Button onClick={handleToastAdd}>Warning</Button>

      {toasts.map((toast, index) => {
        const remove = () => {
          handleRemove(toast.id)
        }
        return (
          <Toast
            id={snackId}
            key={index}
            title={args.title}
            description={args.description}
            duration={args.duration}
            variant={args.variant}
            position="topLeft"
            onOpenChange={remove}
          />
        )
      })}
    </Box>
  )
}

const defaultArgs = {
  title: 'Toast Title',
  description: 'Toast Description',
  variant: 'basic' as ToastProps['variant'],
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
