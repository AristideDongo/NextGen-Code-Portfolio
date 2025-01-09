'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skillsData } from "@/data/skills";



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