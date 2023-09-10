import { Avatar } from '../Avatar'
import { SmallText, Title } from '../UI/Typography'
import { TagsBook } from './components/TagsBook'

export function Perfil() {
  return (
    <div>
      <Avatar image="i" />
      <Title>Brandon Botosh</Title>
      <SmallText>membro desde 2019</SmallText>

      <TagsBook />
      <TagsBook />
      <TagsBook />
      <TagsBook />
    </div>
  )
}
