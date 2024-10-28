'use client';
import Image from 'next/image';
import menuHamburguer from '@/public/images/svg/bars-solid.svg';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import iconCloseMenu from '@/public/images/svg/icon-close-menu.svg';
import { RootState, AppDispatch } from '@/redux/store';
import { logOut } from '@/redux/features/auth/auth-slice';
import { useDispatch, useSelector } from 'react-redux';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState<boolean>(false);
  const email = useSelector(
    (state: RootState) => state.authReducer.value.userName,
  );
  const dispatch = useDispatch<AppDispatch>();
  const user: boolean = true;

  function handleMenu() {
    setMenu(!menu);
  }

  function handleLogOut() {
    dispatch(logOut());
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

      <nav
        className={`fixed right-0 top-0 z-[999] h-full w-[65%] bg-[hsl(0,0%,98%)] lg:static lg:flex lg:w-auto lg:items-center lg:justify-between lg:bg-transparent ${menu ? 'block' : 'hidden'} lg:block`}
      >
        <div className='flex justify-end p-5 lg:hidden'>
          <Image
            src={iconCloseMenu}
            alt='icon-close-menu'
            width={25}
            height={25}
            className='cursor-pointer hover:opacity-80'
            onClick={handleMenu}
          />
        </div>

        <ul className='flex h-[45%] flex-col lg:h-auto lg:flex-row lg:space-x-8'>
          {user ? (
            <>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/cart' ? 'font-bold' : ''} w-full p-4 text-center hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/cart'
                >
                  Carrinho
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/purchase' ? 'font-bold' : ''} w-full p-4 text-center hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/purchase'
                >
                  Meus pedidos
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/user' ? 'font-bold' : ''} w-full p-4 text-center hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/user'
                >
                  nome
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/logout' ? 'font-bold' : ''} w-full p-4 text-center hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/'
                  onClick={handleLogOut}
                >
                  Sair
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/login' ? 'font-bold' : ''} w-full p-4 text-center hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
                  href='/ui/login'
                >
                  Login
                </Link>
              </li>
              <li className='flex justify-center lg:justify-start'>
                <Link
                  className={`link ${pathname === '/ui/register' ? 'font-bold' : ''} w-full p-4 text-center hover:bg-slate-200 sm:text-base lg:p-0 lg:hover:bg-transparent`}
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
