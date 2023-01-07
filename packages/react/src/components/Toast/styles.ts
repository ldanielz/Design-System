import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = styled(Toast.Provider, {})
export const ToastContainer = styled(Toast.Root, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: '$3 $5',
  gap: 4,
  isolation: 'isolate',

  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: 6,

  width: 360,
})
export const ToastViewport = styled(Toast.Viewport, {})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: '$white',
  flex: 'none',
  alignSelf: 'stretch',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  right: '$4',
  top: '$4',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 0,
  background: 'transparent',

  color: '$gray200',

  svg: {
    width: '$5',
    height: '$5',
  },
})
