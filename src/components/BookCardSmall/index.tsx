import Image from 'next/image'
import { StartRating } from '../StarRating'
import { SmallText, Title } from '../UI/Typography'
import { Content, Description } from './styles'
import Link from 'next/link'

type BookCardSmallProps = {
  id: string
  avgRating: number
  created_at: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
}

type Props = {
  data: BookCardSmallProps
}

export function BookCardSmall({ data }: Props) {
  return (
    <Content variant="small">
      <Link href={`/explorar?book=${data.id}`}>
        <Image
          src={data.cover_url}
          width={64}
          height={92}
          alt="Imagen do Livro"
        />
      </Link>
      <Description>
        <div>
          <Title size="md">{data.name}</Title>
          <SmallText>{data.author}</SmallText>
        </div>
        <StartRating rating={data.avgRating} />
      </Description>
    </Content>
  )
}
