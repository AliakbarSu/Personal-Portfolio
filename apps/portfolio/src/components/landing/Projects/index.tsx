import React, { useContext } from 'react'
import { ThemeContext } from 'ui/providers/ThemeProvider'
import { Container, Card, TitleWrap } from 'ui/common'
import Star from '@components/common/Icons/Star'
import Fork from '@components/common/Icons/Fork'
import {
  Wrapper,
  Grid,
  Item,
  Content,
  Stats,
  Languages,
  SocialPreview,
  SocialPreviewWrapper
} from './styles'
import { Project } from '@/types/projects'

export const Projects = ({ projects }: { projects: Project[] }) => {
  const { theme } = useContext(ThemeContext)



  return (
    <Wrapper as={Container} id="projects">
      <h2>Personal Projects</h2>
      <Grid>
        {projects.map(node => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <SocialPreviewWrapper>
                <SocialPreview src={node.openGraphImageUrl} />
              </SocialPreviewWrapper>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <TitleWrap>
                <Stats theme={theme}>
                  <div>
                    <Star color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats>
                <Stats theme={theme}>
                  <Languages>
                    {node.languages.nodes.map(({ id, name }) => (
                      <span key={id}>{name}</span>
                    ))}
                  </Languages>
                </Stats>
              </TitleWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
