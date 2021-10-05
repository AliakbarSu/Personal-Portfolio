import React from 'react'
import { Container, Layout, SEO } from 'components/common'
import { Intro } from 'components/landing'
import { graphql } from 'gatsby'

export default ({
  data: {
    graphcms: {
      author: { biography }
    }
  }
}) => (
  <Layout>
    <SEO />
    <Intro />
    <Container>
      <p>{biography}</p>
    </Container>
    {/* <Skills /> */}
    {/* <Contact /> */}
  </Layout>
)

export const pageQuery = graphql`
  query MyQuery {
    graphcms {
      author(where: { id: "ckqq0tvfsr6nx0b12mw5pj8en" }) {
        biography
      }
    }
  }
`
