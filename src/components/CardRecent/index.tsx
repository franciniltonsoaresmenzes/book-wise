import Image from 'next/image'
import { Content, Header, Description } from './styles'
import { StartRating } from '../StarRating'
import { Text, Title } from '../UI/Typography'

export function CardRecent() {
  return (
    <Content variant="secundary">
      <Image
        src="/images/books/entendendo-algoritmos.png"
        width={108}
        height={152}
        alt="Imagen do Livro"
      />
      <div>
        <Header>
          <Text as="span">Há 2 dias</Text>
          <StartRating rating={4} />
        </Header>
        <div>
          <Title size="md">Entendendo Algoritmos</Title>
          <Text as="span" size="sm">
            Aditya Bhargava
          </Text>
        </div>

        <Description>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu Lorem ipsum
          dolor sit amet, qui minim labore adipisicing minim sint cillum sint
          consectetur cupidatat.
        </Description>
      </div>
    </Content>
  )
}
