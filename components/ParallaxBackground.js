'use client';

import {useEffect} from "react";

export default function ParallaxBackground({ImageURL}) {
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
        <div id={'parallax'} className={'absolute inset-0 bg-black bg-opacity-50 -z-10 bg-cover bg-center lg:bg-left-bottom'} style={{
            backgroundImage: `url(${ImageURL})`,
            opacity: 0.4,
        }}></div>
    )
}