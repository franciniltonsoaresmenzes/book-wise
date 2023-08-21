import Image from 'next/image'
import { SideBarContent, SideBarHeader } from './styles'

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
        <ul>
          <li>Início</li>
          <li>Explorar</li>
          <li>Perfil</li>
        </ul>
      </SideBarHeader>
      <footer>Log out</footer>
    </SideBarContent>
  )
}
