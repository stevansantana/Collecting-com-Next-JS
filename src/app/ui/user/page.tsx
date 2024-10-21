'use client';

import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { ModalProductContext } from '@/app/contexts/modals/product/create-product/ModalProductContext';
import ModalProduct from '@/app/contexts/modals/product/create-product/ModalProduct';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};

const url: string = 'https://fakestoreapi.com/products';

export default function User() {
  const {isOpen, setIsOpen} = useContext(ModalProductContext);
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      setProducts(data);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const removeProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  function handleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  products.length = 0;

  return (
    <div className='mb-24 mt-24'>
      {products.length > 0 ? (
        <>
          <h1 className='text-center text-5xl font-bold'>Seus produtos</h1>
          <div className='grid grid-cols-4 gap-10 p-20'>
            {products.map((product) => (
              <div
                className='flex flex-col rounded-lg bg-white p-4 shadow-2xl'
                key={product.id}
              >
                <div className='flex h-52 w-full items-center justify-center'>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={90}
                    height={90}
                  />
                </div>

                <div className='mb-10'>
                  <h1 className='mb-3 truncate font-bold'>{product.title}</h1>
                  <h2 className='text-2xl font-bold'>
                    {formatCurrency(product.price)}
                  </h2>
                </div>

                <button
              className='text-red-500 hover:text-red-700 font-semibold'
              onClick={() => removeProduct(product.id)}
            >
              Remover Produto
            </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className='text-5xl font-bold'>
          Você não tem produtos cadastrados :(
        </p>
      )}

      <div className='mt-20 flex items-center justify-center'>
      <button onClick={handleModal} className='mr-16 rounded-lg bg-blue-500 p-5 text-center text-2xl font-bold text-white hover:bg-blue-600'>
              Adicionar produto
            </button>
      </div>

      {isOpen && <ModalProduct/>}
    </div>
  );
}
