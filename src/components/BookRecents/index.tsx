import Link from 'next/link'
import { HeaderSubTitle } from '../../pages/home/styles'
import { ContentRecent } from './styles'
import { CaretRight } from '@phosphor-icons/react'
import { CardRecent } from '../CardRecent'

export function BookRecents() {
  return (
    <ContentRecent>
      <HeaderSubTitle>
        <span>Sua última leitura</span>
        <Link href="/">
          Ver Todas
          <CaretRight size={16} />
        </Link>
      </HeaderSubTitle>
      <CardRecent />
    </ContentRecent>
  )
}
