import { Text } from '@/components/UI/Typography'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { LinkNavigation } from '../LinkNavigation'

type DataProps = Array<{
  label: string
  href: string
  icon: ReactNode
}>

type Props = {
  data: DataProps
}

export function Navigations({ data }: Props) {
  const { asPath } = useRouter()

  return (
    <nav>
      {data.map((menu) => (
        <LinkNavigation
          key={menu.label}
          href={menu.href}
          active={asPath === menu.href}
        >
          {menu.icon}
          <Text>{menu.label}</Text>
        </LinkNavigation>
      ))}
    </nav>
  )
}
