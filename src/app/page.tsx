import Link from 'next/link';

export default function Page() {
  return (
    <section className='mb-32 mt-32'>
      <h1 className='text-center text-6xl'>Bem vindo ao Collecting</h1>
      <p className='mt-10 pl-20 pr-20 text-center text-2xl leading-10'>
        O e-commerce feito especialmente para colecionadores apaixonados! Aqui
        você encontra peças exclusivas e raridades que vão completar sua coleção
        com estilo e autenticidade.
      </p>

      <div className='mt-24 flex justify-center'>
        <Link
          className='mr-16 w-36 rounded-lg bg-blue-600 p-5 text-center font-bold text-white hover:bg-black'
          href='/ui/home'
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
