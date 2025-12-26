import * as stylex from '@stylexjs/stylex'
import { Square } from './Square'
import { useGameStore } from '../store/game'

const styles = stylex.create({
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, min-content)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '0',
  },
})

export const Board = () => {
  const squares = useGameStore((state) => state.squares)
  const setSquares = useGameStore((state) => state.setSquares)

  function onSquareClicked(index: number) {
    if (squares[index] !== null) {
      return
    }

    const nextSquares = squares.slice()
    nextSquares[index] = 'X' // TODO turns

    setSquares(nextSquares)
  }

  return (
    <div {...stylex.props(styles.board)}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onSquareClicked(index)} />
      ))}
    </div>
  )
}
