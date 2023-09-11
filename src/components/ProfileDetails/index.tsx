import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import { SmallText, Title } from '../UI/Typography'
import { TagsBook } from './components/TagsBook'
import { Content, ContentTag, Header, Rectangle } from './styles'
import { User } from '@prisma/client'
import dayjs from 'dayjs'

type ProfileProps = {
  metrics: {
    countPagesRead: number
    ratingsLenght: number
    countAuthor: number
    bestCategory: string
    user: User
  }
}

export function Perfil({ metrics }: ProfileProps) {
  const createAt = dayjs(metrics.user.created_at).fromNow()

  return (
    <Content>
      <Header>
        <Avatar image={metrics.user.avatar_url ?? ''} variant="xs" />
        <div>
          <Title>{metrics.user.name}</Title>
          <SmallText>{createAt}</SmallText>
        </div>
      </Header>

      <Rectangle />

      <ContentTag>
        <TagsBook
          icon={<BookOpen size={32} />}
          category="Páginas lidas"
          value={metrics.countPagesRead}
        />
        <TagsBook
          icon={<Books size={32} />}
          category="Livros avaliados"
          value={metrics.ratingsLenght}
        />
        <TagsBook
          icon={<UserList size={32} />}
          category="Autores lidos"
          value={metrics.countAuthor}
        />
        <TagsBook
          icon={<BookmarkSimple size={32} />}
          category="Categoria mais lida"
          value={metrics.bestCategory}
        />
      </ContentTag>
    </Content>
  )
}
