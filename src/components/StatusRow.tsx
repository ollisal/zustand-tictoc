import * as stylex from '@stylexjs/stylex'
import { useGameStore, useWinner } from '../store/game'

const styles = stylex.create({
  statusRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px',
  },
})

export const StatusRow = () => {
  const inTurn = useGameStore((state) => state.turn)
  const winner = useWinner()
  const isDraw = useGameStore((state) => {
    const squares = state.squares
    return squares.every((sq) => sq !== null) && !winner
  })

  return (
    <div {...stylex.props(styles.statusRow)}>
      {[
        winner && `Winner: ${winner}`,
        isDraw && 'Draw!',
        !winner && !isDraw && `Next turn: ${inTurn}`,
      ]
        .filter(Boolean)
        .join(' ')}
    </div>
  )
}
