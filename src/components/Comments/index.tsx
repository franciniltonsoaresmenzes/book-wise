import { Avatar } from '../Avatar'
import { StartRating } from '../StarRating'
import { Box } from '../UI/Box'
import { SmallText, Text } from '../UI/Typography'
import { Author, Description, Header } from './styles'

export function Comments() {
  return (
    <Box>
      <Header>
        <Author>
          <Avatar image="null" />
          <div>
            <Text>Jaxson Dias</Text>
            <SmallText>Hoje</SmallText>
          </div>
        </Author>
        <StartRating rating={3} />
      </Header>
      <Description as="p" size="sm">
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </Description>
    </Box>
  )
}
