import Image from 'next/image'
import { Avatar } from '../Avatar'
import { StartRating } from '../StarRating'
import { Box } from '../UI/Box'
import { SmallText, Text, Title } from '../UI/Typography'
import { HeaderCard, ContentCard, DescriptionBook, Author } from './styles'
import Link from 'next/link'
import dayjs from 'dayjs'

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
    id: string
    name: string
    avatar_url: string
  }
}

type Props = {
  data: BookCardProps
}

export function BookCard({ data }: Props) {
  const createAt = dayjs(data.created_at).fromNow()
  return (
    <Box>
      <HeaderCard>
        <Link href={`/profile/${data.user.id}`}>
          <Author>
            <Avatar image={data.user.avatar_url} />
            <div>
              <Text>{data.user.name}</Text>
              <SmallText>{createAt}</SmallText>
            </div>
          </Author>
        </Link>
        <StartRating rating={data.rate} />
      </HeaderCard>

      <ContentCard>
        <Link href={`/explorar?book=${data.book.id}`}>
          <Image
            src={data.book.cover_url}
            width={108}
            height={152}
            alt="Imagen do Livro"
          />
        </Link>
        <div>
          <div>
            <Title size="md">{data.book.name}</Title>
            <SmallText>{data.book.author}</SmallText>
          </div>
          <DescriptionBook>{data.book.summary}</DescriptionBook>
        </div>
      </ContentCard>
    </Box>
  )
}
