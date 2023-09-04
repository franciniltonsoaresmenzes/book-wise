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
import { BookProps } from '../BookDialog'

type Props = {
  data: BookProps
}

export function BookDetail({ data }: Props) {
  return (
    <Card>
      <Content>
        <Header>
          <Image
            src={data.cover_url}
            width={172}
            height={242}
            alt="Imagen do Livro"
          />
          <Description>
            <div>
              <HeaderTitlte size="lg">{data.name}</HeaderTitlte>
              <SmallText size="md">{data.author}</SmallText>
            </div>
            <div>
              <StartRating rating={Math.floor(data.avgRating)} />
              <Rating size="sm">{Math.floor(data.avgRating)} avaliações</Rating>
            </div>
          </Description>
        </Header>
        <Footer>
          <Category>
            <BookmarkSimple size={24} />
            <div>
              <SmallText size="sm">Categoria</SmallText>
              <Title size="md">
                {data.categories.map(
                  (category) => `${category.category.name} `,
                )}
              </Title>
            </div>
          </Category>

          <Category>
            <BookOpen size={24} />
            <div>
              <SmallText>Páginas</SmallText>
              <Title size="md">{data.total_pages}</Title>
            </div>
          </Category>
        </Footer>
      </Content>
    </Card>
  )
}
