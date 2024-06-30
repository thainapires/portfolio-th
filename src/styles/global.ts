import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    scrollBehavior: 'smooth',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$darkBlue',
    color: '$gray100',
    padding: '0 5rem 0 5rem',
  },

  'body, input, textarea, button': {
    fontFamily: 'Raleway',
    fontWeight: 400
  },

  'section': {
    minHeight: '100vh',
  }
})