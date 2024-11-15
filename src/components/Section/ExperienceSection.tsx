'use client'
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import { Experience } from "@/data/experience";

export default function ExperienceSection() {
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
    {/* Experience Section */}
    <section id="timeline" className="py-16 text-white" data-aos="fade-right" >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <h2 className="text-3xl font-bold uppercase text-center mb-12">Mon Voyage Professionnel</h2>
   {Experience.map((experience) => (
    <div
    key={experience.id} 
    className="relative">
    {/* <!-- Timeline Items --> */}
    <div className="flex flex-col items-start">
      {/* <!-- Timeline Item 2 --> */}
      <div className="flex mb-12 w-full">
        {/* <!-- Year --> */}
        <div className="flex flex-col items-center mr-8">
          <div className="text-black font-bold bg-customColors p-2 rounded-full mb-2">{experience.year}</div>
          {/* <!-- Vertical Line --> */}
          <div className="w-1 h-full bg-customColors"></div>
        </div>
        {/* <!-- Content --> */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full">
          <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
          <p>{experience.description}</p>
        </div>
      </div>     
    </div>
  </div>
   ))}
 </div>
</section>
    </>
  )
}