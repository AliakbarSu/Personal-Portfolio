import React, { useContext } from 'react'
import { ThemeContext } from '@providers/ThemeProvider'
import { Container, Card, TitleWrap } from '@components/common'
import Star from '@/components/common/Icons/Star'
import Fork from '@/components/common/Icons/Fork'

import {
  Wrapper,
  Grid,
  Item,
  Content,
  Stats,
  Languages,
  CoverImage
} from './styles'
import { Post } from '@/types/posts'
import { dummyPosts } from '@/pages/posts/[id]'
import { useRouter } from 'next/router'

// export const Projects = () => <Wrapper>Test</Wrapper>;
export const Posts = () => {
  const router = useRouter()
  const { theme } = useContext(ThemeContext)
  function openPost(url: string) {
    router.push(url)
  }
  // const {
  //   graphcms: { posts }
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       graphcms {
  //         posts {
  //           id
  //           slug
  //           title
  //           excerpt
  //           coverImage {
  //             url
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  const posts: Post[] = dummyPosts
  return (
    <Wrapper as={Container} id="posts">
      <h2>Posts</h2>
      <Grid>
        {posts.map((post) => (
          <Item
            key={post.id}
            as="a"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card onClick={() => openPost('/posts/' + post.slug)} theme={theme}>
              <CoverImage src={post.coverImage?.url}></CoverImage>
              <Content>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
              </Content>
              <TitleWrap>
                {/* <Stats theme={theme}>
                  <div>
                    <Star color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats> */}
                {/* <Stats theme={theme}>
                  <Languages>
                    {node.languages.nodes.map(({ id, name }) => (
                      <span key={id}>{name}</span>
                    ))}
                  </Languages>
                </Stats> */}
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
