import Link from 'next/link'
import { styled } from '../../../stitches.config'

export const LayoutMain = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'minmax( 364px,624px) 1fr',
  gap: '4rem',
})

export const Section = styled('section', {
  width: '100%',
})

export const FlexCardBook = styled('div', {
  marginTop: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})

export const DetailsProfiler = styled('div', {
  width: '100%',
})

export const LinkBack = styled(Link, {
  display: 'flex',
  gap: 7,
  alignItems: 'center',
})
