import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastContainer,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps {
  title: string
  description: string
  open: boolean
  onOpenChange: () => void
  duration?: number
}

export function Toast({
  title,
  description,
  open,
  onOpenChange,
  duration = 3000,
}: ToastProps) {
  return (
    <ToastProvider swipeDirection="right" duration={duration}>
      <ToastContainer open={open} onOpenChange={onOpenChange}>
        <ToastTitle>{title} </ToastTitle>
        <ToastDescription> {description} </ToastDescription>
        <ToastClose>
          <X size={20} weight="bold" />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
