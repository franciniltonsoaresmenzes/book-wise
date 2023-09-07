import { styled } from '../../../stitches.config'
import { Box } from '../UI/Box'
import { Text, Title } from '../UI/Typography'

export const Card = styled(Box, {
  padding: '$6 $8 $4 $8',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const Header = styled('header', {
  display: 'flex',
  gap: '$8',
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Rating = styled(Text, {
  color: '$gray400',
  marginTop: '0.25rem',
})

export const HeaderTitlte = styled(Title, {
  marginBottom: '0.5rem',
})

export const Footer = styled('div', {
  display: 'flex',
  padding: '$6 0',
  gap: '3.5rem',

  borderTop: '1px solid $colors$gray600',
})

export const CategoryContent = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

  '> svg': {
    color: '$green100',
  },
})

export const Category = styled('div', {
  'span:not(:last-child)::after': {
    content: ', ',
  },
})
