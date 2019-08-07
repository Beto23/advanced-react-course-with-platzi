import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotosCards } from './components/ListOfPhotosCards'

import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotosCards />
  </div>
)
