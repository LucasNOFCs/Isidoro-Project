import { ChartBarIcon, UserIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { BookmarkSquareIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router'

const Aside = () => {

    const urlsStyle = [
        'flex items-center gap-2 p-3 text-zinc-700 w-full font-semibold cursor-pointer hover:text-zinc-900',
        'flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer',
    ]


    return (
        <div className='h-screen min-w-70 bg-claro border-r-2 border-suave'>
            <nav className='p-2 flex flex-col items-center justify-center gap-5 pt-8'>
                <NavLink to='/' className={({ isActive }) => isActive ? urlsStyle[1] : urlsStyle[0]}><ChartBarIcon className='w-6' /> Painel Geral</NavLink>
                <NavLink to='/planejamento' className={({ isActive }) => isActive ? urlsStyle[1] : urlsStyle[0]}><BookOpenIcon className='w-6' /> Planejamento</NavLink>
                <NavLink to='/formando' className={({ isActive }) => isActive ? urlsStyle[1] : urlsStyle[0]}><UserCircleIcon className='w-6' />Formando</NavLink>
                <NavLink to='/turmas' className={({ isActive }) => isActive ? urlsStyle[1] : urlsStyle[0]}><UserGroupIcon className='w-6' />Turmas</NavLink>
                <NavLink to='/igreja' className={({ isActive }) => isActive ? urlsStyle[1] : urlsStyle[0]}><BookmarkSquareIcon className='w-6' />Igreja</NavLink>
                <NavLink to='/catequista' className={({ isActive }) => isActive ? urlsStyle[1] : urlsStyle[0]}><UserIcon className='w-6' />Catequistas</NavLink>
            </nav>
        </div>
    )
}
export default Aside