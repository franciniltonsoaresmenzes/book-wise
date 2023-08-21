import { styled } from '../../../stitches.config'

export const Content = styled('div', {
  padding: '8px 0',
  display: 'flex',
  gap: '12px',

  position: 'relative',

  color: '$gray400',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        '&::before': {
          content: '',
          position: 'absolute',

          width: '4px',
          height: '24px',

          left: '-20px',
          top: '9px',

          borderRadius: '999px',
          background:
            'var(--gradient-vertical, linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%))',
        },

        color: '$gray100',
      },
    },
  },
})
