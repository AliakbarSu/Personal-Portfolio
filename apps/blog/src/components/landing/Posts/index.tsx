import React, { useContext } from 'react'
import { ThemeContext } from 'ui/providers/ThemeProvider'
import { Container, Card, TitleWrap } from 'ui/common'
import Star from '@/components/common/Icons/Star'
import Fork from '@/components/common/Icons/Fork'

import {
  Wrapper,
  Grid,
  Item,
  Content,
  Stats,
  Languages,
  CoverImage,
  Cropped
} from './styles'
import { Post } from '@/types/posts'
import { dummyPosts } from '@/pages/posts/[id]'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_POSTS } from './queries'

// export const Projects = () => <Wrapper>Test</Wrapper>;
export const Posts = () => {
  const { loading, error, data } = useQuery<{posts: Post[]}>(GET_POSTS);
  const router = useRouter()
  const { theme } = useContext(ThemeContext)
  function openPost(url: string) {
    router.push(url)
  }
  const posts: Post[] = data?.posts || []
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
              <Cropped>
              <CoverImage src={post.coverImage?.url}></CoverImage>
              </Cropped>
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
