"use client";

import Navbar from "../Navbar"
import { usePathname } from "next/navigation";
const NavbarWrapper = () => {
    const pathname = usePathname();
    return (
        <div className="fixed w-full z-[99999]">
            <Navbar current={pathname} />
        </div>
    )
}

export default NavbarWrapper;