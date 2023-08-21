import { ReactElement } from 'react'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { NextPageWithLayout } from './_app.page'

const Home: NextPageWithLayout = () => {
  return <h1>Home</h1>
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
