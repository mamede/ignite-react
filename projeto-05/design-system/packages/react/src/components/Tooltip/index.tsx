import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps {
  trigger: ReactNode
  content: string
}

export function Tooltip({ trigger, content }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <RadixTooltip.Arrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
