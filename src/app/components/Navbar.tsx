'use client';
import Image from 'next/image';
import menuHamburguer from '@/public/images/svg/bars-solid.svg';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import iconCloseMenu from '@/public/images/svg/icon-close-menu.svg';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const user: boolean = true;
  const [menu, setMenu] = useState<boolean>(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <div>
      <Image
        className='cursor-pointer lg:hidden'
        src={menuHamburguer}
        alt='menu-ham'
        width={25}
        height={25}
        onClick={handleMenu}
      />

      <nav className={`fixed top-0 right-0 w-[65%] h-full bg-[hsl(0,0%,98%)] z-[999] lg:w-auto lg:static lg:flex lg:items-center lg:justify-between lg:bg-transparent ${menu ? 'block' : 'hidden'} lg:block`}>
        
        <div className='p-5 flex justify-end lg:hidden'>
          <Image
            src={iconCloseMenu}
            alt='icon-close-menu'
            width={25}
            height={25}
            className='cursor-pointer hover:opacity-80'
            onClick={handleMenu}
          />
        </div>

        <ul className='h-[45%] flex flex-col lg:flex-row lg:space-x-8 lg:h-auto'>
          {user ? (
            <>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/cart' ? 'font-bold' : ''} w-full text-center p-4 hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent `}
                  href='/ui/cart'
                >
                  Carrinho
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/purchase' ? 'font-bold' : ''}  w-full text-center p-4 hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/purchase'
                >
                  Meus pedidos
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/user' ? 'font-bold' : ''}  w-full text-center p-4 hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/user'
                >
                  Stevan
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/logout' ? 'font-bold' : ''} w-full text-center p-4 hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/'
                >
                  Sair
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/login' ? 'font-bold' : ''} w-full text-center p-4 hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/login'
                >
                  Login
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/register' ? 'font-bold' : ''} w-full text-center p-4 hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/register'
                >
                  Cadastrar
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
