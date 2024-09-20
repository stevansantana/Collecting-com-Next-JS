'use client'
import Link from "next/link"
import { silkscreen } from "@/app/fonts/Silkscreen"
import { usePathname } from "next/navigation"

export const Navbar:React.FC = () => {
    const pathname = usePathname()

    return (
        <nav>
            <ul className="flex items-center">
                <li>
                    <Link className={`${silkscreen.variable} font-sans text-4xl hover:text-white hover:bg-black`} href="/">COLLECTING</Link>
                </li>
                <li className="ml-auto">
                    <Link className={`link ${pathname === '/login' ? ('font-bold') : ''} mr-5`} href="/login">Login</Link>
                </li>
                <li>
                    <Link className={`link ${pathname === '/register' ? ('font-bold') : ''}`} href="/register">Cadastrar</Link>
                </li>
            </ul>
        </nav>
    )
}