import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './page/Home'


const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
    // <Routes>
    //   <Route path='/' element={<Home/>} />
    //   <Route path=':id' element={<Details/>} />
    // </Routes>
  )
}

export default App;