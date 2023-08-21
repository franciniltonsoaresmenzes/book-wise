import { ReactNode } from 'react'
import { Content } from './styles'
import { SideBar } from '@/components/SideBar'

type Props = {
  children: ReactNode
}

export function DefaultLayout({ children }: Props) {
  return (
    <Content>
      <SideBar />
      {children}
    </Content>
  )
}
