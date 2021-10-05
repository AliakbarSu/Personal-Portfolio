import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'providers/ThemeProvider'
import ToggleTheme from 'components/theme/Header/ToggleTheme'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  // const isHome = window.location.pathname === '/'

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <a href="/about">About</a>
      {/* {isHome && <AnchorLink href="#posts">Posts</AnchorLink>} */}
      {/* {!isHome && <a href="/#posts">Posts</a>} */}
      <a href="/#posts">Posts</a>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
