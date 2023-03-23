import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from '@providers/ThemeProvider'
import { Header } from '@components/theme'
import { Container, Button } from '@components/common'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Ali and this is my personal blog!</h4>
        </Details>
        {/* <Thumbnail>
          <img src="/assets/illustrations/dev-background.png" alt="photo of ali" />
        </Thumbnail> */}
      </IntroWrapper>
    </Wrapper>
  )
}