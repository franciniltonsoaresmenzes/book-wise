import { DefaultLayout } from '@/layout/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'

const Profile: NextPageWithLayout = () => {
  return <h1>Profile</h1>
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Profile
