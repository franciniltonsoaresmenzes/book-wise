import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { Avatar } from '../Avatar'
import { SmallText, Title } from '../UI/Typography'
import { TagsBook } from './components/TagsBook'
import { Header, Content, Rectangle, ContentTag } from './styles'

export function Perfil() {
  return (
    <Content>
      <Header>
        <Avatar image="i" variant="xs" />
        <div>
          <Title>Brandon Botosh</Title>
          <SmallText>membro desde 2019</SmallText>
        </div>
      </Header>

      <Rectangle />

      <ContentTag>
        <TagsBook
          icon={<BookOpen size={32} />}
          category="Páginas lidas"
          value={853}
        />
        <TagsBook
          icon={<Books size={32} />}
          category="Livros avaliados"
          value={10}
        />
        <TagsBook
          icon={<UserList size={32} />}
          category="Autores lidos"
          value={10}
        />
        <TagsBook
          icon={<BookmarkSimple size={32} />}
          category="Categoria mais lida"
          value="Computação"
        />
      </ContentTag>
    </Content>
  )
}
