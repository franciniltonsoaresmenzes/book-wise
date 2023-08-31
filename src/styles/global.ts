import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  ':focus': {
    outline: 0,
  },
  body: {
    backgroundColor: '$gray800',
  },
  'body, input, textarea, button': {
    fontFamily: '$default',
    '-webkit-font-smoothing': 'antialiased',
    color: '$gray100',
  },
  button: {
    background: 'none',
    cursor: 'pointer',
    border: 0,
  },

  a: {
    textDecoration: 'none',
    color: '$gray100',
  },
  li: {
    listStyle: 'none',
  },
  img: {
    pointerEvents: 'none',
    height: 'auto',
  },
})
