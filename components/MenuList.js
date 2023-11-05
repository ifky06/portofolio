export default function MenuList({isOpen, link, title}){
    const handleLink = () => {
        window.open(link, '_self');
    }
    return(
        <>
            <li className={`${isOpen ? 'scale-100 delay-100' : 'scale-0 opacity-0'} p-3 transition-all hover:text-[#091230] hover:bg-[#92B4F4] font-bold`}
            onClick={handleLink}>
                {title}
            </li>
        {/*    line*/}
            <div className={`${isOpen ? 'scale-100 delay-100' : 'scale-0 opacity-0'} transition-all p-0 m-0`}>
                <div className={'h-[3px] bg-white w-full'}/>
            </div>
        </>
    )
}