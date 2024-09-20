import Image from "next/image"
import instagram from "@/public/images/svg/instagram-icon.svg"
import facebook from "@/public/images/svg/facebook-icon.svg"
import youtube from "@/public/images/svg/youtube-icon.svg"
import gmail from "@/public/images/svg/gmail-icon.svg"
import copyright from "@/public/images/svg/copyright.svg"
import { silkscreen } from "@/app/fonts/Silkscreen"

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black p-8 text-white flex justify-between items-center mt-auto">
           <section>
                <h1 className={`${silkscreen.variable} font-sans text-4xl`}>COLLECTING</h1>
                <p className="mt-5">Seja um verdadeiro colecionador e junte-se ao Collecting: <br /> onde cada peça conta uma história e cada coleção encontra seu valor.</p>
           </section>

            <section className="basis-1/4">
               <div className="flex justify-between">
                    <Image className="cursor-pointer" src={instagram} alt="facebook-icon"></Image>
                    <Image className="cursor-pointer" src={facebook} alt="facebook-icon"></Image>
                    <Image className="cursor-pointer" src={youtube} alt="youtube-icon"></Image>
                    <Image className="cursor-pointer" src={gmail} alt="gmail-icon"></Image>
               </div>

               <div className="flex items-center mt-5">
                   <Image className="mr-1 brightness-50" src={copyright} alt="copyright-icon" width={20} height={20}></Image>
                   <p className="text-sm text-gray-400">Todos os direitos reservados.</p>
               </div>
            </section>
        </footer>
    )
}