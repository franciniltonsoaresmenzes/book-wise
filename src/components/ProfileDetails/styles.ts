import { styled } from '../../../stitches.config'

export const Content = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  alignItems: 'center',
  borderLeft: '1px solid $colors$gray700',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  alignItems: 'center',
  '> div': {
    textAlign: 'center',
  },
})

export const Rectangle = styled('div', {
  width: '2rem',
  height: '0.25rem',
  borderRadius: '$full',
  background: 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
})

export const ContentTag = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  alignItems: 'center',
})
