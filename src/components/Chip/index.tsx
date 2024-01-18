"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";
const Chip = ({
    children,
    href,
    blank
}: {
    children: React.ReactNode,
    href: string,
    blank?: boolean
}) => {
    const container = useRef<HTMLDivElement>(null);
    const { x, y } = useMousePosition({ ref: container });
    const [hover, setHover] = useState(false);
    const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        if (container.current) {
            const { width, height } = container.current.getBoundingClientRect();

            hover ?
                setPosition({ x: x - width / 2, y: y - height / 2 }) :
                setPosition({ x: 0, y: 0 })
        }
    }, [hover, x, y])

    return (
        <div
            ref={container}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <motion.a
                className="flex items-center justify-center w-[3.125rem] h-[3.125rem] border border-[3px] rounded-[3.125rem] border-[#585858] bg-white/50"
                animate={{ x: position.x, y: position.y }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
                href={href}
                target={blank ? "_blank" : "_self"}
            >
                {children}
            </motion.a>
        </div>
    )
}

export default Chip;