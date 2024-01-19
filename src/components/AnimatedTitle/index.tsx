"use client";
import { motion } from 'framer-motion';
const AnimatedTitle = ({
    className,
    text,
}: {
    className?: string,
    text: string,
}) => (
    <motion.div
        className={`${className ? className : ''} relative`}
    >
        {
            text.split("").map((letter, index) => (
                letter === " "
                    ? <span key={index}>&nbsp;</span>
                    : <motion.span
                        key={index}
                        className='inline-block'
                        initial={{ position: 'absolute', y: (index % 2) ? 25 : -25, opacity: 0 }}
                        whileInView={{ position: 'relative', y: 0, opacity: 1 }}
                        transition={{
                            delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                    >
                        {letter}
                    </motion.span>
            ))
        }
    </motion.div >
)

export default AnimatedTitle;