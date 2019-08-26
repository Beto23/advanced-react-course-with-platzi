import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotosCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotosCards categoryId={2} />
  </div>
)
