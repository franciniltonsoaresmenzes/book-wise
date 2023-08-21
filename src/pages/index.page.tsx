import { ReactElement } from 'react'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { NextPageWithLayout } from './_app.page'
import { useSession } from 'next-auth/react'

const Home: NextPageWithLayout = () => {
  const { data } = useSession()
  console.log(data)

  return <h1>Home</h1>
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
