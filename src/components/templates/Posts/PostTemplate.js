import React from 'react'
import { Layout, SEO, Container } from 'components/common'
import { Header } from 'components/theme'
import {
  AuthorContainer,
  AuthorAvatar,
  AuthorName
} from 'components/common/author'
import { PostTitle, PostPublishedDate, PostContent } from './styles'
import moment from 'moment'

export default ({
  pageContext: {
    title,
    createdAt,
    content: { html },
    author: { name, picture }
  }
}) => (
  <Layout>
    <SEO />
    <Header />
    <Container>
      <PostTitle>{title}</PostTitle>
      <AuthorContainer>
        <AuthorAvatar src={picture.url} alt="Ali's profile photo" />
        <AuthorName>{name},</AuthorName>
        <PostPublishedDate>
          {moment(createdAt).format('LLLL')}
        </PostPublishedDate>
      </AuthorContainer>
      <PostContent dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  </Layout>
)
