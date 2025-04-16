// @ts-ignore
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="p-4 fixed w-full top-0 z-60 border font-mono">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                {/* Centralizando os links */}
                <div className="flex space-x-6">
                    <Link to="inicio" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Início</Link>
                    <Link to="sobre" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Sobre Mim</Link>
                    <Link to="hard-skills" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Hard Skills</Link>
                    <Link to="linguas" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Línguas</Link>
                    <Link to="timeline" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Timeline</Link>
                    <Link to="projetos" smooth={true} className="text-white hover:text-gray-200 cursor-pointer">Projetos</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
