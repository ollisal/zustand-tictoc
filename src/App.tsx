import './App.css'
import { ViteLogo, ReactLogo } from './components/Logo'
import { useCounter } from './store/counter'

function App() {
  const { count, increment: incrementCount } = useCounter()

  return (
    <>
      <div>
        <ViteLogo />
        <ReactLogo />
      </div>
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <button onClick={incrementCount}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
