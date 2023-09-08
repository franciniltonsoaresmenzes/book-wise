import Image from 'next/image'
import { Button } from '../UI/Button'
import { Content } from './styles'
import { Title } from '../UI/Typography'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

type Props = {
  isVisitant?: boolean
}

export function ButtonsAuth({ isVisitant = false }: Props) {
  const router = useRouter()
  async function hanndleConnectAuth(provides?: string) {
    if (!provides) {
      await router.push('/')
      return
    }

    await signIn(provides, { callbackUrl: '/' })
  }

  return (
    <Content>
      <Button onClick={() => hanndleConnectAuth('google')}>
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

      <Button onClick={() => hanndleConnectAuth('github')}>
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

      {isVisitant && (
        <Button onClick={() => hanndleConnectAuth()}>
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
      )}
    </Content>
  )
}
