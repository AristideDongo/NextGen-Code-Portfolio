'use client'
import { useEffect } from "react";
import {motion} from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SkillsSection() {
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
     {/* Skills Section */}
     <section id="skills" className="mb-12" data-aos="fade-right" >
        <h2 className="text-3xl font-bold uppercase text-center text-white mb-4">SPECIALITES</h2>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            whileHover={{ x: 0 }}
          >
            <FaHtml5 className="text-9xl text-orange-600 flex-shrink-0" />
            <FaCss3Alt className="text-9xl text-blue-600 flex-shrink-0" />
            <FaJs className="text-9xl text-yellow-500 flex-shrink-0" />
            <FaReact className="text-9xl text-blue-500 flex-shrink-0" />
            <RiNextjsFill className="text-9xl text-black flex-shrink-0" />
          </motion.div>
        </div>
      </section>
    </>
  )
}