import { Post } from "@/types/posts"
import { GetStaticPaths, GetStaticPropsContext } from "next"
import React from 'react'
  import { Layout, SEO, Container } from '@components/common'
  import { Header } from '@components/theme'
  import {
    AuthorContainer,
    AuthorAvatar,
    AuthorName
  } from '@components/common/author'
  import { PostTitle, PostPublishedDate, PostContent } from '../../styles/posts'
import { GET_POST_SLUGS, GET_SINGLE_POST } from "../../queries/posts"
import { client } from "../_app"

export const dummyPosts = [{id: "post1", name: "post one", slug: "post-one", title: "first post", coverImage: {url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}, excerpt: "jfsjf", url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}]

export async function getStaticPaths() {
  
  const { loading, error, data } = await client.query<{posts: Post[]}>({query: GET_POST_SLUGS});
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    //   return {
    //     paths: [],
    //     fallback: 'blocking',
    //   }
    // }
  
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    const posts: Post[] = data?.posts || []
  
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths: GetStaticPaths = posts.map((post: Post) => ({
      params: { id: post.slug }
    }))
  
    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
  }


  type PostPropTypes = {
    title: string;
    publishedAt: string;
    createdAt: string;
      slug: string;
      excerpt: string;
      content: { html: string };
      author: { name: string, picture: {url: string} }
  }

  export async function getStaticProps(context: GetStaticPropsContext<{id: string}>) {
    const { loading, error, data } = await client.query<{post: Post}>({query: GET_SINGLE_POST, variables: {slug: context?.params?.id}});
    const {slug, excerpt, content, author, publishedAt, createdAt } = data.post || {}
    return {
      props: {
        publishedAt,
        slug,
         excerpt,
        content,
        author,
        createdAt
      }
    }
  }

  
  
  export default ({
      title,
      createdAt,
      slug,
      excerpt,
      content: { html  },
      author: { name, picture }
    }: PostPropTypes
  ) => {
    const date = new Date(createdAt)
    const formattedDate = new Intl.DateTimeFormat('en-CA', { dateStyle: 'full'}).format(date)
    return <Layout>
      <SEO title={title} description={excerpt} location={'/' + slug} />
      <Header />
      <Container>
        <PostTitle>{title}</PostTitle>
        <AuthorContainer>
          <AuthorAvatar src={picture.url} alt="Ali's profile photo" />
          <AuthorName>{name},</AuthorName>
          <PostPublishedDate>
            {formattedDate}
          </PostPublishedDate>
        </AuthorContainer>
        <PostContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  }