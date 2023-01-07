import { ComponentProps, ReactNode } from 'react'
import * as Toasts from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  children?: ReactNode
  variant?: string
  open?: boolean
  close?: () => void
}

export function Toast({ title, children, description, ...props }: ToastProps) {
  return (
    <Toasts.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>

        <ToastClose>
          <X />
        </ToastClose>
      </ToastContainer>

      <Toasts.Viewport />
    </Toasts.Provider>
  )
}
