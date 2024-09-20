import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Login() {
    return(
        <section className="bg-white p-12 shadow-lg rounded-lg ">
           <div className="flex justify-center items-center mb-10">
                <FontAwesomeIcon icon={faUser} className="w-10 h-10 mr-3" /> 
                <h1 className="text-5xl">Login</h1>
           </div>
            <form action="">
                <div>
                    <label className="block" htmlFor="">Email</label>
                    <input className="rounded-lg" type="email" required/>
                </div>

                <div className="mt-8 mb-8">
                    <div>
                        <label className="block" htmlFor="">Senha</label>
                        <input className="rounded-lg" type="password" required/>
                    </div>
                    <div className="mt-2 flex justify-end">
                        <Link className="text-sm text-end  text-blue-800" href="">Esqueci a senha</Link>
                    </div>
                   
                </div>

                <input className="block w-full mt-10 bg-blue-600 p-3 rounded-lg text-white font-bold hover:bg-black hover:font-bold cursor-pointer" type="submit" value="Entrar"/>

                <div className="flex justify-center items-center mt-5">
                    <Link className="text-sm text-end  text-blue-800" href="/register">Criar uma conta</Link>
                </div>
               
            </form>
        </section>
    )    
}