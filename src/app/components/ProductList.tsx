import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

export const ProductList: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-10 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
