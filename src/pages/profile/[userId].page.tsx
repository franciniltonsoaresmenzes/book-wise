import { DefaultLayout } from '@/layout/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import { HeaderTitle, SmallText, Text, Title } from '@/components/UI/Typography'
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { DetailsProfiler, FlexCardBook, LayoutMain, Section } from './styles'
import { InputSearch } from '@/components/InputSearch'
import { Box } from '@/components/UI/Box'
import Image from 'next/image'
import { Avatar } from '@/components/Avatar'
import { StartRating } from '@/components/StarRating'
import { BookCardProfile } from '@/components/BookCardProfile'

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
        <DetailsProfiler />
      </LayoutMain>
    </>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Profile
