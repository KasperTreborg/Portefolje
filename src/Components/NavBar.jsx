import { useState, useEffect, useRef } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const closeMenu = (event) => {
            if (isOpen && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [isOpen]);

    return (
        <nav className="sticky top-0 flex flex-wrap items-center justify-between md:mx-auto p-6 md:px-20 xl:px-36 font-RaleWay text-zinc-200 bg-zinc-900 z-10" ref={menuRef}>

            <div className="flex space-x-2">
                <span className="text-2xl font-bold font-Playfair">Treborg.</span>
            </div>

            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            <div className="hidden lg:flex space-x-14 text-xl">
                <a href="#top" className="navbar-link">Home</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden absolute top-full right-0 w-24 mr-6 md:mr-20 bg-zinc-800`}>
                <a href="#home" className="block py-2 px-4 hover:bg-zinc-700" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" className="block py-2 px-4 hover:bg-zinc-700" onClick={() => setIsOpen(false)}>About</a>
                <a href="#contact" className="block py-2 px-4 hover:bg-zinc-700" onClick={() => setIsOpen(false)}>Contact</a>
            </div>

        </nav>
    )
}