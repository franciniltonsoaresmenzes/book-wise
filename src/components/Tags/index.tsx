import { Text } from '../UI/Typography'
import { Content } from './styles'

type Props = {
  children: string
  selected?: boolean
}

export function Tags({ children, selected = false }: Props) {
  return (
    <Content seleted={selected}>
      <Text>{children}</Text>
    </Content>
  )
}
