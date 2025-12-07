import * as stylex from '@stylexjs/stylex'

import reactLogoSvg from '../assets/react.svg'
import viteLogoSvg from '/vite.svg'

const reactSpin = stylex.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

const styles = stylex.create({
  logo: {
    padding: '1.5rem',
    height: '6rem',

    willChange: 'filter',
    transition: 'filter 300ms ease-in-out',
    filter: {
      default: null,
      ':hover': 'drop-shadow(0 0 2rem #646cffaa)',
    },
  },

  // TODO use StyleX variants?
  reactLogo: {
    animationName: reactSpin,
    animationDuration: '20s',
    animationTimingFunction: 'linear',

    filter: {
      default: null,
      ':hover': 'drop-shadow(0 0 2em #61dafbaa)',
    },
  },
})

interface LogoProps {
  linkUrl: string
  imgSrc: string
  imgAlt: string
  extraStyles?: stylex.StyleXStyles[]
}

export const Logo = ({ linkUrl, imgSrc, imgAlt, extraStyles = [] }: LogoProps) => {
  return (
    <a href={linkUrl} target="_blank">
      <img src={imgSrc} alt={imgAlt} {...stylex.props(styles.logo, ...extraStyles)} />
    </a>
  )
}

export const ReactLogo = () => {
  return (
    <Logo
      linkUrl="https://react.dev"
      imgSrc={reactLogoSvg}
      imgAlt="React logo"
      extraStyles={[styles.reactLogo]}
    />
  )
}

export const ViteLogo = () => {
  return <Logo linkUrl="https://vite.dev" imgSrc={viteLogoSvg} imgAlt="Vite logo" />
}
