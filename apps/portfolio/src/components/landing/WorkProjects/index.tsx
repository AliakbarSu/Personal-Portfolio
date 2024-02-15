import React, { useContext } from 'react'
import { ThemeContext } from 'ui/providers/ThemeProvider'
import { Container, Card, TitleWrap } from 'ui/common'
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
import { WorkProject} from '@/types/projects'

export const WorkProjects = ({ projects }: { projects: WorkProject[] }) => {
    const { theme } = useContext(ThemeContext)



    return (
        <Wrapper as={Container} id="projects">
            <h2>Work Projects</h2>
            <Grid>
                {projects.map(node => (
                    <Item
                        key={node.id}
                        as="div"
                        rel="noopener noreferrer"
                        theme={theme}
                    >
                        <Card theme={theme}>
                            <SocialPreviewWrapper>
                                <SocialPreview src={node.screenshots ? node.screenshots[0].url : ''} />
                            </SocialPreviewWrapper>
                            <Content>
                                <h4>{node.title}</h4>
                                <p>{node.description}</p>
                            </Content>
                            <TitleWrap>
                                <Stats theme={theme}>
                                </Stats>
                                <Stats theme={theme}>
                                    <Languages style={{"flex-wrap": "wrap"}}>
                                        {node.technologies.split(",").map((name) => (
                                            <span key={name}>{name.trim()}</span>
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
