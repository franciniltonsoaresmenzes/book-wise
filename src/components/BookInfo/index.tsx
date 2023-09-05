import Image from 'next/image'
import { BookDialog } from '../BookDialog'
import { StartRating } from '../StarRating'
import { SmallText, Title } from '../UI/Typography'
import { Content, Description } from './styles'

type BookInfoProps = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  avgRating: number
  rating: number
  alReady: boolean
}

type Props = {
  data: BookInfoProps
}

export function BookInfo({ data }: Props) {
  const isReady = data.alReady

  return (
    <BookDialog bookId={data.id}>
      <Content variant="small">
        <Image
          src={data.cover_url}
          width={108}
          height={152}
          alt="Imagen do Livro"
        />
        <Description>
          <div>
            <Title size="md">{data.name}</Title>
            <SmallText>{data.author}</SmallText>
            {isReady && <Title>Lido</Title>}
          </div>
          <StartRating rating={data.avgRating} />
        </Description>
      </Content>
    </BookDialog>
  )
}
