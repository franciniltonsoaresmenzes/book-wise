import { Text, Title } from '@/components/UI/Typography'
import { ReactNode } from 'react'
import { Content } from './styles'

type Props = {
  icon: ReactNode
  category: string
  value: string | number
}

export function TagsBook({ icon, category, value }: Props) {
  return (
    <Content>
      {icon}
      <div>
        <Title size="md">{value}</Title>
        <Text size="sm">{category}</Text>
      </div>
    </Content>
  )
}
