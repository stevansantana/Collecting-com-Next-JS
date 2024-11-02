'use client';
import { Product } from '@/data/products';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  return (
    <div
      className='flex flex-col rounded-lg bg-white p-4 shadow-2xl'
      key={product.id}
    >
      <div className='flex h-52 w-full items-center justify-center'>
        <Image src={product.image} alt={product.title} width={90} height={90} />
      </div>

      <div className='mb-10'>
        <h1 className='mb-3 truncate font-bold'>{product.title}</h1>
        <h2 className='text-2xl font-bold'>{formatCurrency(product.price)}</h2>
      </div>

      <button
        type='button'
        onClick={() => router.push(`/ui/product?id=${product.id}`)}
        className='mt-auto w-full rounded-lg bg-blue-600 p-3 text-center font-bold text-white hover:bg-black'
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};
