import { DefaultLayout } from '@/layout/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { HeaderTitle, Text, Title } from '@/components/UI/Typography'
import { ChartLineUp } from '@phosphor-icons/react'
import { ContentHome, MainPrincipal } from './styles'
import { BookRecents } from '../../components/BookRecents'
import { useSession } from 'next-auth/react'
import { BooksReviews } from '@/components/BooksReviews'

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
        <div></div>
      </ContentHome>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
