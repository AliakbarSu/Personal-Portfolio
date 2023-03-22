import { Post } from "@/types/posts"
import { GetStaticPaths, GetStaticPropsContext } from "next"


export const dummyPosts = [{id: "post1", name: "post one", slug: "post-one", title: "first post", coverImage: {url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}, excerpt: "jfsjf", url: "https://blog.hootsuite.com/wp-content/uploads/2022/12/Facebook-Cover-Photos-13.png"}]

export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
      return {
        paths: [],
        fallback: 'blocking',
      }
    }
  
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    const posts: Post[] = dummyPosts
  
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths: GetStaticPaths = posts.map((post: Post) => ({
      params: { id: post.id }
    }))
  
    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
  }

  export async function getStaticProps(context: GetStaticPropsContext<Post>) {
    console.log(context)
    return {
      props: {name: context.params?.name}, // will be passed to the page component as props
    }
  }

export default (props: Post) => {
  return <h1>hello {props.name}</h1>
}