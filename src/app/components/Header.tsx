'use client';

import Link from 'next/link';
import { Navbar } from './Navbar';
import { SearchInput } from './SearchInput';

export const Header: React.FC = () => {
  const showSearch: boolean = false;

  return (
    <header className = 'flex justify-between items-center bg-white p-8 shadow-md'>
      <div>
        <Link
          className='font-sans text-2xl hover:bg-black hover:text-white sm:text-4xl'
          href='/ui/home'
        >
          COLLECTING
        </Link>
        {showSearch ? <SearchInput /> : ''}
      </div>
      <Navbar></Navbar>
    </header>
  );
};

/*
className={`${showSearch ? 'justify-around' : 'justify-between'} flex items-center bg-white p-8 shadow-md`}*/