import { IBM_Plex_Serif } from "next/font/google";
import ContactCard from "../ContactCard";
import mail from '/public/mail.svg';
import AnimatedTitle from "../AnimatedTitle";
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['300', '400', '700'] })
const Join = () => {
    return (
        <div className="h-full min-h-svh w-full relative flex flex-col xl:flex-row justify-center gap-16 xl:gap-0 xl:justify-between items-center p-4 xl:p-24 overflow-hidden">
            <div className="flex flex-col gap-[1.5rem] w-full xl:w-[45.8125rem] text-center xl:text-left     h-auto">
                <AnimatedTitle className={`${ibmPlexSerif.className} text-3xl xl:text-[2.375rem] font-semibold leading-normal`} text="Join us" />
                <span className="mt-[0.75rem] text-md xl:text-[1.125rem] leading-[1.875rem] font-normal">Embark on a journey with us and become part of a vibrant tech team, where innovation meets collaboration. Join us and contribute to something extraordinary!</span>
                <ol className="text-sm xl:text-[1rem] leading-[2.5rem] font-normal">
                    <li> 1. Invaluable experience </li>
                    <li> 2. Work with the latest technologies and frameworks</li>
                    <li> 3. Collaborate with others </li>
                    <li> 4. Be part of the biggest cultural fest of South India </li>
                </ol>
            </div>
            <div className="ms-auto w-full xl:w-fit h-fit flex justify-center items-center ">
                <ContactCard icon={mail} title="EMAIL" subtitle="contactus@nitc.ac.in" href="mailto:contactus@nitc.ac.in" />
            </div>
        </div>
    )
}

export default Join;