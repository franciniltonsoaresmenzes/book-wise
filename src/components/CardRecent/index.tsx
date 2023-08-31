import Image from 'next/image'
import { StartRating } from '../StarRating'
import { Text, Title } from '../UI/Typography'
import { Content, Description, Header } from './styles'
import Link from 'next/link'
import dayjs from 'dayjs'

type CardRecentProps = {
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

type Props = {
  data: CardRecentProps
}

export function CardRecent({ data }: Props) {
  const createAt = dayjs(data.created_at).fromNow()

  return (
    <Content variant="secundary">
      <Link href={`/explorar?book=${data.book.id}`}>
        <Image
          src={data.book.cover_url}
          width={108}
          height={152}
          alt="Imagen do Livro"
        />
      </Link>
      <div>
        <Header>
          <Text as="span">{createAt}</Text>
          <StartRating rating={data.rate} />
        </Header>
        <div>
          <Title size="md">{data.book.name}</Title>
          <Text as="span" size="sm">
            Aditya Bhargava
          </Text>
        </div>

        <Description>{data.book.summary}</Description>
      </div>
    </Content>
  )
}
