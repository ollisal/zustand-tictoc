import * as stylex from '@stylexjs/stylex'
import { Square } from './Square'

const styles = stylex.create({
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, min-content)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '0',
  },
})

export const Board = () => {
  return (
    <div {...stylex.props(styles.board)}>
      {Array.from({ length: 3 }).map((_, _rowIndex) =>
        Array.from({ length: 3 }).map((_, _colIndex) => {
          return <Square value={null} />
        })
      )}
    </div>
  )
}
