'use client';

import Link from 'next/link';
import { Navbar } from './Navbar';
import { SearchInput } from './SearchInput';

export const Header: React.FC = () => {
  const showSearch: boolean = false;

  return (
    <header
      className={`${showSearch ? 'justify-around' : 'justify-between'} flex items-center bg-white p-8 shadow-md`}
    >
      <Link
        className='font-sans text-4xl hover:bg-black hover:text-white'
        href='/'
      >
        COLLECTING
      </Link>
      {showSearch ? <SearchInput /> : ''}
      <Navbar></Navbar>
    </header>
  );
};
