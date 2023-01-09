import {
  Button,
  EnayToastProvider,
  EnayToastViewport,
  Toast,
  ToastProps,
} from '@enay-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Notifications/Toast',
  component: Toast,
  subcomponents: { EnayToastProvider, EnayToastViewport },
  args: {
    title: 'default',
    description: 'default Desc',
    open: false,
  },

  argTypes: {
    open: {
      description: 'Toast visible?',
      defaultValue: {
        open: false,
      },
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <EnayToastProvider swipeDirection="right">
        {Story()}
        <EnayToastViewport />
      </EnayToastProvider>
    ),
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    duration: 6000,
  },
}

export const AutoDismiss = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const handleToastAdd = () => {
    setToasts((toasts) => [
      ...toasts,
      { title: 'novo', description: 'novo desc', duration: 2000 },
    ])
  }

  return (
    <>
      <Button onClick={handleToastAdd}>Add</Button>
      {toasts.map((toast) => {
        return (
          <Toast
            key={toast.title}
            title={toast.title}
            description={toast.description}
            duration={toast.duration}
          />
        )
      })}
    </>
  )
}
