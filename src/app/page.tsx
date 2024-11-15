'use client'
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css";
import HeroSections from '@/components/Section/HeroSections';
import AboutSection from '../components/Section/AboutSection';
import SkillsSection from '@/components/Section/SkillsSection';
import ExperienceSection from '@/components/Section/ExperienceSection';
import ProjectSection from '@/components/Section/ProjectSection';
import ServiceSection from '@/components/Section/ServiceSection';
import TestimonialSection from '@/components/Section/TestimonialSection';
import ContactSection from '@/components/Section/ContactSection';


export default function Home() {
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
      <div className="min-h-screen font-customFont2 bg-gray-700 p-8 overflow-y-hidden overflow-x-hidden">
      <HeroSections />
      <AboutSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <ProjectSection/>
      <ServiceSection/>
      <TestimonialSection/>
      <ContactSection/>
      </div>
    </>
  );
}
