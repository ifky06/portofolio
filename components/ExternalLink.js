'use client';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";

const ExternalLinkItem = [
    {
        id: 'id1',
        name: "LinkedIn",
        url: "https://www.linkedin.com/in//",
        icon: <FaLinkedin className={'text-black'}/>
    },
    {
        id: 'id2',
        name: "GitHub",
        url: "https://github.com/ifky06",
        icon: <FaGithub className={'text-black'}/>
    },
    {
        id: 'id3',
        name: "Instagram",
        url: "https://www.instagram.com/rifki.06/",
        icon: <FaInstagram className={'text-black'}/>
    }
];
export default function ExternalLink() {
    const handleLink = (url) => {
        window.open(url, "_blank");
    }

    const handleMouseOver = (id) => {

        gsap.fromTo('#'+id, {opacity: 0, y: -20}, {opacity: 1, y: 10, duration: 0.5, ease: 'power3.out'});
    }

    const handleMouseLeave = (id) => {

        gsap.fromTo('#'+id, {opacity: 1, y: 10}, {opacity: 0, y: -30, duration: 0.5, ease: 'power3.out'});
    }


    return(
        <>
            <div className={'flex flex-row justify-center items-center'}>
                {ExternalLinkItem.map((link) => (
                    <div key={link.id} className={'flex flex-col py-2 px-6 justify-center items-center'}>
                        <div className={'bg-gray-200 text-2xl p-3 rounded-full hover:scale-125 ease-in duration-100 w-12 h-12 flex justify-center items-center text-center'}
                             onClick={handleLink.bind(this,link.url)} onMouseOver={handleMouseOver.bind(this,link.id)} onMouseOut={handleMouseLeave.bind(this,link.id)}>
                            {link.icon}
                        </div>
                        <div className={'text-center opacity-0'}
                             style={{opacity: 0}}
                            id={link.id}
                        >
                            {link.name}
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}