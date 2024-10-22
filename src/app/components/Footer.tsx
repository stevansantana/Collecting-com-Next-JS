import Image from 'next/image';
import instagram from '@/public/images/svg/instagram-icon.svg';
import facebook from '@/public/images/svg/facebook-icon.svg';
import youtube from '@/public/images/svg/youtube-icon.svg';
import gmail from '@/public/images/svg/gmail-icon.svg';
import copyright from '@/public/images/svg/copyright.svg';

export const Footer: React.FC = () => {
  return (
    <footer className='mt-auto bg-black p-8 text-white'>
      <section>
        <h1 className="font-sans text-2xl text-center">
          COLLECTING
        </h1>
        <p className='mt-7 mb-7 text-sm leading-7 text-center'>
          Seja um verdadeiro colecionador e junte-se ao Collecting: <br /> onde
          cada peça conta uma história e cada coleção encontra seu valor.
        </p>
      </section>

      <section className='basis-1/4'>
        <div className='flex justify-between'>
          <Image
            className='cursor-pointer w-10'
            src={instagram}
            alt='facebook-icon'
          ></Image>
          <Image
            className='cursor-pointer w-10'
            src={facebook}
            alt='facebook-icon'
          ></Image>
          <Image
            className='cursor-pointer w-10'
            src={youtube}
            alt='youtube-icon'
          ></Image>
          <Image
            className='cursor-pointer w-10'
            src={gmail}
            alt='gmail-icon'
          ></Image>
        </div>

        <div className='mt-5 flex items-center'>
          <Image
            className='mr-1 brightness-50'
            src={copyright}
            alt='copyright-icon'
            width={20}
            height={20}
          ></Image>
          <p className='text-xs text-gray-400'>Todos os direitos reservados.</p>
        </div>
      </section>
    </footer>
  );
};
