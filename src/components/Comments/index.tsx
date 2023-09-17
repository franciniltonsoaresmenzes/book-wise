import dayjs from 'dayjs'
import { Avatar } from '../Avatar'
import { RatingProps } from '../BookDialog'
import { StartRating } from '../StarRating'
import { Box } from '../UI/Box'
import { SmallText, Text } from '../UI/Typography'
import { Author, Description, Header } from './styles'
import Link from 'next/link'

type Props = {
  data: RatingProps
  active?: boolean
}

export function Comments({ data, active = false }: Props) {
  const createAt = dayjs(data.created_at).fromNow()

  return (
    <Box active={active}>
      <Header>
        <Author>
          <Link href={`/profile/${data.user.id}`}>
            <Avatar image={data.user.avatar_url ?? ''} />
          </Link>
          <div>
            <Text>{data.user.name}</Text>
            <SmallText>{createAt}</SmallText>
          </div>
        </Author>
        <StartRating rating={data.rate} />
      </Header>
      <Description as="p" size="sm">
        {data.description}
      </Description>
    </Box>
  )
}
