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
      <h1 className='mb-10 text-2xl text-center font-bold'>Carrinho de Compras</h1>
      {products.map((product) => (
        <div
          key={product.id}
          className='mb-4 flex items-center justify-between border-b pb-4'
        >
          <div className='flex items-center'>
            <Image
              className='mr-4'
              src={product.image}
              alt={product.title}
              width={80}
              height={80}
            />
            <div>
              <h2 className='text-lg mb-3'>
                {product.title.length > 40
                  ? product.title.substring(0, 40) + '...'
                  : product.title}
              </h2>
              <p>Quantidade:</p>
            </div>
          </div>

          <div className='flex items-center basis-1/6 justify-between'>
            <p className='text-xl font-bold mr-4'>{formatCurrency(product.price)}</p>

            <button
              className='text-red-500 hover:text-red-700 font-semibold'
              onClick={() => removeProduct(product.id)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}

      <div className='mt-4 text-right mb-16'>
        <p className='text-2xl mb-4 font-bold'>Total: {formatCurrency(calculateTotal())}</p>

        <div className='flex justify-between items-center'>
          <Link href='/ui/home' className='px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600'>
            Adicionar mais itens
          </Link>

          <Link href='/ui/payment' className='px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'>
            Prosseguir Compra
          </Link>
        </div>
      </div>
    </div>
  );
}
