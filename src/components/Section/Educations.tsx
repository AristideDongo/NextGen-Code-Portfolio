'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { educationData } from "@/data/educations";

export default function EducationPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      mirror: true,
    });
  }, []);

  return (
    <div id='educations' className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 
          className="text-3xl uppercase font-bold text-center text-white mb-16"
          data-aos="fade-down"
        >
          Educations
        </h1>

        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />

          {educationData.map((education, index) => (
            <div
              key={education.id}
              className="mb-16 md:mb-24"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-5/12">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={education.image}
                        alt={education.school}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-blue-600 font-semibold">
                        {education.period}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2">
                        {education.degree}
                      </h3>
                      <h4 className="text-xl text-gray-700 mt-1">
                        {education.school}
                      </h4>
                      <p className="text-gray-600 mt-2">
                        {education.location}
                      </p>
                      <p className="text-gray-700 mt-4">
                        {education.description}
                      </p>
                      <div className="mt-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Points clés :</h5>
                        <ul className="list-disc pl-5">
                          {education.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point central de la timeline */}
                <div className="hidden md:block w-2/12">
                  <div className="w-8 h-8 bg-customColors rounded-full mx-auto border-4 border-white shadow" />
                </div>

                {/* Espace pour l'alignement alterné */}
                <div className="hidden md:block w-5/12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}