// Exemple de données pour le parcours éducatif
import Image from '@/images/etudiant-diplome-smiley-coup-moyen_23-2148950576.jpg'

export const educationData = [
  {
    id: 1,
    degree: "Master en Développement Web",
    school: "École Supérieure du Digital",
    location: "Paris, France",
    period: "2022 - 2024",
    description: "Spécialisation en développement web full-stack et architecture des applications modernes. Projets majeurs incluant le développement d'applications React et Node.js.",
    achievements: ["Major de promotion", "Projet innovant récompensé", "Stage chez TechCorp"],
    image: Image
  },
  {
    id: 2,
    degree: "Licence en Informatique",
    school: "Université de Lyon",
    location: "Lyon, France",
    period: "2019 - 2022",
    description: "Formation fondamentale en sciences informatiques, algorithmes et programmation. Focus sur les bases de données et la programmation orientée objet.",
    achievements: ["Mention Très Bien", "Participation à des hackathons", "Projet de recherche en IA"],
    image: Image
  },
  {
    id: 3,
    degree: "DUT Informatique",
    school: "IUT de Bordeaux",
    location: "Bordeaux, France",
    period: "2017 - 2019",
    description: "Formation technique en développement logiciel et gestion de projets informatiques. Apprentissage des bases du développement web et mobile.",
    achievements: ["Projets en entreprise", "Certification CISCO", "Association étudiante"],
    image: Image
  }
];