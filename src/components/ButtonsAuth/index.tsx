import Image from 'next/image'
import { Button } from '../Button'
import { Content } from './styles'
import { Title } from '../Typography'

export function ButtonsAuth() {
  return (
    <Content>
      <Button>
        <Image
          src="/icon/logos_google-icon.svg"
          width={32}
          height={32}
          alt="Logo google"
        />
        <Title as="span" size="lg">
          Entrar com Google
        </Title>
      </Button>

      <Button>
        <Image
          src="/icon/akar-icons_github-fill.svg"
          width={32}
          height={32}
          alt="Logo GitHub"
        />
        <Title as="span" size="lg">
          Entrar com GitHub
        </Title>
      </Button>

      <Button>
        <Image
          src="/icon/RocketLaunch.svg"
          width={32}
          height={32}
          alt="Icone Rocket"
        />
        <Title as="span" size="lg">
          Acessar como visitante
        </Title>
      </Button>
    </Content>
  )
}
