'use client';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import Image from 'next/image';
import { addProduct, removeProduct } from '@/lib/features/cart/cart-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export const ProductInfo: React.FC = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const product = products.find((p) => p.id === Number(productId));
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  const isProductOnCart =
    cart.find((productOnCart) => product?.id === productOnCart.id) !== undefined;

  function removeProductFromCart() {
   if (
     confirm(
       `Tem certeza que deseja remover o produto ${product?.title} do carrinho?`,
     )
   ) {
     dispatch(removeProduct(product));
     alert(`${product?.title} foi removido do carrinho`);
   }
  }

  function addProductToCart() {
    dispatch(addProduct(product));
    alert(`${product?.title} foi adicionado ao carrinho`);
  }

  return (
    <div className='container mx-auto mb-12 mt-12 px-4'>
      {product ? (
        <>
          <div className='mx-auto flex max-w-4xl flex-col items-stretch justify-between md:flex-row'>
            <div className='mb-4 flex justify-center md:mb-0'>
              <Image
                src={product.image}
                alt={product.title}
                width={120}
                height={120}
              />
            </div>

            <div className='flex max-w-lg flex-col justify-between'>
              <h1 className='mb-4 break-words text-lg font-bold'>
                {product.title}
              </h1>
              <span className='mb-4 block text-lg font-bold'>
                {product.price} reais
              </span>

              {isProductOnCart ? (
                <button
                  type='button'
                  className='mt-auto w-full rounded-lg bg-red-600 p-3 text-center font-bold text-white hover:bg-red-700'
                  onClick={removeProductFromCart}
                >
                  Remover do carrinho
                </button>
              ) : (
                <button
                  className='mt-auto w-full rounded-lg bg-blue-600 p-3 text-center font-bold text-white hover:bg-black'
                  onClick={addProductToCart}
                >
                  Adicionar ao carrinho
                </button>
              )}
            </div>
          </div>

          <div className='mx-auto mt-16 max-w-3xl'>
            <h1 className='mb-4 text-lg font-bold'>Descrição do produto</h1>
            <p className='text-justify text-sm'>{product.description}</p>
          </div>
        </>
      ) : (
        <p className='text-center'>Carregando produto...</p>
      )}
    </div>
  );
};
