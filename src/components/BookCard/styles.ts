import { styled } from '../../../stitches.config'

export const HeaderCard = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'self-start',

  marginBottom: '2rem',
})

export const Author = styled('div', {
  display: 'flex',
  gap: '1rem',

  '> span': {
    color: '$gray400',
  },
})

export const ContentCard = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  '> img': {
    width: 100,
    height: 152,
  },
})

export const DescriptionBook = styled('p', {
  marginTop: '1.25rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '4',
})
