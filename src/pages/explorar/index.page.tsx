import * as Dialog from '@radix-ui/react-dialog'
import { BookInfo } from '@/components/BookInfo'
import { InputSearch } from '@/components/InputSearch'
import { SidePanel } from '@/components/SidePanel'
import { Tags } from '@/components/Tags'
import { Title } from '@/components/UI/Typography'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { Binoculars } from '@phosphor-icons/react'
import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { ContentBook, ContentTags, HeaderTitle, TitlePrincipal } from './styles'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Book, Category } from '@prisma/client'

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
    label: 'Suspense',
    selected: false,
  },
]

type BooksProps = {
  book: Book
  category: Category
}

type ResponseProps = {
  books: BooksProps[]
}

const Explorar: NextPageWithLayout = () => {
  const [isSelected, setIsSelected] = useState('Tudo')

  const { data } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await api.get<ResponseProps>('/books')

      return response.data
    },
  })

  const books = data ? data.books : []

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
          <Tags
            key={tag.label}
            selected={isSelected === tag.label}
            onClick={() => setIsSelected(tag.label)}
          >
            {tag.label}
          </Tags>
        ))}
      </ContentTags>
      <ContentBook>
        <Dialog.Root>
          {books.map((book) => (
            <BookInfo key={book.book.id} data={book} />
          ))}

          <SidePanel />
        </Dialog.Root>
      </ContentBook>
    </>
  )
}

Explorar.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explorar
