import { useState } from 'react'
import { Avatar } from '../Avatar'
import { TextArea } from '../TextArea'
import { Box } from '../UI/Box'
import { Text } from '../UI/Typography'
import { RatingStars } from './component/RatingStars'
import { Header } from './styles'

export function Evaluate() {
  const [value, setValue] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  return (
    <Box>
      <Header>
        <div>
          <Avatar image="i" />
          <Text>Francinilonr</Text>
        </div>
        <RatingStars setRating={setRating} />
      </Header>
      <TextArea
        limit={450}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  )
}
