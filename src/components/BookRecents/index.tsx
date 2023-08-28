import { CaretRight } from '@phosphor-icons/react'
import { HeaderSubTitle } from '../../pages/home/styles'
import { CardRecent } from '../CardRecent'
import { Link } from '../UI/Link'
import { Text } from '../UI/Typography'
import { ContentRecent } from './styles'

export function BookRecents() {
  return (
    <ContentRecent>
      <HeaderSubTitle>
        <Text>Sua última leitura</Text>
        <Link href="/explorar">
          <Text>Ver todas</Text>
          <CaretRight size={16} />
        </Link>
      </HeaderSubTitle>
      <CardRecent />
    </ContentRecent>
  )
}
