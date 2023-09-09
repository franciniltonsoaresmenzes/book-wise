import { Text } from '@/components/UI/Typography'
import { Link } from '@/components/UI/Link'
import { HeaderSubTitle, SectionRatedBooks } from './styles'
import { BookCardSmall } from '../BookCardSmall'
import { CaretRight } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import Skeleton from 'react-loading-skeleton'

type BookCardProps = {
  id: string
  avgRating: number
  created_at: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
}

type BooksPopular = {
  books: BookCardProps[]
}

export function RatedBook() {
  const { data, isFetching } = useQuery({
    queryKey: ['popular'],
    queryFn: async () => {
      const response = await api.get<BooksPopular>('/books/popular')
      return response.data
    },
  })

  const books = data?.books ? data.books : []

  return (
    <>
      <HeaderSubTitle>
        <Text>Livros populares</Text>
        <Link href="/explorar">
          <Text>Ver todas</Text>
          <CaretRight size={16} />
        </Link>
      </HeaderSubTitle>

      <SectionRatedBooks>
        {isFetching && <Skeleton count={3} height={150} />}
        {!isFetching &&
          books.map((book) => <BookCardSmall key={book.id} data={book} />)}
      </SectionRatedBooks>
    </>
  )
}
