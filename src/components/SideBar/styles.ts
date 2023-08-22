import Link from 'next/link'
import { styled } from '../../../stitches.config'

export const SideBarContent = styled('nav', {
  background: 'url(/background-sidebar.png) no-repeat center',
  width: '100%',
  height: 'calc(100% - 40px)',
  borderRadius: '12px',

  paddingTop: 40,
  paddingBottom: 24,

  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',
  justifyContent: 'space-between',
})

export const SideBarHeader = styled('div', {
  '> img': {
    marginBottom: '4rem',
  },
})

export const SinInFooter = styled(Link, {
  color: '$gray200',
  '> svg': {
    color: '$green200',
  },

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  cursor: 'pointer',
})

export const SinOutFooter = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',

  '> svg': {
    color: '#F75A68',
  },

  cursor: 'pointer',
})
