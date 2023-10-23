'use client';
import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import {useEffect, useState} from "react";
import gsap from "gsap";

export default function Header() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let parallax = document.getElementById('parallax');
            let scrollPosition = window.pageYOffset;
            // if (scrollPosition > 100*2){
                parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
            // }
        }, false);

    }, []);

    useEffect(() => {
        let button = document.getElementById('start-button');
        if (isHover) {
        //     add class to button
            button.classList.remove('bg-gradient-to-bl', 'from-cyan-500', 'to-blue-500');
            button.classList.add('bg-gray-200');
        } else {
            button.classList.remove('bg-gray-200');
            button.classList.add('bg-gradient-to-bl', 'from-cyan-500', 'to-blue-500');
        }
    }, [isHover]);

    return(
        <div className={'container mx-auto h-[100vh] bg-fixed'}
             >
            {/*for parallax*/}
            <div id={'parallax'} className={'absolute inset-0 bg-black bg-opacity-50 -z-10 bg-cover bg-center lg:bg-left-bottom'} style={{
                backgroundImage: "url('/images/bg1.png')",
                opacity: 0.4,
            }}></div>
            <div className={'grid flex-col gap-4 justify-items-center lg:pt-20 pt-24 transition-all duration-300 delay-100'}>
                <div className={'row-span-1 from-cyan-500 to-blue-500 content-center p-3 rounded-full bg-gradient-to-bl lg:max-w-full max-w-[40%] transition-all duration-300 delay-100'}>
                    <Image src={'/images/foto2.jpeg'} className={'rounded-full'} width={200} height={200} />
                </div>
                <div className={'row-span-1 color-white'}>
                    <h1 className={'text-4xl font-bold'}>RIFKI06</h1>
                </div>
                <div className={'row-span-1 text-white'}>
                    <p className={''}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className={'row-span-1'}>
                    <div className={'h-[8px] bg-gradient-to-bl from-cyan-500 to-blue-500 w-[15rem] rounded-full'}/>
                </div>
                <div className={'text-black p-4'}>
                    <a href='#' id={'start-button'} className={`hover:text-black text-2xl px-40 py-3 rounded-full font-extrabold transition-all duration-300 text-white bg-gradient-to-bl from-cyan-500 to-blue-500 `}
                    onMouseOver={handleMouseOver} onMouseOut={handleMouseLeave}>START</a>
                </div>
                <div className={'row-span-1'}>
                    <ExternalLink />
                </div>
            </div>
        </div>
    )
}