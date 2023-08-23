import { styled } from '../../../stitches.config'

export const Box = styled('div', {
  padding: 20,
  width: '100%',
  background: '$gray700',
  borderRadius: 8,
  variants: {
    variant: {
      secundary: {
        background: '$gray600',
      },
    },
  },
})
