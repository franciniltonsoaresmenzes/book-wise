import { BookCardProfile } from '@/components/BookCardProfile'
import { InputSearch } from '@/components/InputSearch'
import { Perfil } from '@/components/ProfileDetails'
import { HeaderTitle, Title } from '@/components/UI/Typography'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { api } from '@/lib/axios'
import { CaretLeft, MagnifyingGlass, User } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app.page'
import {
  DetailsProfiler,
  FlexCardBook,
  LayoutMain,
  LinkBack,
  Section,
} from './styles'
import {
  Book,
  CategoriesOnBooks,
  Category,
  Rating,
  User as PrismaUser,
} from '@prisma/client'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

type Response = {
  books: ProfileRating[]
  metrics: {
    countPagesRead: number
    ratingsLenght: number
    countAuthor: number
    bestCategory: string
    user: PrismaUser
  }
}

const Profile: NextPageWithLayout = () => {
  const [filterValue, setFilterValue] = useState<string>('')
  const router = useRouter()
  const userIdPathname = router.query.userId as string

  const { data: session } = useSession()

  const userId = session?.user ? session.user.id : ''
  const isWhoami = userId === userIdPathname

  const { data: profile, isFetching } = useQuery<Response>({
    queryKey: ['user', userIdPathname],
    queryFn: async () => {
      const response = await api.get(`/profile/${userIdPathname}`)
      return response?.data ?? {}
    },
    enabled: !!userIdPathname,
  })

  if (!profile) return

  const filterBook = profile?.books.filter((book) => {
    return (
      book.book.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      book.book.author.toLowerCase().includes(filterValue.toLowerCase())
    )
  })

  return (
    <>
      <HeaderTitle>
        {isWhoami ? (
          <>
            <User size={32} />
            <Title>Profile</Title>
          </>
        ) : (
          <LinkBack href="/">
            <CaretLeft size={20} />
            <Title as="span" size="md">
              Voltar
            </Title>
          </LinkBack>
        )}
      </HeaderTitle>
      <LayoutMain>
        <Section>
          <InputSearch
            icon={<MagnifyingGlass size={20} />}
            placeholder="Buscar livro avaliado"
            onChange={(e) => setFilterValue(e.target.value)}
            value={filterValue}
          />
          <FlexCardBook>
            {!isFetching &&
              filterBook.map((book) => (
                <BookCardProfile key={book.id} data={book} />
              ))}
          </FlexCardBook>
        </Section>
        <DetailsProfiler>
          <Perfil metrics={profile.metrics} />
        </DetailsProfiler>
      </LayoutMain>
    </>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Profile
