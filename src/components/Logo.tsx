import reactLogoSvg from '../assets/react.svg'
import viteLogoSvg from '/vite.svg'

interface LogoProps {
  linkUrl: string
  imgSrc: string
  imgAlt: string
  imgClassName?: string
}

export const Logo = ({ linkUrl, imgSrc, imgAlt, imgClassName }: LogoProps) => {
  return (
    <a href={linkUrl} target="_blank">
      <img src={imgSrc} className={`logo ${imgClassName}`} alt={imgAlt} />
    </a>
  )
}

export const ReactLogo = () => {
  return (
    <Logo
      linkUrl="https://react.dev"
      imgSrc={reactLogoSvg}
      imgAlt="React logo"
      imgClassName="react"
    />
  )
}

export const ViteLogo = () => {
  return <Logo linkUrl="https://vite.dev" imgSrc={viteLogoSvg} imgAlt="Vite logo" />
}
