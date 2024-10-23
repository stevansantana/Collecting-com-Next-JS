import Image from 'next/image';
import instagram from '@/public/images/svg/instagram-icon.svg';
import facebook from '@/public/images/svg/facebook-icon.svg';
import youtube from '@/public/images/svg/youtube-icon.svg';
import gmail from '@/public/images/svg/gmail-icon.svg';
import copyright from '@/public/images/svg/copyright.svg';

export const Footer: React.FC = () => {
  return (
    <footer className='mt-auto bg-black p-8 text-white lg:flex lg:justify-between'>
      <section>
        <h1 className="font-sans text-2xl text-center sm:text-3xl lg:text-start">
          COLLECTING
        </h1>
        <p className='mt-7 mb-7 text-sm leading-7 text-center sm:text-xl lg:text-start lg:mb-0'>
          Seja um verdadeiro colecionador e junte-se ao Collecting: <br /> onde
          cada peça conta uma história e cada coleção encontra seu valor.
        </p>
      </section>

      <section className='basis-1/4 lg:flex lg:flex-col'>
        <div className='flex justify-between'>
          <Image
            className='cursor-pointer w-10 sm:w-14'
            src={instagram}
            alt='facebook-icon'
          ></Image>
          <Image
            className='cursor-pointer w-10 sm:w-14'
            src={facebook}
            alt='facebook-icon'
          ></Image>
          <Image
            className='cursor-pointer w-10 sm:w-14'
            src={youtube}
            alt='youtube-icon'
          ></Image>
          <Image
            className='cursor-pointer w-10 sm:w-14'
            src={gmail}
            alt='gmail-icon'
          ></Image>
        </div>

        <div className='mt-5 flex items-center lg:mt-auto'>
          <Image
            className='mr-1 brightness-50 '
            src={copyright}
            alt='copyright-icon'
            width={20}
            height={20}
          ></Image>
          <p className='text-xs text-gray-400 sm:text-sm'>Todos os direitos reservados.</p>
        </div>
      </section>
    </footer>
  );
};
