import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  card: {
    padding: '2em',
  },
})

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div {...stylex.props(styles.card)}>{children}</div>
}
