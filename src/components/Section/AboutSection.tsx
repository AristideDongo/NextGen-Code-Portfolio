'use client'
import Image from "next/image"
import { useEffect } from "react"
import ImagePerso from '@/images/Sans titre.png'
import AOS from "aos"
import "aos/dist/aos.css";

export default function AboutSection() {
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
    {/* About Section */}
    <section id="about" className="mb-12 flex items-center px-8" data-aos="fade-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 ">
              <h2 className="text-3xl font-bold uppercase text-white mb-4">
                À la Découverte de Moi
              </h2>
              <p className="text-lg text-white mb-4">
                Je suis un développeur junior passionné par le développement web
                et la création d&apos;interfaces utilisateur. Avec une solide
                formation en développement et une bonne maîtrise des
                technologies modernes, je m&apos;efforce de concevoir des solutions
                fonctionnelles et esthétiques qui répondent aux besoins des
                utilisateurs.
              </p>
              <p className="text-lg text-white mb-4">
                J&apos;ai acquis des compétences en HTML, CSS, JavaScript, React, et
                Tailwind CSS. Je suis également familiarisé avec les principes
                de base pour créer des sites web réactifs et performants, en
                veillant à respecter les bonnes pratiques en matière
                d&apos;accessibilité.
              </p>
              <p className="text-lg text-white">
                Toujours motivé pour relever de nouveaux défis et travailler sur
                des projets stimulants, je suis ouvert à toute opportunité pour
                développer mes compétences et contribuer à des projets
                intéressants. N&apos;hésitez pas à me contacter pour discuter de vos
                idées ou en savoir plus sur ce que je peux apporter à votre
                projet.
              </p>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 hidden md:block lg:ml-12">
              <Image
                src={ImagePerso}
                width={1000}
                height={1000}
                alt="Photo de profil"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}