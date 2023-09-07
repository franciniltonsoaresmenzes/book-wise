import { styled } from '../../../stitches.config'
import { Box } from '../UI/Box'

export const Content = styled(Box, {
  position: 'relative',
  display: 'flex',
  gap: '1.25rem',
  cursor: 'pointer',
  overflow: 'hidden',
})

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const IsReady = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  background: '$green300',
  color: '$green100',
  padding: '$1 $3',
  borderRadius: '0rem 0rem 0rem 0.25rem',
  display: 'flex',
  textTransform: 'uppercase',
})
