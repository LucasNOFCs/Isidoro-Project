import { ChartBarIcon, UserIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

const Aside = () => {
    return (
        <div className='h-screen min-w-70 bg-claro border-r-2 border-suave'>
            <nav className='p-2 flex flex-col items-center justify-center gap-5 pt-8'>
                <Link to='/' className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><ChartBarIcon className='w-6' /> Painel Geral</Link>
                <Link to='/planejamento' className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><BookOpenIcon className='w-6' /> Planejamento</Link>
                <Link to='/formando' className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><UserCircleIcon className='w-6' />Formando</Link>
                <Link to='/turmas' className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><UserGroupIcon className='w-6' />Turmas</Link>
                <Link to='/catequista' className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><UserIcon className='w-6' />Catequistas</Link>
            </nav>
        </div>
    )
}

export default Aside