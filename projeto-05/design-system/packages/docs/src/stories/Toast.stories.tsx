import { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@mamede/react'
import { useState } from 'react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      const [test, setTest] = useState(false)
      return (
        <div>
          <div>
            {Story({
              args: {
                title: 'Agendamento realizado',
                description: 'Quarta-feira, 23 de Outubro às 16h',
                open: test,
                onOpenChange: setTest,
              },
            })}
          </div>
          <Button
            onClick={() => {
              setTest(true)
            }}
          >
            Agendar
          </Button>
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj = {}
