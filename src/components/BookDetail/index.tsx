import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import Image from 'next/image'
import { StartRating } from '../StarRating'
import { SmallText, Title } from '../UI/Typography'
import {
  Card,
  Footer,
  Header,
  Description,
  Content,
  Category,
  HeaderTitlte,
  Rating,
} from './styles'

export function BookDetail() {
  return (
    <Card>
      <Content>
        <Header>
          <Image
            src="/images/books/entendendo-algoritmos.png"
            width={172}
            height={242}
            alt="Imagen do Livro"
          />
          <Description>
            <div>
              <HeaderTitlte size="lg">
                14 Hábitos de Desenvolvedores Altamente Produtivos
              </HeaderTitlte>
              <SmallText size="md">Aditya Bhargava</SmallText>
            </div>
            <div>
              <StartRating rating={4} />
              <Rating size="sm">3 avaliações</Rating>
            </div>
          </Description>
        </Header>
        <Footer>
          <Category>
            <BookmarkSimple size={24} />
            <div>
              <SmallText size="sm">Categoria</SmallText>
              <Title size="md">Computação, educação</Title>
            </div>
          </Category>

          <Category>
            <BookOpen size={24} />
            <div>
              <SmallText>Páginas</SmallText>
              <Title size="md">160</Title>
            </div>
          </Category>
        </Footer>
      </Content>
    </Card>
  )
}
