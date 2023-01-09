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
  id: string
  title: string
  description: string
  children?: ReactNode
  open?: boolean
  variant?: 'basic' | 'success' | 'danger' | 'warning'
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
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
  variant,
  ...props
}: ToastProps) {
  return (
    <ToastContainer variant={variant} open={visible} {...props}>
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
