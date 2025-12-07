import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  base: {
    cursor: 'pointer',

    backgroundColor: {
      default: '#1a1a1a',
      '@media (prefers-color-scheme: light)': '#f9f9f9',
    },

    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',

    transitionProperty: 'border-color',
    transitionDuration: '0.25s',
    borderColor: {
      default: 'transparent',
      ':hover': '#646cff',
    },

    paddingTop: '0.6em',
    paddingBottom: '0.6em',
    paddingLeft: '1.2em',
    paddingRight: '1.2em',

    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',

    outlineWidth: {
      ':focus-visible': '4px',
    },
    outlineStyle: {
      ':focus-visible': 'auto',
    },
    outlineColor: {
      ':focus-visible': '-webkit-focus-ring-color',
    },
  },
})

export const Button = (props: React.ComponentProps<'button'>) => {
  return <button {...stylex.props(styles.base)} {...props}></button>
}
