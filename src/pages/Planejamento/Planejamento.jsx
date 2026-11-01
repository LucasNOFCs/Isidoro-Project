import React from 'react'

const Planejamento = () => {
    return (
        <section className='w-full bg-fundo-principal'>
            <div className='p-5 m-5'>
                <h1 className='text-zinc-700 text-3xl'>Planejamento formação</h1>
                <p className='text-zinc-500 text-[18px]'>Preenchimento da formação na qual será apresentada.</p>

                <form>
                    <div className='mt-8 flex flex-col gap-2.25 w-155'>
                        <p>Nome da Formação *</p>
                        <input type="text" placeholder='Ex: Sobre a santa missa' required minLength={5} className='bg-white p-2 border border-zinc-800 rounded shadow' />
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-10 flex flex-col gap-2.25 w-75'>
                            <p>Data formação *</p>
                            <input type="date" required className='bg-white p-2 border border-zinc-800 rounded shadow' />
                        </div>
                        <div className='mt-10 flex flex-col gap-2.25 w-75'>
                            <p>Turma da formação *</p>
                            <input type="text" placeholder='Ex: Turma Crisma A' required className='bg-white p-2 border border-zinc-800 rounded shadow' />
                        </div>
                    </div>
                    <div className='mt-8 flex flex-col gap-2.25 w-155'>
                        <p>Qual igreja / Paróquia Pertence *</p>
                        <input type="text" placeholder='Paróquia Mãe Santíssima' required minLength={10} className='bg-white p-2 border border-zinc-800 rounded shadow' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Planejamento