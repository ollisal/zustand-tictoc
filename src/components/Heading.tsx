import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
  main: {
    fontSize: '3.2rem',
    lineHeight: 1.1,
  },
})

export const MainHeading = ({ children }: { children: React.ReactNode }) => {
  return <h1 {...stylex.props(styles.main)}>{children}</h1>
}
