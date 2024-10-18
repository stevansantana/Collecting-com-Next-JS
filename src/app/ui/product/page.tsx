'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const url: string = 'https://fakestoreapi.com/products/1';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  async function getProduct(): Promise<void> {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      setProduct(data);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='mt-24 mb-24'>
      {product ? (
        <>
          <div className='flex justify-between items-stretch'>
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
            />

            <div className='flex flex-col justify-between'>
              <h1 className='truncate text-4xl font-bold mb-10'>{product.title.length > 30
                  ? product.title.substring(0, 30) + '...'
                  : product.title}</h1>
              <span className='block text-3xl font-bold'>{formatCurrency(product.price)}</span>

              <button onClick={() => router.push('/ui/cart')} className='mt-auto w-full rounded-lg bg-blue-600 p-3 text-center font-bold text-white hover:bg-black'>Comprar</button>
            </div>
          </div>

          <div className='mt-16'>
            <h1 className='text-4xl font-bold mb-10'>Descrição do produto</h1>
            <p className='text-lg text-justify'>{product.description}</p>
          </div>
        </>
      ) : (
        <p>Carreando produto</p>
      )}
    </div>
  );
}
