'use client';

import { useState } from 'react';
import Modal from './Modal';

export default function User() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true); 
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <p className='text-center text-xl font-bold lg:text-4xl'>
        Você não tem produtos cadastrados :(
      </p>
      <div className='mb-5 mt-10 flex items-center justify-center'>
        <button
          onClick={handleOpenModal}
          className='rounded-lg bg-blue-500 p-5 text-center text-xl font-bold text-white hover:bg-blue-600 lg:p-8 lg:text-2xl'
        >
          Adicionar produto
        </button>
      </div>
      {isOpen && <Modal onClose={handleCloseModal} />}{' '}
    </div>
  );
}
