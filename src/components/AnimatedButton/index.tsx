"use client";

import styles from './styles.module.css'

import useMousePosition from '@/hooks/useMousePosition';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';

const AnimatedButton = ({ children, href }: {
    children: React.ReactNode,
    href?: string,
}) => {
    const [isHovered, setIsHovered] = useState(false)
    const size = isHovered ? 500 : 1;
    const container = useRef(null);
    const { x, y } = useMousePosition({ ref: container });
    return (
        <Link href={href ? href : "#"} scroll={true}>
            <motion.div
                ref={container}
                className="z-10 relative w-full xl:w-48"
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className={styles.mask}
                    animate={{
                        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                        WebkitMaskSize: `${size}px`,
                    }}
                    transition={{ type: "tween", ease: "backOut", duration: 1.5 }}
                    onMouseOver={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button className="w-full p-1 xl:p-4 font-semibold rounded-[3.125rem] text-white bg-slate-400">
                        {children}
                    </button>
                </motion.div>
                <button className="w-full p-1 xl:p-4 font-semibold rounded-[3.125rem] bg-slate-950 text-white outline outline-white">
                    {children}
                </button>
            </motion.div >
        </Link>
    )
}

export default AnimatedButton;