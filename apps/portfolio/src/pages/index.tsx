import {  SEO } from '@/components/common'
import {Layout } from "ui/common"
import { Intro } from '@/components/landing/Intro'
import { Skills } from '@/components/landing/Skills'
import { Contact } from '@/components/landing/Contact'
import {Projects as ProjectsComponent } from "@components/landing/Projects"
import { GetStaticPropsContext } from 'next'
import {Project, WorkProject} from '@/types/projects'
import {client, gitHubClient} from './_app'
import {GET_PROJECTS, GET_WORK_PROJECTS} from '@/queries/projects'
import {WorkProjects} from "@components/landing/WorkProjects";


type ProjectsQueryType = {
  login: string;
  pinnedItems: {
      edges: {
          node: Project
      }[]
  }
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const { data: projects } = await client.query<{projects: WorkProject[]}>({query: GET_WORK_PROJECTS});
  const work_projects = projects.projects || []

  const {  data } = await gitHubClient.query<{viewer: ProjectsQueryType}>({query: GET_PROJECTS})
  const {pinnedItems: {edges}} = data.viewer || {}
  return {
    props: {
      github_projects: edges.map(({node}) => node),
        work_projects,
    }
  }
}

export type HomeProps = {
  github_projects: Project[]
  work_projects: WorkProject[]
}

export default function Home({github_projects, work_projects}: HomeProps) {
  return (
    <Layout>
    <SEO />
    <Intro />
      <WorkProjects projects={work_projects}/>
    <ProjectsComponent projects={github_projects} />
    <Skills />
    <Contact />
  </Layout>
  )
}
