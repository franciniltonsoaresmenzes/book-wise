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
    fontSize: '$md',
    fontWeight: '$regular',
    '-webkit-font-smoothing': 'antialiased',
    color: '$gray100',
  },
  button: {
    cursor: 'pointer',
    border: 0,
  },
  'input:focus': {
    boxShadow: '0 0 0 1px $colors$green200',
  },
  a: {
    textDecoration: 'none',
  },
  img: {
    pointerEvents: 'none',
    height: 'auto',
  },
})
