import { CaretRight } from '@phosphor-icons/react'
import LinkNext from 'next/link'
import { Content } from './styles'
import { Text } from '../UI/Typography'

type Props = {
  href: string
  description: string
  variant?: 'small' | 'medium'
}

export function Link({ href, description, variant = 'small' }: Props) {
  return (
    <LinkNext href={href}>
      <Content>
        <Text>{description}</Text>
        <CaretRight size={variant === 'small' ? 16 : 20} />
      </Content>
    </LinkNext>
  )
}
