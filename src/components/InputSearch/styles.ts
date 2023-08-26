import { styled } from '../../../stitches.config'

export const ContentInput = styled('div', {
  padding: '0.875rem 1.25rem',
  border: '1px solid $colors$gray500',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',
  color: '$gray500',
  width: '100%',
  maxWidth: 393,
  '&:focus-within': {
    border: '1px solid $colors$green200',
  },
})

export const Input = styled('input', {
  outline: 'none',
  background: 'none',
  color: '$gray400',
  border: 'none',
  fontSize: '0.875rem',
  fontWeight: '$regular',
  '&:focus': {
    color: '$gray200',
  },
})
