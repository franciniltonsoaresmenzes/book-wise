import { styled } from '../../../stitches.config'

export const Button = styled('button', {
  backgroundColor: '$gray600',
  padding: '0 $6',

  width: '100%',
  height: 72,

  display: 'flex',
  gap: '$5',
  alignItems: 'center',

  borderRadius: 8,

  '> img': {
    alignSelf: 'center',
  },

  transition: '0.2s',

  '&:hover': {
    backgroundColor: '$gray500',
  },
})
