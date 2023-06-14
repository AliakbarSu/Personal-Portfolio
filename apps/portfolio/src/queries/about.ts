
import { gql } from '@apollo/client';
export const GET_AUTHOR = gql`
    query GetAuthor($id: ID) {
        author(where: {id: $id}) {
            name
            biography
          }
    }
`;