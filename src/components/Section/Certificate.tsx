'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { certificationData } from "@/data/certificate";

export default function CertificationSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      mirror: true,
    });
  }, []);

  return (
    <section id='certificate' className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-3xl uppercase font-bold text-center text-white mb-12"
          data-aos="fade-down"
        >
          Certifications
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificationData.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white border-customColors border-2 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={cert.image}
                  alt={`${cert.name} certification`}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {cert.organization}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Obtenue en {cert.date}
                </p>
                <p className="text-gray-700 mb-4">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}