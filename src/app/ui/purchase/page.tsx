import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: 'Produto 1',
    price: 10,
    description: 'Primeiro produto',
    image: '/',
  },

  {
    id: 2,
    title: 'Produto 2',
    price: 20,
    description: 'Segundo produto',
    image: '/',
  },

  {
    id: 3,
    title: 'Produto 3',
    price: 30,
    description: 'Terceiro produto',
    image: '/',
  },
];

export default function purchase() {
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

  return (
    <div className={`${products.length > 0 ? 'container mx-auto mt-16 p-4' : ''}`}>
      {products.length > 0 ? (
        <div>
          <h1 className='mb-10 text-center text-2xl font-bold lg:text-3xl'>
            Seus pedidos
          </h1>
          {products.map((product) => (
            <div
              key={product.id}
              className='mb-4 flex flex-col items-center justify-between border-b-2 pb-4'
            >
              <div className='mb-5 flex w-full items-center justify-between'>
                <div className='flex items-center'>
                  <Image
                    className='mr-4 sm:w-16 md:w-20 lg:w-24'
                    src={product.image}
                    alt={product.title}
                    width={50}
                    height={50}
                  />
                  <h2 className='mb-3 text-xs sm:text-sm md:text-base lg:text-xl'>
                    {product.title.length > 20
                      ? product.title.substring(0, 20) + '...'
                      : product.title}
                  </h2>
                </div>

                <div>
                  <p>STATUS:</p>
                  <p className='mr-4 text-xs font-bold sm:text-sm md:text-base lg:text-lg'>
                    {formatCurrency(product.price)}
                  </p>
                  <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
                    Quantidade:
                  </p>
                </div>
              </div>
            </div>
          ))}
          <p className='mb-4 text-end text-2xl font-bold'>
            Total: {formatCurrency(calculateTotal())}
          </p>
        </div>
      ) : (
        <p className='text-center text-xl font-bold lg:text-4xl'>
          Você ainda não fez nenhuma compra :(
        </p>
      )}
    </div>
  );
}
