import { Star } from '@phosphor-icons/react'
import { Content } from './styles'

type Props = {
  rating: number
}

export function StartRating({ rating }: Props) {
  const value = Math.floor(rating)

  if (value > 5 && value < 0) {
    return <p>Invalido</p>
  }
  const numer = Array.from({ length: value })
  const re = Array.from({ length: 5 - value })

  return (
    <Content>
      {numer.map((_, i) => (
        <Star key={i} weight="fill" size={16} />
      ))}

      {re.map((_, i) => (
        <Star key={i} size={16} />
      ))}
    </Content>
  )
}
