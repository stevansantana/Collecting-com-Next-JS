'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
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

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const id = searchParams.get('id');

      if (id) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (response.status === 200) {
          const data = await response.json();
          setProduct(data);
        }
      }
    };

    fetchProduct();
  }, [searchParams]);

  return (
    <div className='container mx-auto mt-24 mb-24 px-4'>
      {product ? (
        <>
          <div className='flex flex-col md:flex-row justify-between items-stretch max-w-4xl mx-auto'>
            <div className='flex justify-center mb-4 md:mb-0'>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
              />
            </div>

            <div className='flex flex-col justify-between max-w-lg'>
              <h1 className='break-words text-4xl font-bold mb-4'>{product.title}</h1>
              <span className='block text-3xl font-bold mb-4'>{formatCurrency(product.price)}</span>

              <button onClick={() => router.push('/ui/cart')} className='mt-auto w-full rounded-lg bg-blue-600 p-3 text-center font-bold text-white hover:bg-black'>
                Comprar
              </button>
            </div>
          </div>

          <div className='mt-16 max-w-3xl mx-auto'>
            <h1 className='text-4xl font-bold mb-4'>Descrição do produto</h1>
            <p className='text-lg text-justify'>{product.description}</p>
          </div>
        </>
      ) : (
        <p className='text-center'>Carregando produto...</p>
      )}
    </div>
  );
}
