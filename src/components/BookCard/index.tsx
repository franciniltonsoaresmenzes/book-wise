import Image from 'next/image'
import { Avatar } from '../Avatar'
import { StartRating } from '../StarRating'
import { Box } from '../UI/Box'
import { SmallText, Text, Title } from '../UI/Typography'
import { HeaderCard, ContentCard, DescriptionBook, Author } from './styles'

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

type Props = {
  data: BookCardProps
}

export function BookCard({ data }: Props) {
  return (
    <Box>
      <HeaderCard>
        <Author>
          <Avatar image={data.user.avatar_url} />
          <div>
            <Text>{data.user.name}</Text>
            <SmallText>{data.created_at}</SmallText>
          </div>
        </Author>
        <StartRating rating={data.rate} />
      </HeaderCard>

      <ContentCard>
        <Image
          src={data.book.cover_url}
          width={108}
          height={152}
          alt="Imagen do Livro"
        />
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
