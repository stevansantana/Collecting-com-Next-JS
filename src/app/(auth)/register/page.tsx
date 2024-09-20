import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <section className="rounded-lg bg-white p-12 shadow-lg">
      <div className="mb-10 items-center justify-center flex">
        <FontAwesomeIcon icon={faUser} className="mr-3 h-10 w-10" />
        <h1 className="text-5xl">Cadastre-se</h1>
      </div>
      <form className="" action="">
        <div className="mb-5 flex">
          <div className="mr-10 flex flex-col">
            <label htmlFor="fName">Nome</label>
            <input className="rounded-lg" type="text" id="fName" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fCpf">CPF</label>
            <input className="rounded-lg" type="number" id="fCpf" required />
          </div>
        </div>

        <div className="mb-5 flex">
          <div className="mr-10 flex flex-col">
            <label htmlFor="fEmail">Email</label>
            <input className="rounded-lg" type="email" id="fEmail" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fTel">Celular</label>
            <input className="rounded-lg" type="tel" id="fTel" required />
          </div>
        </div>

        <div className="mb-5 flex">
          <div className="mr-10 flex flex-col">
            <label htmlFor="fPassword">Senha</label>
            <input
              className="rounded-lg"
              type="password"
              id="fPassword"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fConfPassword">Confirmar Senha</label>
            <input
              className="rounded-lg"
              type="password"
              id="fConfPassword"
              required
            />
          </div>
        </div>

        <input
          className="mt-10 block w-full cursor-pointer rounded-lg bg-blue-600 p-3 font-bold text-white hover:bg-black hover:font-bold"
          type="submit"
          value="Cadastrar"
        />
      </form>
    </section>
  );
}
