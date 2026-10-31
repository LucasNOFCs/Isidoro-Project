import { useState } from 'react'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Catequista from './pages/Catequista/Catequista'

function App() {

  return (
    <>
      <Header />
      <div className='flex'>
        <Aside />
        <Catequista />
      </div>
    </>
  )
}

export default App
