import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { closeModal } from '../modal-slice';

export default function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modalReducer.isOpen);

  return (
    <Dialog
      open={isOpen}
      onClose={() => dispatch(closeModal())}
      className='fixed inset-0 z-50 flex items-center justify-center'
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
        <DialogPanel className='relative z-10 max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-lg'>
          <DialogTitle className='mb-10 text-2xl font-semibold text-gray-800'>
            Cadastro de produto
          </DialogTitle>

          <form>
            <div className='mb-5 flex flex-col'>
              <label htmlFor='pName'>Nome do produto</label>
              <input type='text' name='pName' id='pName' className='rounded' />
            </div>

            <div className='mb-5 flex flex-col'>
              <label htmlFor='pPrice'>Preço</label>
              <input
                type='text'
                name='pPrice'
                id='pPrice'
                className='rounded'
              />
            </div>

            <div className='mb-5 flex flex-col'>
              <label htmlFor='pCategory'>Categoria</label>
              <input
                type='text'
                name='pCategory'
                id='pCategory'
                className='rounded'
              />
            </div>

            <div className='mb-5 flex flex-col'>
              <label htmlFor='pDescription'>Descriçao</label>
              <input
                type='text'
                name='pDescription'
                id='pDescription'
                className='rounded'
              />
            </div>

            <div className='mb-5 flex flex-col'>
              <label htmlFor='pImage'>Imagem do Produto</label>
              <input
                type='file'
                id='pImage'
                name='pImage'
                accept='image/*'
                className='rounded'
              />
            </div>

            <button
              type='submit'
              className='rounded bg-blue-500 px-4 py-2 text-white'
            >
              Cadastrar Produto
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
