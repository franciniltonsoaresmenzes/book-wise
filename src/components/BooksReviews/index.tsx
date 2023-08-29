import { useQuery } from '@tanstack/react-query'
import { BookCard } from '../BookCard'
import { Text } from '../UI/Typography'
import { ContentBook } from './styles'
import { api } from '@/lib/axios'

type BookCardProps = {
  id: string
  rate: number
  created_at: string
  book: {
    id: string
    name: string
    author: string
    summary: string
    cover_url: string
  }
  user: {
    name: string
    avatar_url: string
  }
}

type Rating = {
  rating: BookCardProps[]
}

export function BooksReviews() {
  const { data, isFetching } = useQuery({
    queryKey: ['ratings'],
    queryFn: async () => {
      const response = await api.get<Rating>('/rating')

      return response.data
    },
  })

  const rating = data?.rating ? data.rating : []

  return (
    <section>
      <div>
        <Text>Avaliações mais recentes</Text>
      </div>
      <ContentBook>
        {isFetching && 'Carregando'}
        {!isFetching &&
          rating.map((book) => <BookCard key={book.id} data={book} />)}
      </ContentBook>
    </section>
  )
}
