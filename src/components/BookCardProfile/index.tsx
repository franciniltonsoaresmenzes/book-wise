import Image from 'next/image'
import { StartRating } from '../StarRating'
import { Box } from '../UI/Box'
import { SmallText, Title } from '../UI/Typography'
import { Data, Header } from './styles'
import { Book, Rating } from '@prisma/client'
import dayjs from 'dayjs'

type BookProps = Rating & {
  book: Book
}

type Props = {
  data: BookProps
}

export function BookCardProfile({ data }: Props) {
  const createAt = dayjs(data.created_at).fromNow()

  return (
    <div>
      <Data size="sm">{createAt}</Data>
      <Box>
        <Header>
          <Image
            src={data.book.cover_url}
            width={108}
            height={152}
            alt="Imagen do Livro"
          />
          <div>
            <div>
              <Title>{data.book.name}</Title>
              <SmallText>{data.book.author}</SmallText>
            </div>

            <StartRating rating={data.rate} />
          </div>
        </Header>
        <p>{data.book.summary} </p>
      </Box>
    </div>
  )
}
