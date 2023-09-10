import { BookCardProfile } from '@/components/BookCardProfile'
import { InputSearch } from '@/components/InputSearch'
import { Perfil } from '@/components/ProfileDetails'
import { HeaderTitle, Title } from '@/components/UI/Typography'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { DetailsProfiler, FlexCardBook, LayoutMain, Section } from './styles'

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <HeaderTitle>
        <User size={32} />
        <Title>Profile</Title>
      </HeaderTitle>
      <LayoutMain>
        <Section>
          <InputSearch
            icon={<MagnifyingGlass size={20} />}
            placeholder="Buscar livro avaliado"
          />
          <FlexCardBook>
            <BookCardProfile />
            <BookCardProfile />
            <BookCardProfile />
          </FlexCardBook>
        </Section>
        <DetailsProfiler>
          <Perfil />
        </DetailsProfiler>
      </LayoutMain>
    </>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Profile
