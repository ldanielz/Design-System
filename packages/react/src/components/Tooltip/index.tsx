import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { ReactNode, ComponentProps } from 'react'

import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  triggerContent: string
  content: string
  children: ReactNode
}

export const Tooltip = ({
  triggerContent,
  content,
  children,
  ...props
}: TooltipProps) => {
  return (
    <PrimitiveTooltip.Root>
      <PrimitiveTooltip.Trigger asChild>{children}</PrimitiveTooltip.Trigger>

      <PrimitiveTooltip.Portal>
        <TooltipContent {...props} sideOffset={5}>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </PrimitiveTooltip.Portal>
    </PrimitiveTooltip.Root>
  )
}

Tooltip.displayName = 'Tooltip'

export interface TooltipProviderProps
  extends ComponentProps<typeof PrimitiveTooltip.Provider> {
  children: ReactNode
}

export const TooltipProvider = ({ children }: TooltipProviderProps) => {
  return <PrimitiveTooltip.Provider>{children}</PrimitiveTooltip.Provider>
}

TooltipProvider.displayName = 'TooltipProvider'
