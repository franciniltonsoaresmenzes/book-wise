import { MagnifyingGlass } from '@phosphor-icons/react'
import { ContentInput, Input } from './styles'

export function InputSearch() {
  return (
    <ContentInput>
      <Input placeholder="Buscar livro ou autor" />
      <MagnifyingGlass size={20} />
    </ContentInput>
  )
}
