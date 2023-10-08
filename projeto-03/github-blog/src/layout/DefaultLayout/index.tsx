import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

import * as S from './styles'

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}