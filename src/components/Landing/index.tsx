"use client";

import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import circle from '/public/landingImage.svg';
import downArrow from '/public/downArrow.svg';
import AnimatedButton from "../AnimatedButton";
import buttonArrow from '/public/buttonArrow.svg';
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ['latin'], weight: ['300', '400', '700'] })
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '700'] })

const Landing = () => {
    return (
        <div className={`relative flex ${ibmPlexSans.className}`}>
            <div className="h-full min-h-svh w-full relative flex justify-center xl:justify-between items-center p-4 xl:p-24 overflow-hidden" >
                <div className="flex flex-col w-[40rem] gap-[1.5rem] relative">
                    <span className={`font-bold text-center xl:text-left text-3xl xl:text-[3.5rem] xl:leading-normal  ${ibmPlexSerif.className}`}>
                        Ragam ‘24 Tech-Team Inductions
                    </span>
                    <span className="text-lg xl:text-[1.375rem] xl:leading-normal text-center xl:text-left font-light">
                        Embrace the challenges that lie ahead, as you become part of a community dedicated to pushing boundaries and shaping the fest.
                    </span>
                    <AnimatedButton href="#about">
                        <div className="flex w-full justify-center items-center gap-4">
                            <span> Explore </span>
                            <Image src={buttonArrow} alt="button-arrow" />
                        </div>
                    </AnimatedButton>
                </div>
                <Image className="hidden lg:block lg:absolute lg:-top-24 lg:-right-24 xl:static -z-10 lg:opacity-50 xl:opacity-100" src={circle} alt="circle" />
            </div>
            <div className="flex flex-col text-[1.375rem] font-normal absolute bottom-2 opacity-50 justify-center items-center w-full">
                <span> Learn more</span>
                <Image src={downArrow} alt="down-arrow" />
            </div>
        </div>
    )
}

export default Landing;