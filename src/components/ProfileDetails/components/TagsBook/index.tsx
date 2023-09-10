import { Text, Title } from '@/components/UI/Typography'
import { BookOpen } from '@phosphor-icons/react'

export function TagsBook() {
  return (
    <div>
      <BookOpen size={32} />

      <div>
        <Title>853</Title>
        <Text>Páginas lidas</Text>
      </div>
    </div>
  )
}
