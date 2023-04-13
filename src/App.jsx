import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail/Detail'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Detail/>
        {/* <Routes> */}
          {/* <Route path='/' element={<Content/>}/> */}
          {/* <Route path='/:countryName' element={<Detail/>}/> */}
        {/* </Routes> */}
      </BrowserRouter>
        
      
      
    </>
  )
}

export default App
