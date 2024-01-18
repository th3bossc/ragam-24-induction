"use client";

import Image from "next/image";
import logo from '/public/logo.svg';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import AnimatedLink from "../AnimatedLink";
import { useMemo } from "react";


const Navbar = ({ current }: { current: string }) => {
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    const linkItems = useMemo(() => ([
        { title: 'HOME', href: '/' },
        { title: 'CONTACT US', href: '/contact' },
    ]), [])

    return (
        <div className="relative z-[9999999]">
            <nav className="bg-white w-full relative top-0 h-16 text-black flex justify-center gap-4 md:gap-0 md:justify-between items-center p-10 pt-0 pb-0 border-b-2 border-slate-100">
                <Image src={logo} alt="logo" className="w-24 h-24 md:w-fit md:h-fit" />
                <div className="flex gap-4 font-semibold">
                    {
                        linkItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-2 hover:bg-slate-200 rounded-md"
                                style={{ color: current === item.href ? '#000' : '#334155' }}
                            >
                                <AnimatedLink title={item.title} href={item.href} />
                            </motion.div>
                        ))
                    }
                </div>
            </nav>
            <motion.span
                className="absolute h-[2px] bottom-0 bg-black"
                style={{ width }}
            />
        </div>
    )
}

export default Navbar;