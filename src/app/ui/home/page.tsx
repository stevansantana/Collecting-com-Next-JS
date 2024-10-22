'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const url: string = 'https://fakestoreapi.com/products';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

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

  if (loading) {
    return <p>Carregamento produtos...</p>;
  }

  return (
    <div className='grid grid-cols-1 gap-10 p-10'>
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
            type='button'
            onClick={() => router.push(`/ui/product?id=${product.id}`)}
            className='mt-auto w-full rounded-lg bg-blue-600 p-3 text-center font-bold text-white hover:bg-black'
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}
