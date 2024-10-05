'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const user: boolean = false;

  return (
    <nav>
      <ul className='flex'>
        {user ? (
          <>
            <li className='ml-auto'>
              <Link
                className={`link ${pathname === '/ui/carrinho' ? 'font-bold' : ''} mr-10`}
                href='/ui/carrinho'
              >
                Carrinho
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/ui/meus-pedidos' ? 'font-bold' : ''} mr-10`}
                href='/ui/meusPedidos'
              >
                Meus pedidos
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/ui/userName' ? 'font-bold' : ''} mr-10`}
                href='/'
              >
                Stevan
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/logout' ? 'font-bold' : ''}`}
                href='/'
              >
                Sair
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className='ml-auto'>
              <Link
                className={`link ${pathname === '/ui/login' ? 'font-bold' : ''} mr-10`}
                href='/ui/login'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/ui/register' ? 'font-bold' : ''}`}
                href='/ui/register'
              >
                Cadastrar
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
