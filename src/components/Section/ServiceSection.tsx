'use client'
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import { Services } from "@/data/service";

export default function ServiceSection() {
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
    {/* Services Section */}
    <section id="services" className="py-16" data-aos="fade-right" >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <h2 className="text-3xl font-bold uppercase text-white text-center mb-12">Mes Expertises à Votre Service</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
     {Services.map((service) => (
      <div
      key={service.id} 
      className="p-6 rounded-lg border-2 border-customColors shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold text-customColors-0 mb-4">{service.title}</h3>
      <p className="text-white">{service.description}</p>
    </div>
     ))}
   </div>
 </div>
</section>
    </>
  )
}