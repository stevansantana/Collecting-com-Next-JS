'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';
import { closeModal } from '../modal-slice';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modalReducer.isOpen);
  const router = useRouter(); 

  const handleClose = () => {
    dispatch(closeModal());
    router.push('/ui/login');
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className='fixed inset-0 z-50 flex items-center justify-center'
    >
      <div
        className='fixed inset-0 bg-black bg-opacity-50'
        aria-hidden='true'
      />

      <DialogPanel className='relative z-10 w-full max-w-lg bg-white p-6 shadow-lg'>
        <header className='flex items-center justify-between'>
          <DialogTitle className='text-2xl font-semibold text-gray-800'>
            Cadastro
          </DialogTitle>
          <FontAwesomeIcon
            icon={faSquareXmark}
            className='h-7 w-7 cursor-pointer'
            onClick={handleClose}
          />
        </header>

        <Description className='mb-10 mt-10 flex items-center justify-center text-xl'>
          <FontAwesomeIcon
            className='mr-5 rounded-full bg-green-600 p-4'
            icon={faCheck}
          />
          <p>Usuário cadastrado com sucesso.</p>
        </Description>

        <footer>
          <div className='flex justify-end'>
            <Link
              href='/ui/login'
              className='cursor-pointer rounded-lg bg-blue-600 p-3 font-bold text-white hover:bg-black hover:font-bold'
              onClick={handleClose}
            >
              Fechar
            </Link>
          </div>
        </footer>
      </DialogPanel>
    </Dialog>
  );
}
