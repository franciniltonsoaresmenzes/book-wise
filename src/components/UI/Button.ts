import { styled } from '../../../stitches.config'

export const Button = styled('button', {
  backgroundColor: '$gray600',
  padding: '0 $6',

  width: '100%',

  display: 'flex',
  gap: '$5',
  alignItems: 'center',

  '> img': {
    alignSelf: 'center',
  },

  transition: '0.2s',

  '&:hover': {
    backgroundColor: '$gray500',
  },

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray400',
    opacity: 0.6,
  },
  variants: {
    weight: {
      medium: {
        padding: '0 $6',
        borderRadius: 8,
        height: 72,
      },
      small: {
        padding: '$2',
        borderRadius: 4,
      },
    },
  },
  defaultVariants: {
    weight: 'medium',
  },
})
