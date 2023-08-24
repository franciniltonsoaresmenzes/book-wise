import { HeaderSubTitle } from '../../pages/home/styles'
import { CardRecent } from '../CardRecent'
import { Link } from '../Link'
import { Text } from '../UI/Typography'
import { ContentRecent } from './styles'

export function BookRecents() {
  return (
    <ContentRecent>
      <HeaderSubTitle>
        <Text>Sua última leitura</Text>
        <Link description="Ver todas" href="/explorar" />
      </HeaderSubTitle>
      <CardRecent />
    </ContentRecent>
  )
}
