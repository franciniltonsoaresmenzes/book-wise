import { BookCardProfile } from '@/components/BookCardProfile'
import { InputSearch } from '@/components/InputSearch'
import { Perfil } from '@/components/ProfileDetails'
import { HeaderTitle, Title } from '@/components/UI/Typography'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { CaretLeft, MagnifyingGlass, User } from '@phosphor-icons/react'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import {
  DetailsProfiler,
  FlexCardBook,
  LayoutMain,
  LinkBack,
  Section,
} from './styles'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Profile: NextPageWithLayout = () => {
  const router = useRouter()
  const userIdPathname = router.asPath.split('/')[2]

  const { data: session } = useSession()

  const userId = session?.user ? session.user.id : ''

  const isWhoami = userId === userIdPathname

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
