import { gql } from "@apollo/client";


export const GET_PROJECTS = gql`
{
    viewer {
      login
      pinnedItems(first: 10) {
        edges {
          node {
            ... on Repository {
              id
                      name
                      url
                      description
                      stargazers {
                        totalCount
                      }
                      forkCount
                      openGraphImageUrl
                      languages(first: 3) {
                        nodes {
                          id
                          name
                        }
                      }
            }
          }
        }
      }
    }
  }
`