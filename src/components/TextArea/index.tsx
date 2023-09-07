import { TextareaHTMLAttributes } from 'react'
import { Accountant, Input, Container } from './styles'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  limit: number
  value: string
}

export function TextArea({ value, limit, ...props }: Props) {
  const characters = String(value).length
  return (
    <Container>
      <Input placeholder="Escreva sua avaliação" {...props} maxLength={limit} />
      <Accountant>
        {characters}/{limit}
      </Accountant>
    </Container>
  )
}
