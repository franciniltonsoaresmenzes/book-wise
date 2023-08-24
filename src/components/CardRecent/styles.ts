import { styled } from '../../../stitches.config'
import { Box } from '../UI/Box'

export const Content = styled(Box, {
  display: 'flex',
  gap: '$6',

  '> div': {
    width: '100%',
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 12,
  color: '$gray300',
})

export const Description = styled('p', {
  marginTop: '1.5rem',
  color: '$gray300',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '3',
})
