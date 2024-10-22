import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useContext } from 'react';
import { ModalProductContext } from './ModalProductContext';

export default function ModalRegister() {
  const { isOpen, setIsOpen } = useContext(ModalProductContext);

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg max-h-[80vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-semibold text-gray-800 mb-10">
            Cadastro de produto
          </DialogTitle>

          <form>
            <div className="flex flex-col mb-5">
              <label htmlFor="pName">Nome do produto</label>
              <input type="text" name="pName" id="pName" />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="pPrice">Preço</label>
              <input type="text" name="pPrice" id="pPrice" />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="pCategory">Categoria</label>
              <input type="text" name="pCategory" id="pCategory" />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="pDescription">Descriçao</label>
              <input type="text" name="pDescription" id="pDescription" />
            </div>

            <div className="flex flex-col mb-5">
              <label htmlFor="pImage">Imagem do Produto</label>
              <input type="file" id="pImage" name="pImage" accept="image/*" />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Cadastrar Produto
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
