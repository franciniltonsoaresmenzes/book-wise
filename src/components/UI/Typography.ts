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
    weight: 'regular',
    size: 'md',
  },
})

export const SmallText = styled('span', {
  color: '$gray400',
  fontWeight: '$regular',
  lineHeight: '$base',
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
    size: 'sm',
  },
})

export const HeaderTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  '> svg': {
    color: '$green100',
  },
  marginBottom: '2.5rem',
})
