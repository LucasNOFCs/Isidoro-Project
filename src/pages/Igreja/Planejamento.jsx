import React from 'react'

const Igreja = () => {
    return (
        <section className='w-full bg-fundo-principal'>
            <div className='p-5 m-5'>
                <h1 className='text-zinc-700 text-3xl'>Cadastrar Igreja</h1>
                <p className='text-zinc-500 text-[18px]'>Cadastre a igreja no qual haverá as formações.</p>

                <form>
                    <div className='mt-8 flex flex-col gap-2.25 w-155'>
                        <p>Nome da Igreja *</p>
                        <input type="text" placeholder='Ex: Sobre a santa missa' required minLength={5} className='bg-white p-2 border border-zinc-800 rounded shadow' />
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-10 flex flex-col gap-2.25 w-75'>
                            <p>Pároco Responsável *</p>
                            <input type="date" required className='bg-white p-2 border border-zinc-800 rounded shadow' />
                        </div>
                        <div className='mt-10 flex flex-col gap-2.25 w-75'>
                            <p>Telefone Secretaria *</p>
                            <input type="number" placeholder='Ex: Turma Crisma A' required className='bg-white p-2 border border-zinc-800 rounded shadow' />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Igreja