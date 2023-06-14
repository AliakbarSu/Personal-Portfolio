import {  SEO } from '@/components/common'
import {Layout } from "ui/common"
import { Intro } from '@/components/landing/Intro'
import { Skills } from '@/components/landing/Skills'
import { Contact } from '@/components/landing/Contact'
import {Projects as ProjectsComponent } from "@components/landing/Projects"
import { GetStaticPropsContext } from 'next'
import { Project } from '@/types/projects'
import { gitHubClient } from './_app'
import { GET_PROJECTS } from '@/queries/projects'


type ProjectsQueryType = {
  login: string;
  pinnedItems: {
      edges: {
          node: Project
      }[]
  }
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const { loading, error, data } = await gitHubClient.query<{viewer: ProjectsQueryType}>({query: GET_PROJECTS})
  const {pinnedItems: {edges}} = data.viewer || {}
  return {
    props: {
      projects: edges.map(({node}) => node)
    }
  }
}

export type HomeProps = {
  projects: Project[]
}

export default function Home({projects}: HomeProps) {
  return (
    <Layout>
    <SEO />
    <Intro />
    <ProjectsComponent projects={projects} />
    <Skills />
    <Contact />
  </Layout>
  )
}
