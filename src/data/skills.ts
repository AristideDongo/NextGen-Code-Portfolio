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