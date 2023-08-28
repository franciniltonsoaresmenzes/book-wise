import { Text } from '@/components/UI/Typography'
import { Link } from '@/components/UI/Link'
import { HeaderSubTitle, SectionRatedBooks } from './styles'
import { BookCardSmall } from '../BookCardSmall'
import { CaretRight } from '@phosphor-icons/react'

export function RatedBook() {
  return (
    <>
      <HeaderSubTitle>
        <Text>Sua última leitura</Text>
        <Link href="/explorar">
          <Text>Ver todas</Text>
          <CaretRight size={16} />
        </Link>
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
