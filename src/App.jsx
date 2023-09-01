import React, { useContext, useState } from 'react'
import "./App.css"
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import "./style/dark.scss"
import { productInputs, userInputs } from './formSource'
import { DarkModeContext } from './components/context/darkModeContext'
const App = () => {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/users'>
          <Route index element={<List/>} />
        <Route path=':usersId' element={<Single/>}/>
        <Route path='new' element={<New inputs = {userInputs} title="Add New User"/>}/>
       </Route>
        <Route path='/products'>
          <Route index element={<List/>} />
        <Route path=':productId' element={<Single/>}/>
        <Route path='new' element={<New inputs={productInputs} title="Add New Product"/>}/>
       </Route>
        
      </Routes>
    </BrowserRouter>
     </div>
    </>
  )
}

export default App