import { styled } from '../../../stitches.config'

export const Title = styled('h3', {
  fontWeight: '$bold',
  lineHeight: '$short',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
    },
  },

  defaultVariants: {
    size: '2xl',
  },
})

export const Text = styled('p', {
  fontSize: '$md',
  lineHeight: '$base',

  variants: {
    weight: {
      bold: {
        fontSize: '$bold',
      },
      regular: {
        fontWeight: '$regular',
      },
    },
  },

  defaultVariants: {
    weight: 'regular',
  },
})
