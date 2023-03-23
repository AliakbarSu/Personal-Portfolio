import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      publishedAt,
      slug,
      title,
      excerpt,
      coverImage {
          url
      },
      id
    }
  }
`;