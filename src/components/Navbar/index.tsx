"use client";

import Image from "next/image";
import logo from '/public/logo.svg';
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import AnimatedLink from "../AnimatedLink";
import { useMemo, useState, useEffect } from "react";
import openMenu from '/public/hamburger.svg';
import closeMenu from '/public/close.svg';

const Navbar = ({ current }: { current: string }) => {
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const [size, setSize] = useState(0);

    useEffect(() => {
        setSize(window.innerWidth);
        window.onresize = window.onload = () => setSize(window.innerWidth);
    }, [])
    const [open, setOpen] = useState(false);
    const linkItems = useMemo(() => ([
        { title: 'HOME', href: '/' },
        { title: 'CONTACT US', href: '/contact' },
    ]), [])

    return (
        <div className="relative z-[9999999]">
            <nav className="bg-white w-full relative top-0 h-16 text-black flex  gap-4 md:gap-0 justify-between items-center p-4 pt-0 pb-0 border-b-2 border-slate-100">
                <Image src={logo} alt="logo" className="w-24 h-24 md:w-fit md:h-fit" />
                <div className="gap-4 font-semibold items-center justify-center hidden md:flex">
                    {
                        linkItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-0 xl:p-2 xl:hover:bg-slate-200 rounded-md cursor-pointer h-full"
                                style={{ color: current === item.href ? '#000' : '#334155' }}
                            >
                                <AnimatedLink title={item.title} href={item.href} />
                            </motion.div>
                        ))
                    }
                </div>
                <motion.div
                    className="flex gap-4 font-semibold items-center justify-center flex-col md:hidden"
                    onClick={() => setOpen(!open)}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image
                        src={open ? closeMenu : openMenu}
                        alt="menu"
                        className="w-8 h-8"
                    />
                </motion.div>
            </nav>
            <div className="md:hidden">
                <AnimatePresence>
                    {
                        open ? (
                            <motion.div
                                className="w-full backdrop-blur-lg text-center overflow-hidden bg-white rounded-b-lg shadow-lg shadow-black/10"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    staggerChildren: 0.5,
                                }}
                            >
                                {
                                    linkItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="text-black p-2"
                                            initial={{ opacity: 0, y: -100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{ backgroundColor: current === item.href ? '#94a3b8' : '#fff' }}
                                        >
                                            <Link href={item.href} onClick={() => setOpen(false)}> {item.title} </Link>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        ) : (
                            <motion.span
                                className="absolute h-[2px] bottom-0 bg-black"
                                style={{ width }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        )
                    }
                </AnimatePresence>
            </div>
            <div className="hidden md:block">
                <motion.span
                    className="absolute h-[2px] bottom-0 bg-black"
                    style={{ width }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            </div>

        </div >
    )
}

export default Navbar;