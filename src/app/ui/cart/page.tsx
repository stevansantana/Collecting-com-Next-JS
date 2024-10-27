'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const url: string = 'https://fakestoreapi.com/products';

export default function Cart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function getProducts(): Promise<void> {
    const response = await fetch(url);

    if (response.status === 200) {
      const data: Product[] = await response.json();
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  const removeProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  if (loading) {
    return <p>Carregando produtos</p>;
  }

  return (
    <div className='container mx-auto mt-16 p-4'>
      <h1 className='mb-10 text-2xl text-center font-bold lg:text-3xl'>Carrinho de Compras</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className='mb-4 flex flex-col items-center justify-between border-b-2 pb-4'
        >
          <div className='flex justify-between items-center mb-5 w-full'>
            <Image
              className='mr-4 sm:w-16 md:w-20 lg:w-24'
              src={product.image}
              alt={product.title}
              width={50}
              height={50}
            />
            <div>
              <h2 className='text-xs mb-3 sm:text-sm md:text-base lg:text-xl'>
                {product.title.length > 20
                  ? product.title.substring(0, 20) + '...'
                  : product.title}
              </h2>
              <p className='text-xs sm:text-sm md:text-base lg:text-lg'>Quantidade:</p>
            </div>
          </div>

          <div className='flex items-center basis-1/6 justify-between w-full'>
          <button
              className='text-xs text-red-500 hover:text-red-700 font-semibold sm:text-sm md:text-base lg:text-lg'
              onClick={() => removeProduct(product.id)}
            >
              Remover
            </button>
            
            <p className='text-xs font-bold mr-4 sm:text-sm md:text-base lg:text-lg'>{formatCurrency(product.price)}</p>
          </div>
        </div>
      ))}

      <div className='mt-4 text-right mb-16'>
        <p className='text-2xl mb-4 font-bold'>Total: {formatCurrency(calculateTotal())}</p>

        <div className='flex flex-col mt-10 lg:flex-row lg:justify-between'>
          <Link href='/ui/home' className='mb-5 text-center px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600 lg:mb-0'>
            Adicionar mais itens
          </Link>

          <Link href='/ui/payment' className='text-center px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'>
            Prosseguir Compra
          </Link>
        </div>
      </div>
    </div>
  );
}
