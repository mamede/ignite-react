import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '@stitches/react'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 1.25rem))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + 1.25rem))',
  },
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
  display: 'grid',
  gridTemplateAreas: '"title close" "description close"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',

  padding: '$3 $5',

  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',

  fontFamily: '$default',
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',

  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  gridArea: 'close',

  all: 'unset',
  svg: {
    cursor: 'pointer',
    color: '$gray200',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  width: '390px',
  maxWidth: '100vw',
  padding: '$6',
  margin: 0,

  listStyle: 'none',
  outline: 'none',
  zIndex: '2147483647',
})
