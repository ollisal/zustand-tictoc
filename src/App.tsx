import * as stylex from '@stylexjs/stylex'

import { MainHeading } from './components/Heading'
import { ViteLogo, ReactLogo } from './components/Logo'
import { Board } from './components/Board'

const styles = stylex.create({
  readTheDocs: {
    color: '#888',
  },
})

function App() {
  return (
    <>
      <div>
        <ViteLogo />
        <ReactLogo />
      </div>

      <MainHeading>Vite + React + Zustand</MainHeading>

      <Board />

      <p {...stylex.props(styles.readTheDocs)}>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
