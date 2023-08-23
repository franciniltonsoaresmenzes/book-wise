import { Star } from '@phosphor-icons/react'

type Props = {
  rating: number
}

export function StartRating({ rating }: Props) {
  if (rating > 5 && rating < 0) {
    return <p>Invalido</p>
  }
  const numer = Array.from({ length: rating })
  const re = Array.from({ length: 5 - rating })

  return (
    <div>
      {numer.map((_, i) => (
        <Star key={i} weight="fill" size={16} />
      ))}

      {re.map((_, i) => (
        <Star key={i} size={16} />
      ))}
    </div>
  )
}
