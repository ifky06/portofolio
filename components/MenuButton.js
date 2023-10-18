export default function MenuButton({isOpen, setIsOpen, className}) {
    return (
        <button id="menu-btn" className="mr-2" onClick={() => setIsOpen(!isOpen)}>
            <div className={"w-8 h-1 bg-black my-1.5 rounded transition-all " + (isOpen ? 'rotate-45 translate-y-2.5 ' : '') + className}></div>
            <div className={"w-8 h-1 bg-black my-1.5 rounded transition-all " + (isOpen ? 'opacity-0 ' : '') + className}></div>
            <div className={"w-8 h-1 bg-black my-1.5 rounded transition-all " + (isOpen ? '-rotate-45 -translate-y-2.5 ' : '') + className}></div>
        </button>
    )
}
