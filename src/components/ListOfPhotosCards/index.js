import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

// Apollo Client, now with React Hooks https://blog.apollographql.com/apollo-client-now-with-react-hooks-676d116eeae2

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

/*
  { data: { photos = [] } } = {}
  extrae photos de data
*/
const ListOfPhotosCardsComponent = ({ data: { photos = [] } } = {}) => {
  console.log(photos)
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}

export const ListOfPhotosCards = withPhotos(ListOfPhotosCardsComponent)
