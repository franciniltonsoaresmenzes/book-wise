import Image from 'next/image'
import {
  SideBarContent,
  SideBarHeader,
  SideBarRoot,
  SinInFooter,
  SinOutFooter,
} from './styles'
import { ReactNode } from 'react'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import { Text } from '../UI/Typography'
import { signOut, useSession } from 'next-auth/react'
import { Avatar } from '../Avatar'
import { Navigations } from '../Navigations'

type NavItemsProps = Array<{
  label: string
  href: string
  icon: ReactNode
}>
export function SideBar() {
  const { data } = useSession()

  const user = data?.user

  const navItems: NavItemsProps = [
    {
      label: 'Início',
      href: '/',
      icon: <ChartLineUp size={24} />,
    },
    {
      label: 'Explorar',
      href: '/explorar',
      icon: <Binoculars size={24} />,
    },
  ]

  if (user) {
    navItems.push({
      label: 'Profile',
      href: `/profile/${user.id}`,
      icon: <User size={24} />,
    })
  }

  return (
    <SideBarRoot>
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
        <footer>
          {user ? (
            <SinOutFooter onClick={() => signOut({ callbackUrl: '/login' })}>
              <Avatar image={user.avatar_url as string} />
              <span>{user.name}</span>
              <SignOut size={20} />
            </SinOutFooter>
          ) : (
            <SinInFooter href="/login">
              <Text as="span" weight="bold">
                Fazer Login
              </Text>
              <SignIn size={20} />
            </SinInFooter>
          )}
        </footer>
      </SideBarContent>
    </SideBarRoot>
  )
}
