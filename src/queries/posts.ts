import { gql } from '@apollo/client';

export const GET_POST_SLUGS = gql`
  query GetPostSlugs {
    posts {
        slug
    }
  }
`;

export const GET_SINGLE_POST = gql`
    query GetSinglePost($slug: String) {
        post(where: {slug: $slug}) {
            createdAt,
            title,
            slug,
            content {html},
            author {
                name, picture {  url(transformation: {image: {resize: {height: 50, width: 50}}})}
            },
            excerpt,
            coverImage {
                url
            },
            id
        }
  }
`;