import { Link } from '../Link'
import { Text } from '@/components/UI/Typography'
import { HeaderSubTitle, SectionRatedBooks } from './styles'
import { BookCardSmall } from '../BookCardSmall'

export function RatedBook() {
  return (
    <>
      <HeaderSubTitle>
        <Text>Sua última leitura</Text>
        <Link description="Ver todas" href="/explorar" />
      </HeaderSubTitle>

      <SectionRatedBooks>
        <BookCardSmall />
        <BookCardSmall />
        <BookCardSmall />
        <BookCardSmall />
        <BookCardSmall />
      </SectionRatedBooks>
    </>
  )
}
