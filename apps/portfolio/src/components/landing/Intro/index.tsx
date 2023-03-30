import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'ui/providers/ThemeProvider'
import { Header } from '@components/Header'
import { Container, Button } from '@/components/common'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>Hi, I'm Ali - a full stack developer with expertise in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more. Let's build your next web project together. Check out my portfolio and let's chat!</h4>
        </Details>
        {/* <Thumbnail>
          <img src="/assets/illustrations/dev-background.png" alt="photo of ali" />
        </Thumbnail> */}
      </IntroWrapper>
    </Wrapper>
  )
}
