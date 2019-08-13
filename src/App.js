import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotosCards } from './components/ListOfPhotosCards'
import { Logo } from './components/Logo'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotosCards />
  </div>
)
