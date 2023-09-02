import Link from 'next/link'
import { ReactNode } from 'react'
import { Content } from './styles'

type Props = {
  children: ReactNode
  href: string
  active?: boolean
}

export function LinkNavigation({ children, href, active = false }: Props) {
  return (
    <Link href={href}>
      <Content active={active}>{children}</Content>
    </Link>
  )
}
