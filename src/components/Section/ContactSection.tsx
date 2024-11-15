'use client'
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée de l'animation en millisecondes
          once: false,
          easing: 'ease-in-out', // Type d'animation
          mirror: true,
        });
      }, []);
  return (
    <>
    {/* Contact Section */}
    <section id="contact" className="mt-2" data-aos="fade-right" >
      <div className="max-w-7xl border-t-4 border-customColors border-dashed mb-5 mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold mt-5 uppercase text-white mb-6">Envoyez-moi un Message</h2>
    <p className="text-lg text-white mb-8">Si vous avez des questions ou souhaitez en savoir plus, n&apos;hésitez pas à me contacter.</p>
    
    <div className="flex flex-col items-center space-y-4 mb-8">
      <a href="mailto:example@gmail.com" className=" bg-gray-800 p-2 border-2 rounded-md border-customColors flex items-center text-customColors hover:text-black hover:bg-customColors transition duration-300">
        <AiOutlineMail className="w-6 h-6 mr-2" />
        <span>example@gmail.com</span>
      </a>

      <a href="tel:+225 1010101010" className=" bg-gray-800 p-2 border-2 rounded-md border-customColors flex items-center text-customColors hover:text-black hover:bg-customColors transition duration-300">
        <BsTelephone className="w-6 h-6 mr-2" />
        <span>+225 10 10 10 10 10</span>
      </a>

      <a href="https://maps.google.com/?q=Ci,Bondoukou,Zanzan" className=" bg-gray-800 p-2 border-2 rounded-md border-customColors flex items-center text-customColors hover:text-black hover:bg-customColors transition duration-300">
        <FaMapMarkerAlt className="w-6 h-6 mr-2" />
        <span>Ci,Bondoukou,Zanzan</span>
      </a>
    </div>
  </div>
      </section>
    </>
  )
}