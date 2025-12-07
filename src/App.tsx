import * as stylex from '@stylexjs/stylex'

import { Card } from './components/Card'
import { ViteLogo, ReactLogo } from './components/Logo'
import { useCounter } from './store/counter'

const styles = stylex.create({
  readTheDocs: {
    color: '#888',
  },
})

function App() {
  const { count, increment: incrementCount } = useCounter()

  return (
    <>
      <div>
        <ViteLogo />
        <ReactLogo />
      </div>

      <h1>Vite + React + Zustand</h1>

      <Card>
        <button onClick={incrementCount}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>

      <p {...stylex.props(styles.readTheDocs)}>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
