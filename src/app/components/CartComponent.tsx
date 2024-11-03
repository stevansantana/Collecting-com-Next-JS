'use client';

import { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { removeProduct } from '@/lib/features/cart/cart-reducer';
import { Product } from '@/data/products';

export const CartComponet: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();

  function removeProductFromCart(product: Product) {
    if(confirm(`Tem certeza que deseja remover o produto ${product.title} do carrinho?`)) {
      dispatch(removeProduct(product));
      alert(`${product.title} foi removido do carrinho`);
    }
  }
  return (
    <div className='container mx-auto mt-16 p-4'>
      {cart.length > 0 ? (
        <>
          <h1 className='mb-10 text-center text-2xl font-bold lg:text-3xl'>
            Carrinho de Compras
          </h1>
          {cart.map((product) => (
            <div
              key={product.id}
              className='mb-4 flex flex-col items-center justify-between border-b-2 pb-4'
            >
              <div className='mb-5 flex w-full items-center justify-between'>
                <Image
                  className='mr-4 sm:w-16 md:w-20 lg:w-24'
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                />
                <div>
                  <h2 className='mb-3 text-xs sm:text-sm md:text-base lg:text-xl'>
                    {product.title.length > 20
                      ? product.title.substring(0, 20) + '...'
                      : product.title}
                  </h2>
                  <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
                    Quantidade:
                  </p>
                </div>
              </div>

              <div className='flex w-full basis-1/6 items-center justify-between'>
                <button
                  className='text-xs font-semibold text-red-500 hover:text-red-700 sm:text-sm md:text-base lg:text-lg'
                  onClick={() => removeProductFromCart(product)}
                >
                  Remover
                </button>

                <p className='mr-4 text-xs font-bold sm:text-sm md:text-base lg:text-lg'>
                  {product.price}
                </p>
              </div>
            </div>
          ))}

          <div className='mb-16 mt-4 text-right'>
            <p className='mb-4 text-2xl font-bold'>Total:</p>

            <div className='mt-10 flex flex-col lg:flex-row lg:justify-between'>
              <Link
                href='/ui/home'
                className='mb-5 rounded bg-gray-500 px-4 py-2 text-center font-semibold text-white hover:bg-gray-600 lg:mb-0'
              >
                Adicionar mais itens
              </Link>

              <Link
                href='/ui/payment'
                className='rounded bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600'
              >
                Prosseguir Compra
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <p className='mb-10 text-center text-2xl font-bold lg:text-3xl'>
            Seu carrinho está vazio
          </p>
          <Link
            href='/ui/home'
            className='rounded bg-gray-500 px-8 py-4 text-center text-xl font-semibold text-white hover:bg-gray-600 lg:mb-0'
          >
            Adicionar itens
          </Link>
        </div>
      )}
    </div>
  );
};
