// @ts-ignore
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    // Estado para controlar a visibilidade do menu
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Função para fechar o menu ao clicar fora
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="p-4 fixed w-full top-0 z-60 border font-mono bg-black">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Menu para desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link to="inicio" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Início</Link>
                    <Link to="sobre" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Sobre Mim</Link>
                    <Link to="hard-skills" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Hard Skills</Link>
                    <Link to="linguas" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Línguas</Link>
                    <Link to="timeline" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Timeline</Link>
                    <Link to="projetos" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Projetos</Link>
                </div>

                {/* Ícone de menu hambúrguer para dispositivos móveis */}
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    {/* Três tracinhos */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Menu mobile */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={closeMenu}>
                <div className="flex flex-col space-y-4 bg-black text-white p-6">
                    <Link to="inicio" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Início</Link>
                    <Link to="sobre" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Sobre Mim</Link>
                    <Link to="hard-skills" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Hard Skills</Link>
                    <Link to="linguas" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Línguas</Link>
                    <Link to="timeline" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Timeline</Link>
                    <Link to="projetos" smooth={true} className="hover:text-gray-200 cursor-pointer" onClick={closeMenu}>Projetos</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
