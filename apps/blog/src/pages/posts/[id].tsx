import { Post } from "@/types/posts"
import { GetStaticPaths, GetStaticPropsContext } from "next"
import React from 'react'
  import {  SEO, Container } from '@/components/common'
  import { Layout } from 'ui/common/index'
  import { Header } from 'ui/theme/Header'
  import {
    AuthorContainer,
    AuthorAvatar,
    AuthorName
  } from '@/components/common/author'
  import { PostTitle, PostPublishedDate, PostContent } from '../../styles/posts'
import { GET_POST_SLUGS, GET_SINGLE_POST } from "../../queries/posts"
import { client } from "../_app"
import Head from "next/head"

export const dummyPosts = [{id: "post1", name: "post one", slug: "post-one", title: "first post", coverImage: {url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}, excerpt: "jfsjf", url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}]

export async function getStaticPaths() {
  
  const { loading, error, data } = await client.query<{posts: Post[]}>({query: GET_POST_SLUGS});
  if(data.posts) {
    const posts: Post[] = data?.posts || []
    const paths: GetStaticPaths = posts.map((post: Post) => ({
      params: { id: post.slug }
    }))
    return { paths, fallback: false }
  }
   
    
  }


  type PostPropTypes = {
    title: string;
    publishedAt: string;
    createdAt: string;
    coverImage: {url: string};
    slug: string;
    excerpt: string;
    content: { html: string };
    author: { name: string, picture: {url: string} }
  }

  export async function getStaticProps(context: GetStaticPropsContext<{id: string}>) {
    const { loading, error, data } = await client.query<{post: Post}>({query: GET_SINGLE_POST, variables: {slug: context?.params?.id}});
    if(data.post) {
      const {slug, excerpt, content, author, publishedAt, createdAt, coverImage } = data.post || {}
      return {
        props: {
          coverImage,
          publishedAt,
          slug,
          excerpt,
          content,
          author,
          createdAt
        }
      }
    } 
    
  }

  
  
  export default ({
      title,
      createdAt,
      slug,
      excerpt,
      content: { html  },
      author: { name, picture },
      coverImage
    }: PostPropTypes
  ) => {
    const date = new Date(createdAt)
    const formattedDate = new Intl.DateTimeFormat('en-CA', { dateStyle: 'full'}).format(date)
    return <Layout>
      <SEO title={title} description={excerpt} location={'/' + slug} image={coverImage.url} />
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