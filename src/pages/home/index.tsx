import { BooksReviews } from '@/components/BooksReviews'
import { HeaderTitle, Title } from '@/components/UI/Typography'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { ChartLineUp } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { ReactElement } from 'react'
import { BookRecents } from '../../components/BookRecents'
import { NextPageWithLayout } from '../_app.page'
import { ContentHome, MainPrincipal } from './styles'
import { RatedBook } from '@/components/RatedBooks'

const Home: NextPageWithLayout = () => {
  const { data } = useSession()

  const user = data?.user

  return (
    <>
      <HeaderTitle>
        <ChartLineUp size={32} />
        <Title>Início</Title>
      </HeaderTitle>
      <ContentHome>
        <MainPrincipal>
          {user && <BookRecents />}
          <BooksReviews />
        </MainPrincipal>
        <div>
          <RatedBook />
        </div>
      </ContentHome>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
