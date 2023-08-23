import { styled } from '../../../stitches.config'

export const ContainerLayout = styled('div', {
  width: '100%',
  height: '100vh',
  padding: '$5',

  display: 'grid',
  gridTemplateColumns: 'minmax(100px, 232px) 1fr',

  gap: '6rem',
})

export const ContentLayout = styled('main', {
  paddingTop: '3.25rem',
  maxWidth: '62.25rem',
  width: '100%',
})
