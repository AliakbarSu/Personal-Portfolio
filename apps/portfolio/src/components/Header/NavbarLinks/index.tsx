import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'ui/providers/ThemeProvider'
import ToggleTheme from '../ToggleTheme/index'
import { Wrapper } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavbarLinks = ({ desktop }: { desktop: boolean }) => {
  const { theme } = useContext(ThemeContext)
  const router = useRouter()

  const isHome = router.pathname === '/'

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link href="/about">About</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="https://blog.alisultani.com">Blog</Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
