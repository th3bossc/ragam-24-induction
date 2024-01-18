"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import arrow from '/public/arrow.svg'

const ContactCard = ({
    icon,
    title,
    subtitle,
    href
}: {
    icon: string,
    title: string,
    subtitle: string,
    href: string,
}) => {
    const [hovered, setHovered] = useState(false)
    return (
        <motion.a
            href={href}
            className="pt-[2.5rem] pb-[2.5rem] border border-black/20 rounded-[1.25rem] w-[17.75rem] h-[16.1875rem] flex flex-col justify-center items-center relative overflow-hidden"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHovered(false)}
        >
            <div className="w-[5rem] h-[5rem] p-[0.625rem] rounded-[3.125rem] bg-black flex items-center justify-center">
                <Image src={icon} alt="icon" className='w-[2.25rem] h-[2.25rem]' />
            </div>
            <div className='flex flex-col gap-[1.5rem]'>
                <span className='mt-[0.62rem] text-center text-[1rem] leading-normal font-medium tracking-[0.2rem]'> {title} </span>
                <span className="text-center text-[1rem] leading-normal font-medium opacity-50"> {subtitle} </span>
            </div>
            <motion.span
                className='absolute bottom-0 left-0 w-full h-full bg-black text-white flex justify-center items-center text-[1.25rem] font-medium tracking-[0.2rem]'
                initial={{ height: '0%', opacity: 0 }}
                animate={{ height: hovered ? '100%' : '0%', opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.5, type: 'tween', ease: 'backInOut' }}
            >
                <Image src={arrow} alt="arrow" />
            </motion.span>
        </motion.a>
    );
}


export default ContactCard;