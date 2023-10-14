import { Meta, StoryObj } from '@storybook/react'
import { Button, Text, Tooltip, TooltipProps } from '@mamede/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    trigger: (
      <Button disabled>
        <Text>Deixe o mouse parado aqui</Text>
      </Button>
    ),
    content: '26 de Outubro - Disponível',
  },
} as Meta<TooltipProps>

export const Primary: StoryObj = {}
