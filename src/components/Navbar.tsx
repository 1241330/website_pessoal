'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('pt');
    const langRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLangMenu = () => setIsLangOpen(!isLangOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const closeLangMenu = () => setIsLangOpen(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                closeLangMenu();
            }
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        closeLangMenu();
        router.push(`/${lang}`);
    };

    return (
        <nav className="p-8 fixed w-full top-0 z-50 border border-gray-400 font-mono bg-black">
            <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                {/* Idioma */}
                <div className="relative" ref={langRef}>
                    <button
                        onClick={toggleLangMenu}
                        className="text-white hover:text-gray-200"
                    >
                        {language.toUpperCase()}
                    </button>
                    {isLangOpen && (
                        <div className="absolute mt-2 bg-black text-white rounded shadow-md">
                            <button onClick={() => changeLanguage('pt')}
                                    className="block px-4 py-2 hover:bg-gray-600 w-full text-left">PT
                            </button>
                            <button onClick={() => changeLanguage('en')}
                                    className="block px-4 py-2 hover:bg-gray-600 w-full text-left">EN
                            </button>
                        </div>
                    )}
                </div>

                {/* Botão mobile */}
                <button className="md:hidden text-white z-50" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                {/* Links - Desktop */}
                <div className="hidden md:flex space-x-6 ml-auto">
                    <a href={`/${language}`} className="text-white hover:text-gray-200">Início</a>
                    <a href={`/${language}`} className="text-white hover:text-gray-200">Sobre Mim</a>
                    <a href={`/${language}`} className="text-white hover:text-gray-200">Hard Skills</a>
                    <a href={`/${language}`} className="text-white hover:text-gray-200">Línguas</a>
                    <a href={`/${language}`} className="text-white hover:text-gray-200">Timeline</a>
                    <a href={`/${language}`} className="text-white hover:text-gray-200">Projetos</a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div ref={menuRef}
                     className="md:hidden fixed top-16 left-0 right-0 z-40 bg-black p-6 flex flex-col space-y-4 text-white border-t-4 border-gray-400">
                    <a href={`/${language}`} className="hover:text-gray-200" onClick={closeMenu}>Início</a>
                    <a href={`/${language}`} className="hover:text-gray-200" onClick={closeMenu}>Sobre Mim</a>
                    <a href={`/${language}`} className="hover:text-gray-200" onClick={closeMenu}>Hard Skills</a>
                    <a href={`/${language}`} className="hover:text-gray-200" onClick={closeMenu}>Línguas</a>
                    <a href={`/${language}`} className="hover:text-gray-200" onClick={closeMenu}>Timeline</a>
                    <a href={`/${language}`} className="hover:text-gray-200" onClick={closeMenu}>Projetos</a>

                    {/* Idiomas no mobile */}
                    <div className="mt-4">
                        <button onClick={() => changeLanguage('pt')}
                                className="block text-white hover:bg-gray-600 w-full py-2">PT
                        </button>
                        <button onClick={() => changeLanguage('en')}
                                className="block text-white hover:bg-gray-600 w-full py-2">EN
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
