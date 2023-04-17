import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Detail/Detail'
import ThemeContext from './components/Context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <style>
      {`body {
        background-color: ${theme === 'light' ? 'rgb(241, 245, 249)' : 'hsl(207, 26%, 17%)'};
      }`}
      </style>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Content/>}/>
            <Route path='/:countryName' element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>  
    </> 
  )
}

export default App
