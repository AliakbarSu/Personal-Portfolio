import React from 'react'
import { Container, Layout, SEO } from '@components/common'
import { Intro } from '@components/landing'

export default () => (
  <Layout>
    <SEO
      title="About - Ali Sultani"
      description="This page contains a short description about ali sultani, how I am and what I do"
      location="/about"
    />
    <Intro />
    <Container>
      <p>Hello</p>
    </Container>
    {/* <Skills /> */}
    {/* <Contact /> */}
  </Layout>
)

// export const pageQuery = graphql`
//   query MyQuery {
//     graphcms {
//       author(where: { id: "ckqq0tvfsr6nx0b12mw5pj8en" }) {
//         biography
//       }
//     }
//   }
// `
