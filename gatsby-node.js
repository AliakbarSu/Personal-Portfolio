const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(
      './src/components/templates/Posts/PostTemplate.js'
    )

    resolve(
      graphql(
        `
          query MyQuery {
            graphcms {
              posts {
                id
                coverImage {
                  url
                }
                seo {
                  keywords
                  id
                  description
                  createdAt
                  publishedAt
                  title
                  stage
                }
                slug
                stage
                tags
                title
                updatedAt
                createdAt
                content {
                  html
                }
                author {
                  id
                  name
                  picture {
                    url
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create posts
        const posts = result.data.graphcms.posts
        posts.forEach((post, index) => {
          const slug = post.slug
          const next = index === 0 ? undefined : posts[index - 1].slug
          const prev =
            index === posts.length - 1 ? undefined : posts[index + 1].slug

          createPage({
            path: `posts/${slug}`,
            component: postTemplate,
            context: {
              ...post
            }
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}
