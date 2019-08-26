import React from 'react'
import { PhotoCard } from '../PhotoCard'

/*
  { data: { photos = [] } } = {}
  extrae photos de data
*/
export const ListOfPhotosCardsComponent = ({ data: { photos = [] } } = {}) => {
  console.log(photos)
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
