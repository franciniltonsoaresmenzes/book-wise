import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',
  padding: '1.25rem',
  display: 'flex',
})

export const ContentLogo = styled('div', {
  position: 'relative',
  background: 'url(./capa.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  overflow: 'hidden',

  borderRadius: '$md',

  maxWidth: '41.5rem',
  width: '100%',
})

export const Blur = styled('div', {
  width: '100%',
  height: '100%',

  position: 'absolute',
  top: 0,
  left: 0,
  background:
    'linear-gradient(0deg, rgba(42, 40, 121, 0.60) 0%, rgba(42, 40, 121, 0.60) 100%), rgba(0, 0, 0, 0.60)',
  backdropFilter: 'blur(1px)',
})

export const ContentLogin = styled('div', {
  display: 'flex',
  width: '100%',

  alignItems: 'center',
  justifyContent: 'center',
})

export const FormLogin = styled('div', {
  width: '100%',
  maxWidth: '23.25rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})
