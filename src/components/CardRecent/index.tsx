import Image from 'next/image'
import { Content, Header } from './styles'
import { StartRating } from '../StarRating'
import { Title } from '../UI/Typography'

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
          <span>Há 2 dias</span>
          <StartRating rating={4} />
        </Header>
        <div>
          <Title size="xl">Entendendo Algoritmos</Title>
          Aditya Bhargava
        </div>

        <div>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </div>
      </div>
    </Content>
  )
}
