'use client';

import {useEffect, useState} from "react";

export default function LargeButton({className, link, title, id}) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    useEffect(() => {
        let button = document.getElementById(id);
        if (button) {
            if (isHover) {
                //     add class to button
                button.classList.remove('bg-gradient-to-bl', 'from-cyan-500', 'to-blue-500');
                button.classList.add('bg-gray-200');
            } else {
                button.classList.remove('bg-gray-200');
                button.classList.add('bg-gradient-to-bl', 'from-cyan-500', 'to-blue-500');
            }
        }
    }, [isHover]);

    return (
        <a href={link} id={id} className={`${className} hover:text-black transition-all duration-300 text-white bg-gradient-to-bl from-cyan-500 to-blue-500 `}
           onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave}>{title}</a>
    )
}