import Image from 'next/image'
import { Navigations } from './components/Navigations'
import { SideBarContent, SideBarHeader } from './styles'
import { ReactNode } from 'react'
import { Binoculars, ChartLineUp } from '@phosphor-icons/react'

type NavItemsProps = Array<{
  label: string
  href: string
  icon: ReactNode
}>
const navItems: NavItemsProps = [
  {
    label: 'Inícion',
    href: '/',
    icon: <ChartLineUp size={24} />,
  },
  {
    label: 'Explorar',
    href: '/explorar',
    icon: <Binoculars size={24} />,
  },
]

export function SideBar() {
  return (
    <SideBarContent>
      <SideBarHeader>
        <Image
          src="/logo-md.svg"
          width={128}
          height={32}
          alt="Logo Wise Book"
        />
        <Navigations data={navItems} />
      </SideBarHeader>
      <footer>Log out</footer>
    </SideBarContent>
  )
}
