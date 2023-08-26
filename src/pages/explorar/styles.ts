import { styled } from '../../../stitches.config'

export const ContentTags = styled('div', {
  display: 'flex',
  gap: '$3',
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
