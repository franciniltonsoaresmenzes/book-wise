import Image from 'next/image'
import { StartRating } from '../StarRating'
import { Text, Title } from '../UI/Typography'
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
          <Text as="span" size="sm">
            Aditya Bhargava
          </Text>
        </div>
        <StartRating rating={4} />
      </Description>
    </Content>
  )
}
