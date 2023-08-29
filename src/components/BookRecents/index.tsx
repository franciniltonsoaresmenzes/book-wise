import { CaretRight } from '@phosphor-icons/react'
import { HeaderSubTitle } from '../../pages/home/styles'
import { CardRecent } from '../CardRecent'
import { Link } from '../UI/Link'
import { Text } from '../UI/Typography'
import { ContentRecent } from './styles'
import { useQuery } from '@tanstack/react-query'
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
}

type Rating = {
  rating: BookCardProps[]
}

export function BookRecents() {
  const { data } = useQuery({
    queryKey: ['rating/lastest-user'],
    queryFn: async () => {
      const resposne = await api.get<Rating>('/rating/user-latest')
      return resposne.data
    },
  })

  const rating = data?.rating ? data.rating : []

  return (
    <ContentRecent>
      <HeaderSubTitle>
        <Text>Sua última leitura</Text>
        <Link href="/explorar">
          <Text>Ver todas</Text>
          <CaretRight size={16} />
        </Link>
      </HeaderSubTitle>
      {rating.map((book) => (
        <CardRecent key={book.id} data={book} />
      ))}
    </ContentRecent>
  )
}
