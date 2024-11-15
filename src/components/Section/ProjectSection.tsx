'use client'
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css";
import Link from "next/link";
import { ProjectData } from "@/data/project";

export default function ProjectSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
      once: false,
      easing: 'ease-in-out', // Type d'animation
      mirror: true,
    });
  }, [])
  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="mb-12" data-aos="fade-left" >
        <h2 className="text-3xl font-bold uppercase text-center text-white mb-5 mt-5">MES REALISATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectData.map((project) => (
            <div
              key={project.id}
              className="relative bg-white hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg overflow-hidden group">
              <Image
                src={project.image[0]}
                alt="Projet 1"
                width={300}
                height={300}
                className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <Link href={`/projects/${project.id}`} className="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300">
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}