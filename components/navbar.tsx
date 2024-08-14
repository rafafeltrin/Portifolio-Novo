'use client'
import React, { useState } from 'react';
import { FaCode, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#030014] bg-opacity-97 shadow-lg z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
                {/* Logo e Nome */}
                <div className="flex items-center space-x-2">
                    <FaCode className='text-white' size={25} />
                    <span className="text-white text-xl font-semibold">Rafael Feltrin</span>
                </div>

                {/* Menu Centralizado */}
                <ul className="hidden md:flex space-x-8 text-white text-lg rounded-xl p-1 px-2">
                    <li>
                        <a href="#inicio" className="hover:text-gray-300 transition duration-300">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#sobre" className="hover:text-gray-300 transition duration-300">
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#projetos" className="hover:text-gray-300 transition duration-300">
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#skiils" className="hover:text-gray-300 transition duration-300">
                            Skiils
                        </a>
                    </li>
                </ul>

                {/* Links de Redes Sociais à Direita */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://github.com/rafafeltrin" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
                        <FaGithub size={25} />
                    </a>
                    <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
                        <FaLinkedin size={25} />
                    </a>
                </div>

                {/* Menu Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Dropdown Mobile */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-center bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#2c3e50] py-4 space-y-4">
                    <li>
                        <a href="#about" className="text-white text-lg hover:text-gray-300 transition duration-300">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-white text-lg hover:text-gray-300 transition duration-300">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white text-lg hover:text-gray-300 transition duration-300">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white text-lg hover:text-gray-300 transition duration-300">
                            Contact
                        </a>
                    </li>
                    <div className="flex space-x-4 pt-4">
                        <a href="https://github.com/rafafeltrin" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
                            <FaGithub size={25} />
                        </a>
                        <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
                            <FaLinkedin size={25} />
                        </a>
                    </div>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;


