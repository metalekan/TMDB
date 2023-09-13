import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'
import Page404 from './components/Page404'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Page404/>} />
      <Route path="/:id" element={<Details/>} />
    </Routes>
  )
}

export default App;