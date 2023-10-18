export default function MenuList({isOpen, link, title}){
    return(
        <>
            <li className={`${isOpen ? 'scale-100 delay-100' : 'scale-0 opacity-0'} transition-all`}>
                <a href={'#'+ link} className={`hover:text-gray-300`}>{title}</a>
            </li>
        {/*    line*/}
            <div className={`${isOpen ? 'scale-100 delay-100' : 'scale-0 opacity-0'} transition-all`}>
                <div className={'h-[3px] bg-gray-500 w-full mx-auto mb-1'}/>
            </div>
        </>
    )
}