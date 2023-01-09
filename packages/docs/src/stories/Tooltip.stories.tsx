import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@enay-ui/react'

export default {
  title: 'Special/Tooltip',
  component: Tooltip,
  args: {
    content: 'Test Tooltip Content',
    children: <Button variant="primary">Teste</Button>,
    css: undefined,
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
      description: 'Tooltip content',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    children: {
      description: 'The component that needs the Tooltip',
      control: {
        type: null,
      },
      table: {
        type: {
          summary: 'React component',
        },
      },
    },
    css: {
      control: 'object',
      description: 'Tooltip custom styles',
      table: {
        type: {
          summary: 'CSS in JS',
        },
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '$16',
            height: '100vh',
          }}
        >
          <TooltipProvider delayDuration={10}>{Story()}</TooltipProvider>
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
