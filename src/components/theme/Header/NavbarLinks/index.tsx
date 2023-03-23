import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from '@providers/ThemeProvider'
import ToggleTheme from '@/components/theme/Header/ToggleTheme'
import { Wrapper } from './styles'
import Link from 'next/link'

const NavbarLinks = ({ desktop }: {desktop: boolean}) => {
  const { theme } = useContext(ThemeContext)

  // const isHome = window.location.pathname === '/'

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link href="/about">About</Link>
      {/* {isHome && <AnchorLink href="#posts">Posts</AnchorLink>} */}
      {/* {!isHome && <a href="/#posts">Posts</a>} */}
      <Link href="/#posts">Posts</Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
