import { ButtonHTMLAttributes } from 'react'
import { Text } from '../UI/Typography'
import { Content } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean
}

export function Tags({ children, selected = false, ...props }: Props) {
  return (
    <Content seleted={selected} {...props}>
      <Text>{children}</Text>
    </Content>
  )
}
