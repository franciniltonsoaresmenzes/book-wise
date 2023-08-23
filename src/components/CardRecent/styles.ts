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
})
