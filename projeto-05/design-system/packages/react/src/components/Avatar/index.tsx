import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as S from './styles'

export type AvatarProps = ComponentProps<typeof S.AvatarImage>

export function Avatar(props: AvatarProps) {
  return (
    <S.AvatarContainer>
      <S.AvatarImage {...props} />

      <S.AvatarFallback delayMs={600}>
        <User />
      </S.AvatarFallback>
    </S.AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
