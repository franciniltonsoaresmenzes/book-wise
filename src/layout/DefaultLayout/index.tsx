import { ReactNode } from 'react'
import { ContainerLayout, ContentLayout } from './styles'
import { SideBar } from '@/components/SideBar'

type Props = {
  children: ReactNode
}

export function DefaultLayout({ children }: Props) {
  return (
    <ContainerLayout>
      <SideBar />
      <ContentLayout>{children}</ContentLayout>
    </ContainerLayout>
  )
}
