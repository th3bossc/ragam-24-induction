"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
const PageWrapper = ({ children, dir }: { children: React.ReactNode, dir: boolean }) => {
    const [size, setSize] = useState(0);
    console.log(size);
    useEffect(() => {
        setSize(window.innerWidth);
        window.onresize = window.onload = () => setSize(window.innerWidth);
    }, [])
    return (
        <AnimatePresence>
            {
                <>
                    <motion.div
                        className="w-full h-full hidden md:block"
                        initial={{ opacity: 0, x: dir ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir ? 50 : -50 }}
                    >
                        {children}
                    </motion.div>
                    <motion.div
                        className="w-full h-full md:hidden"
                        initial={{ opacity: 0, y: dir ? 50 : -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: dir ? 50 : -50 }}
                    >
                        {children}
                    </motion.div>
                </>
            }
        </AnimatePresence>
    )
}

export default PageWrapper;