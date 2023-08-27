import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { StartRating } from '../StarRating'
import { SmallText, Title } from '../UI/Typography'
import { Content, Description } from './styles'

export function BookInfo() {
  return (
    <Dialog.Trigger asChild>
      <Content variant="small">
        <Image
          src="/images/books/entendendo-algoritmos.png"
          width={108}
          height={152}
          alt="Imagen do Livro"
        />
        <Description>
          <div>
            <Title size="md">Entendendo Algoritmos</Title>
            <SmallText>George Orwell</SmallText>
          </div>
          <StartRating rating={4} />
        </Description>
      </Content>
    </Dialog.Trigger>
  )
}