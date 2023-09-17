import { styled } from '../../../stitches.config'

export const ContentTags = styled('div', {
  display: 'flex',
  gap: '$3',
  flexWrap: 'wrap',
  padding: '1rem 0 1rem 0',
})

export const TitlePrincipal = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  '> svg': {
    color: '$green100',
  },
})

export const HeaderTitle = styled('div', {
  marginBottom: '2.5rem',
  display: 'flex',
  justifyContent: 'space-between',
})

export const ContentBook = styled('section', {
  marginTop: '3rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(279px, .5fr))',
  gap: '1.25rem',
})
