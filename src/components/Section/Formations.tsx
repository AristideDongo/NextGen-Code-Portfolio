import React from 'react';
import { CalendarDays, Award, BookOpen } from 'lucide-react';
import { formations } from '@/data/formations';

const FormationsPage = () => {
  return (
    <div id='formations' className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold uppercase text-center text-transparent bg-clip-text bg-white mb-6">
            Mon Parcours de Formation
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Passionné par le développement web et le design, je maintiens mes compétences à jour
            à travers une formation continue et des certifications reconnues.
          </p>
        </div>

        {/* Liste des formations */}
        <div className="space-y-12">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-lg bg-opacity-90 rounded-2xl shadow-xl overflow-hidden border border-indigo-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">
                    {formation.titre}
                  </h2>
                  <div className="flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
                    <Award className="w-5 h-5 mr-2" />
                    {formation.certification}
                  </div>
                </div>
                
                {/* Métadonnées */}
                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-indigo-500" />
                    {formation.organisme}
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="w-5 h-5 mr-2 text-indigo-500" />
                    {formation.dateDebut} - {formation.dateFin}
                  </div>
                </div>

                {/* Résumé */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {formation.resume}
                </p>

                {/* Compétences */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Compétences acquises
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {formation.competences.map((competence, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-sm font-medium shadow-sm"
                      >
                        {competence}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormationsPage;