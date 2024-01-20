import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import * as bootstrap from 'bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import { ContextoAdmin } from './contexto/ContextoAdmin.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextoAdmin>
  <React.StrictMode >
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/admin' element={<Admin/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </ContextoAdmin>
)
