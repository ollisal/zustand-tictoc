import * as stylex from '@stylexjs/stylex'

interface SquareProps {
  value: 'X' | 'O' | null
  onClick?: () => void
}

const styles = stylex.create({
  square: {
    placeContent: 'center',
    width: '3rem',
    height: '3rem',
    backgroundColor: 'light-dark(#fff, #444)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'light-dark(#333, #ccc)',
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
})

export const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button {...stylex.props(styles.square)} onClick={onClick}>
      {value}
    </button>
  )
}
