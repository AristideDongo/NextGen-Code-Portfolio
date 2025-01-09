'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython,
  FaGitAlt, FaDocker, FaFigma, FaSass, FaBootstrap, FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, 
  SiRedux, SiPostgresql, SiFirebase
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 95, color: 'bg-orange-500' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: 'bg-blue-500' },
      { name: 'JavaScript', icon: FaJs, level: 88, color: 'bg-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, level: 85, color: 'bg-blue-600' },
      { name: 'React.js', icon: FaReact, level: 92, color: 'bg-cyan-400' },
      { name: 'Next.js', icon: TbBrandNextjs, level: 88, color: 'bg-white' },
      { name: 'Redux', icon: SiRedux, level: 80, color: 'bg-purple-500' },
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: FaNode, level: 85, color: 'bg-green-500' },
      { name: 'Python', icon: FaPython, level: 82, color: 'bg-blue-300' },
      { name: 'MongoDB', icon: SiMongodb, level: 78, color: 'bg-green-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: 'bg-blue-400' },
      { name: 'Firebase', icon: SiFirebase, level: 80, color: 'bg-yellow-500' },
    ]
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 90, color: 'bg-orange-600' },
      { name: 'Docker', icon: FaDocker, level: 75, color: 'bg-blue-500' },
      { name: 'AWS', icon: FaAws, level: 70, color: 'bg-yellow-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95, color: 'bg-cyan-400' },
      { name: 'Sass', icon: FaSass, level: 85, color: 'bg-pink-500' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 88, color: 'bg-purple-500' },
      { name: 'Figma', icon: FaFigma, level: 82, color: 'bg-purple-400' },
    ]
  }
];

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      mirror: true,
    });
  }, []);

  // Calculer le total des compétences par catégorie
  const getCategoryTotal = (category: string) => {
    const categoryData = skillsData.find((c) => c.category === category);
    return categoryData?.skills.reduce((total, skill) => total + skill.level, 0) || 0;
  };

  // Totaux des compétences
  const frontendTotal = getCategoryTotal('Frontend Development');
  const backendTotal = getCategoryTotal('Backend Development');
  const toolsTotal = getCategoryTotal('Tools & Others');

  // Année d'expérience
  const yearsOfExperience = 3;

  return (
    <section id='skills' className="py-20 -mb-[100px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-center text-white mb-16"
          data-aos="fade-down"
        >
          Compétences Techniques
        </h2>

        {/* Résumé des compétences */}
        <div 
          className="bg-gray-900 text-white rounded-xl p-6 mb-12 shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Résumé des Compétences
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Frontend Development</span>
              <span>{frontendTotal} / 700</span>
            </li>
            <li className="flex justify-between">
              <span>Backend Development</span>
              <span>{backendTotal} / 400</span>
            </li>
            <li className="flex justify-between">
              <span>Tools & Others</span>
              <span>{toolsTotal} / 600</span>
            </li>
            <li className="flex justify-between">
              <span>Années d&apos;expérience</span>
              <span>{yearsOfExperience} ans</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
