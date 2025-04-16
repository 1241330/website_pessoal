import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Fecha o menu se clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="p-8 fixed w-full top-0 z-50 border font-mono bg-black">
            <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                {/* Botão hambúrguer para mobile */}
                <button className="md:hidden text-white z-50" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Menu centralizado para desktop */}
                <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                    <Link to="inicio" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Início</Link>
                    <Link to="sobre" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Sobre Mim</Link>
                    <Link to="hard-skills" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Hard Skills</Link>
                    <Link to="linguas" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Línguas</Link>
                    <Link to="timeline" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Timeline</Link>
                    <Link to="projetos" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Projetos</Link>
                </div>
            </div>

            {/* Menu mobile */}
            {isOpen && (
                <div ref={menuRef} className="md:hidden fixed top-16 left-0 right-0 z-40 bg-black p-6 flex flex-col space-y-4 text-white">
                    <Link to="inicio" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Início</Link>
                    <Link to="sobre" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Sobre Mim</Link>
                    <Link to="hard-skills" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Hard Skills</Link>
                    <Link to="linguas" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Línguas</Link>
                    <Link to="timeline" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Timeline</Link>
                    <Link to="projetos" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Projetos</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
