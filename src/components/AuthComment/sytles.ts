import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'
import { Box } from '../UI/Box'

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxWeight: '85vh',
  padding: '25px',
  animation: '150ms',
  zIndex: 99999,
})

export const BoxContainer = styled(Box, {
  padding: '3.5rem 4.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.5rem',
  width: 472,
})

export const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0, 0, 0, 0.60)',
  position: 'fixed',
  inset: '0',
  animation: '150ms',
  zIndex: 99999,
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 50,
  right: 0,
})
