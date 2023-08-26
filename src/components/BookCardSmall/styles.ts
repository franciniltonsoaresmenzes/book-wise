import { styled } from '../../../stitches.config'
import { Box } from '../UI/Box'

export const Content = styled(Box, {
  display: 'flex',
  gap: '1.25rem',
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
