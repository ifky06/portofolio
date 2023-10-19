'use client';
import {useState} from "react";
import MenuButton from "@/components/MenuButton";
import MenuList from "@/components/MenuList";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);




    return(
            <nav className="py-4 px-5 text-[#D6F6DD] bg-[#102542] sticky top-0">
                <div className="container mx-auto lg:grid lg:grid-cols-3 flex justify-between items-center">
                    <div className="text-2xl font-bold items-center">Rifki06</div>
                    <ul className="lg:flex justify-center space-x-4 hidden">
                        <li><a href="#" className="hover:text-gray-300">My Project</a></li>
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                    <div className="lg:hidden flex justify-end items-end">
                        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} className={'bg-white'}/>
                    </div>
                </div>
                <div className={`lg:hidden px-4 transition-all bg-transparent ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <ul className={`flex py-4 flex-col transition-all duration-300 justify-center space-y-4 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <MenuList isOpen={isOpen} link={'#'} title={'My Project'} />
                        <MenuList isOpen={isOpen} link={'#'} title={'About'} />
                        <MenuList isOpen={isOpen} link={'#'} title={'Contact'} />
                    </ul>
                </div>
            </nav>
    )
}


