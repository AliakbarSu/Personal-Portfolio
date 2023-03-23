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
  import { PostTitle, PostPublishedDate, PostContent } from './styles'
  import moment from 'moment'

export const dummyPosts = [{id: "post1", name: "post one", slug: "post-one", title: "first post", coverImage: {url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}, excerpt: "jfsjf", url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}]

export async function getStaticPaths() {
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
    const posts: Post[] = dummyPosts
  
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
      createdAt: string;
      slug: string;
      excerpt: string;
      content: { html: string };
      author: { name: string, picture: {url: string} }
  }

  export async function getStaticProps(context: GetStaticPropsContext) {
    console.log(context)
    return {
      props: {title: "New post",
        createdAt: "12/12/2022",
        slug: "new-post",
        excerpt: "hello there",
        content: { html: null },
        author: { name: "jfskjf", picture: "jklsjfasf" }}
    }
  }

  
  
  export default ({
   
      title,
      createdAt,
      slug,
      excerpt,
      // content: { html  },
      author: { name, picture }
    }: PostPropTypes
  ) => (
    <Layout>
      <SEO title={title} description={excerpt} location={'/' + slug} />
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
        {/* <PostContent dangerouslySetInnerHTML={{ __html: html }} /> */}
      </Container>
    </Layout>
  )
  