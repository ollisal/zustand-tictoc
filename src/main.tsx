import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as stylex from '@stylexjs/stylex'

import './index.css'
import App from './App.tsx'

const styles = stylex.create({
  root: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  },
})

const rootElement = document.getElementById('root')!

const rootClass = stylex.props(styles.root).className ?? ''
rootElement.className = rootClass

const rootStyleProps = stylex.props(styles.root).style
if (rootStyleProps) {
  const rootStyleText = Object.keys(rootStyleProps)
    .map((key) => `${key}: ${rootStyleProps[key]}`)
    .join('; ')
  rootElement.style.cssText = rootStyleText
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
