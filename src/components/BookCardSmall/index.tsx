import Image from 'next/image'
import { StartRating } from '../StarRating'
import { SmallText, Text, Title } from '../UI/Typography'
import { Content, Description } from './styles'

export function BookCardSmall() {
  return (
    <Content variant="small">
      <Image
        src="/images/books/entendendo-algoritmos.png"
        width={64}
        height={92}
        alt="Imagen do Livro"
      />
      <Description>
        <div>
          <Title size="md">Entendendo Algoritmos</Title>
          <SmallText>Aditya Bhargava</SmallText>
        </div>
        <StartRating rating={4} />
      </Description>
    </Content>
  )
}
