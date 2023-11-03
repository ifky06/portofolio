'use client';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import getAssetPathFromRoute from "next/dist/shared/lib/router/utils/get-asset-path-from-route";

const ExternalLinkItem = [
    {
        id: 'id1',
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmad-rifki-2aa503235/",
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
    const [isHover, setIsHover] = useState(false);
    const [id, setId] = useState('');
    const handleLink = (url) => {
        window.open(url, "_blank");
    }

    const handleMouseOver = (id) => {
        setIsHover(true)
        setId(id)
    }

    const handleMouseLeave = (id) => {
        setIsHover(false)
        setId(id)
    }

    useEffect(() => {
        if(id){
            if (isHover) {
                gsap.to('#'+id, {opacity: 1, y: 10, duration: 0.5, ease: 'power3.out'});
                gsap.to('#icon-'+id, {scale: 1.2, duration: 0.5, ease: 'power3.out'});
            } else {
                gsap.to('#'+id, {opacity: 0, y: -30, duration: 0.5,  ease: 'power3.out'});
                gsap.to('#icon-'+id, {scale: 1, duration: 0.5, ease: 'power3.out'});
            }
        }
    }, [isHover]);


    return(
        <>
            <div className={'flex flex-row justify-center items-center'}>
                {ExternalLinkItem.map((link) => (
                    <div key={link.id} className={'flex flex-col py-2 px-2 lg:px-6 justify-center items-center transition-all duration-300'}>
                        <div id={'icon-'+link.id} className={'bg-gray-200 text-2xl p-3 rounded-full duration-100 w-12 h-12 flex justify-center items-center text-center z-20'}
                             onClick={handleLink.bind(this,link.url)} onMouseOver={handleMouseOver.bind(this,link.id)} onMouseOut={handleMouseLeave.bind(this,link.id)}>
                            {link.icon}
                        </div>
                        <div className={'text-center opacity-0 pointer-events-none z-10'}
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