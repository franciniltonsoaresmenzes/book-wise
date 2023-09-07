import { styled } from '../../../stitches.config'
import { SmallText } from '../UI/Typography'

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
})

export const Input = styled('textarea', {
  background: '$gray800',
  borderRadius: '4px',
  padding: '$5 $3',
  width: '100%',
  minHeight: 164,

  color: '$gray400',
  fontSize: '$sm',
  fontWeight: '$regular',

  border: '1px solid $colors$gray500',

  resize: 'none',

  '&:focus': {
    border: '1px solid $colors$green200',
  },
})

export const Accountant = styled(SmallText, {
  position: 'absolute',
  right: '0.5rem',
  bottom: '0.25rem',
})
