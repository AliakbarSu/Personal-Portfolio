import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout, SEO } from '@/components/common'
import { Posts } from '@/components/landing/Posts'
import { Intro } from '@/components/landing/Intro'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
    <SEO />
    <Intro />
    <Posts />
    {/* <Skills /> */}
    {/* <Contact /> */}
  </Layout>
  )
}
