import { styled } from '../../../stitches.config'

export const Content = styled('button', {
  padding: '$1 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  background: 'none',
  border: '1px solid $purple100',
  color: '$purple100',

  '&:hover': {
    background: '$purple200',
    color: '$gray100',
  },

  variants: {
    seleted: {
      true: {
        background: '$purple200',
        color: '$gray100',
        border: 'transparent',
      },
    },
  },
})
