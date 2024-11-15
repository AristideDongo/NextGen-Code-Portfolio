'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('header');
  const [isOpen, setIsOpen] = useState(false);

  const menuActive = () => {
    setIsOpen(!isOpen);
  };

  const menuClose = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'header';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id') || 'header';
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed font-customFont2 z-50 top-0 left-0 right-0 bg-gray-700 border-b-4 border-customColors shadow-md flex items-center justify-between px-6 py-4">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <a href="#" className="text-4xl font-bold text-white">
          Desire<span className="text-customColors">John</span>
        </a>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="text-white text-2xl md:hidden focus:outline-none"
        onClick={menuActive}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${isOpen ? 'block' : 'hidden'
          } absolute md:relative md:flex md:items-center md:justify-end top-16 md:top-0 left-0 w-full md:w-auto bg-gray-700 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300`}
      >
        <li className={activeSection === 'header' ? 'text-customColors' : ''}>
          <Link href="#header" onClick={menuClose} className="hover:text-customColors text-xl">
            Accueil
          </Link>
        </li>
        <li className={activeSection === 'about' ? 'text-customColors' : ''}>
          <Link href="#about" onClick={menuClose} className="hover:text-customColors text-xl">
            À propos
          </Link>
        </li>
        <li
          className={activeSection === 'projects' ? 'text-customColors' : ''}
        >
          <Link href="#projects" onClick={menuClose} className="hover:text-customColors text-xl">
            Réalisations
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="hidden md:block">
        <Link
          href="#contact"
          className="bg-customColors text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300 text-xl"
        >
          Entrez en contact
        </Link>
      </div>
    </nav>
  );
}
