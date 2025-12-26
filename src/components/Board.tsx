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
  const playTurn = useGameStore((state) => state.playTurn)

  // TODO avoid creating new callbacks on each render
  return (
    <div {...stylex.props(styles.board)}>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => playTurn(index)} />
      ))}
    </div>
  )
}
