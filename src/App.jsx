import { useState } from 'react'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Catequista from './pages/Catequista/Catequista'
import Turmas from './pages/Turmas/Turmas'

function App() {

  return (
    <>
      <Header />
      <div className='flex'>
        <Aside />
        <Turmas />
      </div>
    </>
  )
}

export default App
