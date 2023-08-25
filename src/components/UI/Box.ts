import { styled } from '../../../stitches.config'

export const Box = styled('div', {
  width: '100%',
  padding: '1.5rem',
  background: '$gray700',
  borderRadius: 8,

  '&:hover': {
    boxShadow: '0 0 0 2px $colors$gray500',
  },

  transition: '.2s',

  variants: {
    variant: {
      secundary: {
        background: '$gray600',
        padding: '1.25rem',
      },
    },
  },
})
