import Link from "next/link"

export default function Page() {
  return(
    <section className="mt-32 mb-32">
      <h1 className="text-6xl text-center">Bem vindo ao Collecting</h1>
      <p className="text-2xl text-center leading-10 mt-10 pr-20 pl-20">O e-commerce feito especialmente para colecionadores apaixonados! Aqui você encontra peças exclusivas e raridades que vão completar sua coleção com estilo e autenticidade.</p>

      <div className="flex justify-center mt-24">
        <Link className="text-center w-36 mr-16 bg-blue-600 p-5 rounded-lg text-white font-bold hover:bg-black" href="/login">Entrar</Link>
        <Link className="border border-black border-solid text-center w-36 bg-transparent p-5 rounded-lg text-black font-bold hover:bg-black hover:text-white"  href="/register">Criar conta</Link>
      </div>
    </section>
  ) 
}