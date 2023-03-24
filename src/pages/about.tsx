import React from 'react'
import { Container, Layout, SEO } from '@components/common'
import { Intro } from '@components/landing'
import { Author } from '@/types/author'
import { client } from './_app'
import { GET_AUTHOR } from '@/queries/about'
import { GetStaticPropsContext } from 'next'
import { TextContent } from '@/styles/about'


const aliAuthorId = "ckqq0tvfsr6nx0b12mw5pj8en"


type AboutProps = {
  name: string;
  biography: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { loading, error, data } = await client.query<{author: Author}>({query: GET_AUTHOR, variables: {id: aliAuthorId}});
  const {name, biography} = data.author || {}
  return {
    props: {
      name,
      biography
    }
  }
}

export default ({name, biography}: AboutProps) => {
 
  // if(loading) return <div>Loading...</div>
  return (<Layout>
    <SEO
      title="About - Ali Sultani"
      description="This page contains a short description about ali sultani, how I am and what I do"
      location="/about"
    />
    <Intro />
    <Container>
      <TextContent dangerouslySetInnerHTML={{__html: biography}}/>
    </Container>
    {/* <Skills /> */}
    {/* <Contact /> */}
  </Layout>)
}