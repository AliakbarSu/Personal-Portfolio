import React from 'react'
import { Container, Layout, SEO } from 'components/common'
import { Intro } from 'components/landing'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Container>
      <p>Hi there!</p>
    </Container>
    {/* <Skills /> */}
    {/* <Contact /> */}
  </Layout>
)
