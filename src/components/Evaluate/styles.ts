import { styled } from '../../../stitches.config'

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
})

export const AvatarHeader = styled('div', {
  display: 'flex',
  gap: '$4',
})

export const Footer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '0.75rem',

  '> div': {
    display: 'flex',
    gap: '$2',
  },
})
