'use client';
import Image from "next/image";
import ExternalLink from "@/components/ExternalLink";
import {useEffect} from "react";
import gsap from "gsap";

export default function Header() {

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let parallax = document.getElementById('parallax');
            let scrollPosition = window.pageYOffset;
            // if (scrollPosition > 100*2){
                parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
            // }


        }, false);

    }, []);
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
                <div className={'text-black p-6'}>
                    <a href='#' className={'bg-gray-200 text-2xl px-10 py-3 rounded-full'}>START</a>
                </div>
                <div className={'row-span-1'}>
                    <ExternalLink />
                </div>
            </div>
        </div>
    )
}