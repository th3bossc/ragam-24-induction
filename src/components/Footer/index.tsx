import Image from "next/image";
import nitc from '/public/nitc.png';
import ragam from '/public/logo.svg';

import insta from '/public/insta.png';
import twitter from '/public/twitter.png';
import whatsapp from '/public/whatsapp.png';
import youtube from '/public/youtube.png';
import Chip from "../Chip";
const Footer = () => {
    return (
        <div className="pt-[2.62rem] pb-[2.62rem] flex flex-col justify-center items-center gap-[2.62rem] w-full border border-top border-black/10">
            <div className="flex gap-[2.62rem] w-auto h-auto">
                <Image src={nitc} alt="nitc" className="h-[3rem] xl:h-[6.47156rem] w-[2.4627rem] xl:w-[5.3125rem]" />
                <Image src={ragam} alt="ragam" className="w-[7rem] xl:w-[14rem]" />
            </div>
            <div className="flex gap-[3.52rem]">
                <Chip href="https://www.instagram.com/ragam_nitc/" blank>
                    <Image src={insta} alt="insta" className="object-cover" />
                </Chip>
                <Chip href="#">
                    <Image src={twitter} alt="twitter" className="object-cover" />
                </Chip>
                <Chip href="#">
                    <Image src={youtube} alt="youtube" className="object-cover" />
                </Chip>
                <Chip href="#">
                    <Image src={whatsapp} alt="whatsapp" className="object-cover" />
                </Chip>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="text-[1rem] font-bold leading-normal"> National Institute of Technology, Calicut </span>
                <span className="text-[0.875rem] font-normal leading-normal mt-[0.62rem]"> Calicut Mukkam Road, Kattangal </span>
                <span className="text-[0.875rem] font-normal leading-normal"> Kerala 673601 </span>
            </div>
        </div>
    )
}

export default Footer;