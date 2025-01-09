'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Squeeze } from 'hamburger-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('header');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuActive = () => {
    setIsOpen(!isOpen);
  };

  const menuClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // Gestion du scroll pour l'effet de fond
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Gestion des sections actives
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 font-customFont2 transition-all duration-300
        ${scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold text-white hover:opacity-90 transition-opacity">
              Desire<span className="text-customColors">John</span>
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <Squeeze
              color="white"
              size={24}
              toggled={isOpen}
              toggle={menuActive}
              label="Toggle menu"
            />
          </div>

          {/* Navigation Links */}
          <div 
            className={`${
              isOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0 md:translate-x-0 md:opacity-100'
            } fixed md:relative top-[60px] md:top-0 right-0 w-64 md:w-auto h-screen md:h-auto
            bg-gray-900/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none
            transition-all duration-300 ease-in-out
            md:flex md:items-center md:space-x-1`}
          >
            <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-2 p-6 md:p-0">
              {[
                { href: '#header', label: 'Accueil' },
                { href: '#about', label: 'À propos' },
                { href: '#projects', label: 'Réalisations' },
                { href: '#skills', label: 'Compétences' },
                { href: '#formations', label: 'Parcours' },
                { href: '#experience', label: 'Expériences' },
                { href: '#certificate', label: 'Certifications' }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={menuClose}
                    className={`block px-3 py-2 text-lg rounded-md transition-colors
                      ${activeSection === item.href.slice(1)
                        ? 'text-customColors font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-customColors hover:bg-orange-500 text-white px-6 py-2.5 rounded-lg
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                text-lg font-medium"
            >
              Entrez en contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}