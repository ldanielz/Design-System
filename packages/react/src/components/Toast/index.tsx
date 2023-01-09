import { ComponentProps, ReactNode } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastProvider,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  children?: ReactNode
  variant?: string
  open?: boolean
  functionTest?: () => boolean
}

export interface ToastViewportProps
  extends ComponentProps<typeof ToastViewport> {}

export interface ToastProviderProps
  extends ComponentProps<typeof ToastProvider> {
  children: ReactNode
}

export function Toast({
  open: visible,
  title,
  description,
  ...props
}: ToastProps) {
  return (
    <ToastContainer open={visible} {...props}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>

      <ToastClose>
        <X />
      </ToastClose>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'

export function EnayToastViewport({ ...props }: ToastViewportProps) {
  return <ToastViewport {...props} />
}

EnayToastViewport.displayName = 'ToastViewport'

export function EnayToastProvider({ children, ...props }: ToastProviderProps) {
  return <ToastProvider {...props}>{children}</ToastProvider>
}

EnayToastProvider.displayName = 'ToastProvider'
