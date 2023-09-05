import { Star } from '@phosphor-icons/react'
import { Content } from './styles'
import { useState } from 'react'

type Props = {
  setRating: (value: number) => void
}

export function RatingStars({ setRating }: Props) {
  const [value, setValue] = useState<number>(0)

  function handleSetRating() {
    setRating(value)
  }

  return (
    <Content>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          weight={i + 1 <= value ? 'fill' : 'regular'}
          key={i}
          size={28}
          onMouseEnter={() => setValue(i + 1)}
          onClick={handleSetRating}
        />
      ))}
    </Content>
  )
}
