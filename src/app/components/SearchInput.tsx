import Image from 'next/image';
import lupa from '@/public/images/svg/magnifying-glass-solid.svg';

export const SearchInput: React.FC = () => {
    return(
        <form className='relative'>
            <input className="text-sm w-40 pl-10 py-1 border border-gray-300 rounded-md focus:border-black focus:ring-black" type="search" placeholder="Procurar item"/>
            <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                <Image src={lupa} alt='lupa' width={15} height={15}/>
            </div>  
        </form>
    );
};