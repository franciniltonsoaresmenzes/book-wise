import { Navigation } from '@/components/Navigation'
import { Text } from '@/components/UI/Typography'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

type DataProps = Array<{
  label: string
  href: string
  icon: ReactNode
}>

type Props = {
  data: DataProps
}

export function Navigations({ data }: Props) {
  const { pathname } = useRouter()

  return (
    <nav>
      {data.map((menu) => (
        <Navigation
          key={menu.label}
          href={menu.href}
          active={pathname === menu.href}
        >
          {menu.icon}
          <Text>{menu.label}</Text>
        </Navigation>
      ))}
    </nav>
  )
}
