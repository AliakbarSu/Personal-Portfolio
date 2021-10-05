import React from 'react'
import { Layout, SEO, Container } from 'components/common'
import { Header } from 'components/theme'
import { PostTitle } from './styles'

export default ({
  pageContext: {
    title,
    content: { html }
  }
}) => (
  <Layout>
    <SEO />
    <Header />
    <Container>
      <PostTitle>{title}</PostTitle>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  </Layout>
)
