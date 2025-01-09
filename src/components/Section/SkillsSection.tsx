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

  return (
    <section id='skills' className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-center text-white mb-16"
          data-aos="fade-down"
        >
          Compétences Techniques
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, idx) => (
            <div 
              key={category.category}
              className="bg-gray-800 rounded-xl p-6 shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="relative">
                      <div className="flex items-center mb-2">
                        <Icon className={`text-2xl ${skill.color} mr-3`} />
                        <span className="text-white">{skill.name}</span>
                        <span className="ml-auto text-white">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${skill.color} bg-opacity-80`}
                          style={{ 
                            width: `${skill.level}%`,
                            transition: 'width 1s ease-in-out'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}