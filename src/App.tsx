import * as stylex from '@stylexjs/stylex'

import { Button } from './components/Button'
import { Card } from './components/Card'
import { MainHeading } from './components/Heading'
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

      <MainHeading>Vite + React + Zustand</MainHeading>

      <Card>
        <Button onClick={incrementCount}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>

      <p {...stylex.props(styles.readTheDocs)}>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
