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


export const GET_WORK_PROJECTS = gql`
    query GetProjects {
        projects {
        id
        title
        technologies
        description
        screenshots {
          id
          url
          width
        }
      }
    }
`;