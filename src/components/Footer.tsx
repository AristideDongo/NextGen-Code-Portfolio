import Link from 'next/link';
import React from 'react';

import { FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {

  return (
    <footer className="bg-gray-700 border-t-4 border-customColors text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center">
      {/* Section de liens sociaux */}
      <div className="flex space-x-8 mb-4">
        <Link href="www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
          <FaLinkedin size={30} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="www.x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition duration-300">
          <FaXTwitter size={30} />
        </Link>
          <span className="sr-only">Twitter</span>
        <Link href="https://web.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
          <FaFacebook size={30} />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700 transition duration-300">
          <FaWhatsapp size={30} />
          <span className="sr-only">WhatsApp</span>
        </Link>
      </div>

      {/* Section de crédits ou mentions légales */}
      <div className="text-center">
        <p className="text-xl text-customColors capitalize mt-2">Merci pour cette visite ❤️!</p>
      </div>
    </div>
  </div>
</footer>
  );
};

