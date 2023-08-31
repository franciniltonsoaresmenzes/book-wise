import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { StartRating } from '../StarRating'
import { SmallText, Title } from '../UI/Typography'
import { Content, Description } from './styles'
import { Book, Category } from '@prisma/client'

type BookInfoProps = {
  book: Book
}

type Props = {
  data: BookInfoProps
}

export function BookInfo({ data }: Props) {
  return (
    <Dialog.Trigger asChild>
      <Content variant="small">
        <Image
          src={data.book.cover_url}
          width={108}
          height={152}
          alt="Imagen do Livro"
        />
        <Description>
          <div>
            <Title size="md">{data.book.name}</Title>
            <SmallText>{data.book.author}</SmallText>
          </div>
          <StartRating rating={4} />
        </Description>
      </Content>
    </Dialog.Trigger>
  )
}
