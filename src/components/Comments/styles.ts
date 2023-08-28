import { styled } from '../../../stitches.config'
import { Text } from '../UI/Typography'

export const Author = styled('div', {
  display: 'flex',
  gap: '1rem',

  '> span': {
    color: '$gray400',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$5',
})

export const Description = styled(Text, {
  color: '$gray300',
})
