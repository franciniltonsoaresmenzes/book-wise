import { styled } from '../../../stitches.config'
import { Text } from '../UI/Typography'

export const Header = styled('div', {
  display: 'flex',
  gap: '$6',
  marginBottom: '$6',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
})

export const Data = styled(Text, {
  marginBottom: '$2',
})
