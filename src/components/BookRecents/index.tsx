import { CaretRight } from '@phosphor-icons/react'
import { HeaderSubTitle } from '../../pages/home/styles'
import { CardRecent } from '../CardRecent'
import { Link } from '../UI/Link'
import { Text } from '../UI/Typography'
import { ContentRecent } from './styles'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import Skeleton from 'react-loading-skeleton'

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
  const { data, isFetching } = useQuery({
    queryKey: ['rating/lastest-user'],
    queryFn: async () => {
      const resposne = await api.get<Rating>('/rating/user-latest')
      return resposne.data
    },
  })

  const rating = data?.rating ? data.rating : []

  const { data: session } = useSession()

  const userId = session ? session.user.id : ''

  return (
    <ContentRecent>
      <HeaderSubTitle>
        <Text>Sua última leitura</Text>
        <Link href={`/profile/${userId}`}>
          <Text>Ver todas</Text>
          <CaretRight size={16} />
        </Link>
      </HeaderSubTitle>
      {isFetching && <Skeleton count={3} height={150} />}
      {!isFetching &&
        rating.map((book) => <CardRecent key={book.id} data={book} />)}
    </ContentRecent>
  )
}
