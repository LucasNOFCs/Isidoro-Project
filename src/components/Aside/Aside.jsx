import { ChartBarIcon, UserIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'

const Aside = () => {
    return (
        <div className='h-screen min-w-70 bg-claro border-r-2 border-suave'>
            <nav className='p-2 flex flex-col items-center justify-center gap-5 pt-8'>
                <ul className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><ChartBarIcon className='w-6' /> Painel Geral</ul>
                <ul className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><BookOpenIcon className='w-6' /> Planejamento</ul>
                <ul className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><UserGroupIcon className='w-6' />Turmas</ul>
                <ul className='flex items-center gap-2 bg-primary p-3 text-white w-full font-semibold rounded-xl cursor-pointer'><UserIcon className='w-6' />Catequistas</ul>
            </nav>
        </div>
    )
}

export default Aside