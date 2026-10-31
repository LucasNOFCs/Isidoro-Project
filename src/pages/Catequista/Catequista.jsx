import React from 'react'

const Catequista = () => {
  return (
    <section className='w-full bg-fundo-principal'>
      <div className='p-5 m-5'>
        <h1 className='text-zinc-700 text-3xl'>Cadastro catequista</h1>
        <p className='text-zinc-500 text-[18px]'>Cadastre o formador com as informações abaixo.</p>

        <form>
          <div className='mt-8 flex flex-col gap-2.25 w-155'>
            <p>Nome Completo do Catequista *</p>
            <input type="text" placeholder='Ex: João Gomes' required minLength={5} className='bg-white p-2 border border-zinc-800 rounded shadow' />
          </div>
          <div className='flex gap-5'>
            <div className='mt-10 flex flex-col gap-2.25 w-75'>
              <p>Telefone / WhatsApp Principal *</p>
              <input type="text" placeholder='(85) 99999-9999' required className='bg-white p-2 border border-zinc-800 rounded shadow' />
            </div>
            <div className='mt-10 flex flex-col gap-2.25 w-75'>
              <p>E-mail para comunicação interna</p>
              <input type="text" placeholder='m.joao@gmail.com' className='bg-white p-2 border border-zinc-800 rounded shadow' />
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

export default Catequista