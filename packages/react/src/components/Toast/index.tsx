import {
  ComponentProps,
  ReactElement,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastProvider,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { produce } from 'immer'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  children?: ReactNode
  variant?: string
  open?: boolean
}

export interface ToastViewportProps
  extends ComponentProps<typeof ToastViewport> {}

export interface ToastProviderProps
  extends ComponentProps<typeof ToastProvider> {
  children: ReactNode
}

export function Toast({
  open,
  title,
  children,
  description,
  ...props
}: ToastProps) {
  const [visible, setVisible] = useState(open)

  function toggleToast() {
    console.log('toggle toast')
  }

  return (
    <ToastContainer open={visible} onOpenChange={setVisible} {...props}>
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

export type ToastWithContextItemType = ReactElement<
  Omit<ToastProps, 'contextId'> & {
    /* A toast with context is used with the toast system and requires a context id */
    contextId: string
    permanent?: boolean
  }
>

export type ToastContextValue = {
  /** A map of all the toasts */
  notifications: Map<string, ToastWithContextItemType>
  /** Creates a new toast or replaces an existing toast if one exists with the same contextId */
  createNotification: (toast: ToastWithContextItemType) => string | undefined
  /** Removes a toast by contextId */
  removeNotification: (id: string) => void
  /** Stops the automatic removal of the toast */
  pinNotification: (id: string) => void
  /** Removes all the toasts */
  clearNotifications: () => void
}

export function EnayToastProvider({ children, ...props }: ToastProviderProps) {
  const createNotification = useCallback<
    ToastContextValue['createNotification']
  >((toast) => {
    const { contextId = 'teste' } = toast.props

    return contextId
  }, [])

  return (
    <ToastProvider value={createNotification} {...props}>
      {children}
    </ToastProvider>
  )
}

EnayToastProvider.displayName = 'ToastProvider'
