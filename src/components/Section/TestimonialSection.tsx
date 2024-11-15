'use client'
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import Image from "next/image";
import {motion} from "framer-motion"
import { TestimonialData } from "@/data/testimonial";


export default function TestimonialSection() {
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
    {/* Testimonials Section */}
    <section className="mt-12" data-aos="fade-left" >
        <h2 className="text-3xl font-bold uppercase text-center text-white mb-5 mt-5">Témoignages</h2>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            whileHover={{ x: 0 }} // Arrête le mouvement au survol
          >
            <div className="flex flex-wrap gap-12 justify-center md:grid md:grid-cols-2 lg:grid-cols-3">
          {TestimonialData.map((testimonial) => (
            <div 
            key={testimonial.id}
            className="p-6 rounded-lg shadow-md flex-shrink-0 w-full md:w-auto">
            <div className="flex items-center mb-4">
              <Image 
              src={testimonial.image} 
              alt="Client 1"
              width={48}
              height={48} 
              className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-lg font-semibold text-gold">{testimonial.name}</p>
                <p className="text-customColors-0">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-white">{testimonial.description}</p>
          </div>
          ))}
    </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}