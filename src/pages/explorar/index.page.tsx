import { DefaultLayout } from '@/layout/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { Title } from '@/components/UI/Typography'
import { Binoculars } from '@phosphor-icons/react'
import { Tags } from '@/components/Tags'
import { ContentBook, ContentTags, HeaderTitle, TitlePrincipal } from './styles'
import { InputSearch } from '@/components/InputSearch'
import { Box } from '@/components/UI/Box'
import { BookInfo } from '@/components/BookInfo'

type TagsProps = {
  label: string
  selected: boolean
}
const tags: TagsProps[] = [
  {
    label: 'Tudo',
    selected: true,
  },
  {
    label: 'Computação',
    selected: false,
  },
  {
    label: 'Educação',
    selected: false,
  },
  {
    label: 'Fantasia',
    selected: false,
  },
  {
    label: 'Ficção científica',
    selected: false,
  },
  {
    label: 'Horror',
    selected: false,
  },
  {
    label: 'Ficção científica',
    selected: false,
  },
  {
    label: 'Suspense',
    selected: false,
  },
]

const Explorar: NextPageWithLayout = () => {
  const length = Array.from({ length: 15 })
  return (
    <>
      <HeaderTitle>
        <TitlePrincipal>
          <Binoculars size={32} />
          <Title>Explorar</Title>
        </TitlePrincipal>
        <InputSearch />
      </HeaderTitle>
      <ContentTags>
        {tags.map((tag) => (
          <Tags key={tag.label} selected={tag.selected}>
            {tag.label}
          </Tags>
        ))}
      </ContentTags>
      <ContentBook>
        {length.map((_, i) => (
          <BookInfo key={i} />
        ))}
      </ContentBook>
    </>
  )
}

Explorar.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explorar
