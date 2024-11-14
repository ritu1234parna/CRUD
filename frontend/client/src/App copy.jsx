import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './components/LoginPage'
import CreateUser from './components/CreateUser'
import UpdatePage from './components/UpdateUser'  
import User from './components/User'
import NoPage from './components/NoPage'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update' element={<UpdatePage/>}></Route>
        <Route path='/show' element={<LoginPage/>}></Route>
        <Route path='/*'  element={<NoPage/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
