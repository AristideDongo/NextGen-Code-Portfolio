interface Formation {
    titre: string;
    organisme: string;
    dateDebut: string;
    dateFin: string;
    resume: string;
    certification: string;
    competences: string[];
  }
  
export const formations: Formation[] = [
    {
      titre: "Développement Web avec React.js",
      organisme: "OpenClassrooms",
      dateDebut: "Janvier 2024",
      dateFin: "Mars 2024",
      resume: "Formation complète sur React.js couvrant les fondamentaux jusqu'aux concepts avancés comme les hooks, le routing et la gestion d'état. Réalisation de projets pratiques et mise en situation réelle.",
      certification: "Certificat de réussite OpenClassrooms",
      competences: [
        "React.js et ses hooks",
        "Gestion d'état avec Redux",
        "Routing avec React Router",
        "Tests unitaires avec Jest",
        "TypeScript en React"
      ]
    },
    {
      titre: "UI/UX Design Foundations",
      organisme: "Udemy",
      dateDebut: "Septembre 2023",
      dateFin: "Décembre 2023",
      resume: "Apprentissage des principes fondamentaux du design d'interface et de l'expérience utilisateur. Focus sur les bonnes pratiques et les outils modernes de design.",
      certification: "Certificat Udemy",
      competences: [
        "Wireframing",
        "Prototypage",
        "Design System",
        "Figma",
        "Recherche utilisateur"
      ]
    }
  ];