import * as stylex from '@stylexjs/stylex'

import reactLogoSvg from '../assets/react.svg'
import viteLogoSvg from '/vite.svg'

const reactSpin = stylex.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

const styles = stylex.create({
  base: {
    padding: '1.5rem',
    height: '6rem',

    willChange: 'filter',
    transition: 'filter 300ms ease-in-out',
  },
})

const hoverColorVariants = stylex.create({
  default: {
    filter: {
      default: null,
      ':hover': 'drop-shadow(0 0 2rem #646cffaa)',
    },
  },
  react: {
    filter: {
      default: null,
      ':hover': 'drop-shadow(0 0 2em #61dafbaa)',
    },
  },
})

const animationVariants = stylex.create({
  default: {},
  react: {
    animationName: {
      '@media (prefers-reduced-motion: no-preference)': reactSpin,
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
})

type LogoVariant = 'default' | 'react'

interface LogoProps {
  linkUrl: string
  imgSrc: string
  imgAlt: string
  variant?: LogoVariant
}

export const Logo = ({ linkUrl, imgSrc, imgAlt, variant = 'default' }: LogoProps) => {
  return (
    <a href={linkUrl} target="_blank">
      <img
        src={imgSrc}
        alt={imgAlt}
        {...stylex.props(styles.base, hoverColorVariants[variant], animationVariants[variant])}
      />
    </a>
  )
}

export const ViteLogo = () => {
  return <Logo linkUrl="https://vite.dev" imgSrc={viteLogoSvg} imgAlt="Vite logo" />
}

export const ReactLogo = () => {
  return (
    <Logo linkUrl="https://react.dev" imgSrc={reactLogoSvg} imgAlt="React logo" variant="react" />
  )
}
