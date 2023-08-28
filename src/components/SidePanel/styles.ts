import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,

  width: '100%',
  maxWidth: 660,
  height: '100vh',
  background: '$gray800',
  padding: '4.5rem 3rem',

  overflow: 'auto',

  zIndex: 2,
})

export const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0, 0, 0, 0.60)',
  width: '100%',
  height: '100vh',
  position: 'fixed',

  top: 0,
  right: 0,
})

export const Close = styled(Dialog.Close, {
  color: '$gray400',
  position: 'absolute',
  padding: 8,
  top: 24,
  right: 48,
  background: 'none',
  borderRadius: 8,
  '&:hover': {
    background: '$gray500',
    color: '$purple100',
  },
})

export const EvaluationHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '$10',
  marginBottom: '$4',
})

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
