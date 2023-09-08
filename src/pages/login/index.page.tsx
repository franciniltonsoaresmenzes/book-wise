import { Text, Title } from '@/components/UI/Typography'
import { Blur, Container, ContentLogin, ContentLogo, FormLogin } from './styles'
import { ButtonsAuth } from '@/components/ButtonsAuth'

export default function Login() {
  return (
    <Container>
      <ContentLogo>
        <Blur />
      </ContentLogo>
      <ContentLogin>
        <FormLogin>
          <div>
            <Title>Boas vindas!</Title>
            <Text as="span">Faça seu login ou acesse como visitante.</Text>
          </div>
          <ButtonsAuth isVisitant />
        </FormLogin>
      </ContentLogin>
    </Container>
  )
}
