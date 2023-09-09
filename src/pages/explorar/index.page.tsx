import { BookInfo } from '@/components/BookInfo'
import { InputSearch } from '@/components/InputSearch'
import { Tags } from '@/components/Tags'
import { Title } from '@/components/UI/Typography'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { api } from '@/lib/axios'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { ContentBook, ContentTags, HeaderTitle, TitlePrincipal } from './styles'

type BooksProps = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  avgRating: number
  rating: number
  alReady: boolean
}

type ResponseProps = {
  books: BooksProps[]
}

type CategoryProps = {
  category: Category[]
}

const Explorar: NextPageWithLayout = () => {
  const [isSelected, setIsSelected] = useState<string | null>(null)
  const [isValueFilter, setIsValueFilter] = useState<string>('')

  const { data, isFetching } = useQuery({
    queryKey: ['books', isSelected],
    queryFn: async () => {
      const response = await api.get<ResponseProps>('/books', {
        params: {
          category: isSelected,
        },
      })

      return response.data
    },
  })

  const { data: tags } = useQuery({
    queryKey: ['categorys'],
    queryFn: async () => {
      const response = await api.get<CategoryProps>('/category')

      return response.data
    },
  })

  const books = data ? data.books : []

  const categorys = tags ? tags.category : []

  const filterBooks = books.filter((book) => {
    return (
      book.name.toLowerCase().includes(isValueFilter.toLowerCase()) ||
      book.author.toLowerCase().includes(isValueFilter.toLowerCase())
    )
  })

  return (
    <>
      <HeaderTitle>
        <TitlePrincipal>
          <Binoculars size={32} />
          <Title>Explorar</Title>
        </TitlePrincipal>
        <InputSearch
          css={{ maxWidth: 393 }}
          icon={<MagnifyingGlass size={20} />}
          placeholder="Buscar livro ou autor"
          type="text"
          value={isValueFilter}
          onChange={(e) => setIsValueFilter(e.target.value)}
        />
      </HeaderTitle>
      <ContentTags>
        <Tags
          selected={isSelected === null}
          onClick={() => setIsSelected(null)}
        >
          Tudo
        </Tags>
        {categorys.map((tag) => (
          <Tags
            key={tag.id}
            selected={isSelected === tag.id}
            onClick={() => setIsSelected(tag.id)}
          >
            {tag.name}
          </Tags>
        ))}
      </ContentTags>
      <ContentBook>
        {!isFetching &&
          filterBooks.map((book) => <BookInfo key={book.id} data={book} />)}
      </ContentBook>
    </>
  )
}

Explorar.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explorar
