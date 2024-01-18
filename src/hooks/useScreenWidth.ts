import { useState, useEffect } from 'react';

export default function useScreenWidth() {
    const [size, setSize] = useState(0);

    useEffect(() => {
        setSize(window.innerWidth);
        window.onresize = window.onload = () => setSize(window.innerWidth);
    }, [])


    return size;
}