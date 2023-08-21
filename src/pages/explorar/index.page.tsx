import { DefaultLayout } from '@/layout/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'

const Explorar: NextPageWithLayout = () => {
  return <h1>Explorar</h1>
}

Explorar.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explorar
