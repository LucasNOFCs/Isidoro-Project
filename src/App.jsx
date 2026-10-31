import { useState } from 'react'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Catequista from './pages/Catequista/Catequista'
import Turmas from './pages/Turmas/Turmas'
import Formando from './pages/Formando/Formando'
import Planejamento from './pages/Planejamento/Planejamento'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className='flex'>
        <Aside />
        <Routes>
          <Route element={<Catequista/>} path='/' />
          <Route element={<Catequista/>} path='/catequista' />
          <Route element={<Turmas/>} path='/turmas' />
          <Route element={<Formando/>} path='/formandos' />
          <Route element={<Planejamento/>} path='/planejamento' />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
