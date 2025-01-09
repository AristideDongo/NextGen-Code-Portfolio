'use client'
import { useEffect } from "react";
import Image from "next/image";
import Image1 from '@/images/Coat_of_arms_of_Ivory_Coast_(heraldical).svg.png';
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSections() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-in-out',
            mirror: true,
        });
    }, []);

    return (
        <>
            {/* Header Section */}
            <section
                id="header"
                className="flex flex-col-reverse md:flex-row items-center mt-16 md:mt-20 mx-6 md:mx-24 justify-between mb-12"
                data-aos="fade-right"
            >
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-7xl font-customFont font-bold text-white mb-4">
                        Desire<span className="text-customColors">John</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white mb-8">
                        Junior JavaScript Developer
                    </p>
                    <a
                        href="#services"
                        className="inline-block bg-transparent text-lg md:text-2xl font-semibold text-customColors border border-customColors py-4 px-5 rounded-md hover:bg-customColors hover:text-black shadow-lg transition duration-300"
                    >
                        En savoir plus
                    </a>
                </div>

                {/* Right Image */}
                <div className="flex-1 mb-8 md:mb-0 text-center">
                    <Image
                        src={Image1}
                        alt="Portfolio Image"
                        width={400}
                        height={384}
                        className="w-64 h-auto md:w-96 rounded-lg mx-auto"
                    />
                </div>
            </section>
        </>
    );
}
