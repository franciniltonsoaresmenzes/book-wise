import { styled } from '../../../stitches.config'
import LinkNext from 'next/link'

export const Link = styled(LinkNext, {
  display: 'flex',
  padding: '4px 8px',
  gap: '0.5rem',
  color: '$purple100',
  alignItems: 'center',
  borderRadius: 4,

  '&:hover': {
    background: 'rgba(131, 129, 217, 0.06)',
  },
})
