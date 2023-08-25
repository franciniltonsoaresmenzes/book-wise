import { BookCard } from '../BookCard'
import { Text } from '../UI/Typography'
import { ContentBook } from './styles'

export function BooksReviews() {
  return (
    <section>
      <div>
        <Text>Avaliações mais recentes</Text>
      </div>
      <ContentBook>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </ContentBook>
    </section>
  )
}
