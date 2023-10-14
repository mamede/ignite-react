import * as Tooltip from '@radix-ui/react-tooltip'
import { styled, keyframes } from '../../styles'

const scaleIn = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$2 $4',

  backgroundColor: '$gray900',
  borderRadius: '$md',
  color: '$gray100',
  fontFamily: '$default',

  animation: `${scaleIn} 100ms ease-out`,
})
