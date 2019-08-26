import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// Apollo Client, now with React Hooks https://blog.apollographql.com/apollo-client-now-with-react-hooks-676d116eeae2
export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)
