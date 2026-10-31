import React from 'react'

const Turmas = () => {
    return (
        <section className='w-full bg-fundo-principal'>
            <div className='p-5 m-5'>
                <h1 className='text-zinc-700 text-3xl'>Cadastro Turma</h1>
                <p className='text-zinc-500 text-[18px]'>Cadastre os dados da turma abaixo.</p>

                <form>
                    <div className='mt-8 flex flex-col gap-2.25 w-150'>
                        <p>Tipo de Turma *</p>
                        <input type="text" placeholder='Ex: Turma Batismo' required minLength={5} className='bg-white p-2 border border-zinc-800 rounded shadow' />
                    </div>
                    <div className='mt-8 flex flex-col gap-2.25 w-150'>
                        <p>Formando Responsável *</p>
                        <input type="text" placeholder='Ex: João Pedro' required className='bg-white p-2 border border-zinc-800 rounded shadow' />
                    </div>
                    <div className='mt-8 flex flex-col gap-2.25 w-150'>
                        <p>Qual igreja / Paróquia Pertence *</p>
                        <input type="text" placeholder='Paróquia Mãe Santíssima' required minLength={10} className='bg-white p-2 border border-zinc-800 rounded shadow' />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Turmas