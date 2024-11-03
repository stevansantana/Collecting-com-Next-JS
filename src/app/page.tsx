import Link from 'next/link';

export default function Page() {
  return (
    <section className='mb-14 mt-14'>
      <h1 className='text-center text-2xl sm:text-4xl md:text-5xl'>Bem vindo ao Collecting</h1>
      <p className='mt-10 pl-10 pr-10 text-center text-sm leading-10 sm:text-xl sm:leading-loose md:text-2xl lg:pl-40 lg:pr-40'>
        O e-commerce feito especialmente para colecionadores apaixonados! Aqui
        você encontra peças exclusivas e raridades que vão completar sua coleção
        com estilo e autenticidade.
      </p>

      <div className='mt-16 flex justify-center items-center flex-col md:flex-row'>
        <Link
          className='w-36 mb-6 rounded-lg bg-blue-600 p-5 text-center font-bold text-white hover:bg-black md:mb-0 md:mr-10'
          href='/ui/login'
        >
          Entrar
        </Link>
        <Link
          className='w-36 rounded-lg border border-solid border-black bg-transparent p-5 text-center font-bold text-black hover:bg-black hover:text-white'
          href='/ui/register'
        >
          Criar conta
        </Link>
      </div>
    </section>
  );
}
