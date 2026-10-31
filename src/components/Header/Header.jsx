import React from 'react'

const Header = () => {
  return (
    <header className='flex bg-claro items-center p-2 justify-between border-b-2 border-suave '>
        <div className='flex flex-col'>
            <h1 className='text-2xl'>Isidoro</h1>
            <p className='text-[0.80rem]'>PASTORAL</p>
        </div>
        <div>
            <div>
                <p>Igreja Católica Apostólica Romana</p>
            </div>
        </div>
    </header>
  )
}

export default Header