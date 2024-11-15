'use client'
import { ProjectData } from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetailsProps {
    params: { id: string };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const { id } = params;
    const project = ProjectData.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    const buttonBack = () => {
        window.location.href = '/';
    };

    return (
        <div className="bg-gray-700 text-white">
            <div className="max-w-screen-lg mx-auto p-8">
                <div className="flex flex-col items-center">
                    {/* Conteneur dynamique pour les images */}
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(
                            project.image.length,
                            3
                        )} gap-8 w-full`}
                    >
                        {project.image.map((image, index) => (
                            <div key={index} className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <Image
                                    src={image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-xl transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                    <h1 className="text-5xl mt-5 font-bold text-center mb-8 text-customColors">{project.title}</h1>
                    <p className="text-xl text-gray-100 text-center mt-6 mb-6 max-w-3xl">{project.description}</p>
                    
                    {/* Stacks alignés en ligne */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {project.stack.map((stack, index) => (
                            <p key={index} className="bg-customColors text-black rounded px-4 py-2 text-sm md:text-md font-medium">
                                {stack.name}
                            </p>
                        ))}
                    </div>

                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 bg-customColors text-black py-3 px-6 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-300"
                    >
                        Voir le projet en ligne
                    </Link>
                </div>

                <button
                    onClick={buttonBack}
                    className="mt-6 px-6 py-3 bg-red-600 text-black rounded-lg font-medium hover:bg-red-700 transition-colors duration-300"
                >
                    Retour
                </button>
            </div>
        </div>
    );
}
