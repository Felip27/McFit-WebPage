
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
                    alt="Gym Background" 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mcfit-black via-transparent to-black/80"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center md:text-left mt-20">
                <div className="inline-block mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <span className="bg-mcfit-yellow text-mcfit-black font-bold px-4 py-1 text-sm uppercase tracking-[0.2em] transform -skew-x-12 inline-block">
                        Est. 2024
                    </span>
                </div>
                
                <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    TU CUERPO <br />
                    <span className="text-outline-yellow md:text-transparent md:text-outline-yellow text-mcfit-yellow">TU TEMPLO</span>
                </h1>
                
                <p className="font-sans text-gray-300 text-lg md:text-2xl max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    Bienvenido a <strong className="text-white">McFit Mario Carboni</strong>. 
                    Donde la tecnología se encuentra con el hierro. 
                    Entrena diferente.
                </p>

                <div className="flex flex-col md:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#shop" className="group relative px-8 py-4 bg-transparent border border-mcfit-yellow text-mcfit-yellow font-bold uppercase tracking-widest overflow-hidden">
                        <span className="absolute inset-0 w-full h-full bg-mcfit-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                        <span className="relative group-hover:text-black transition-colors duration-300">Empezar Ahora</span>
                    </a>
                    <a href="#location" className="px-8 py-4 bg-white/5 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                        Ver Ubicación
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="text-mcfit-yellow w-10 h-10" />
            </div>
            
            {/* Decorational Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-mcfit-yellow hidden md:block"></div>
            <div className="absolute top-1/4 left-10 w-2 h-20 bg-mcfit-yellow hidden md:block"></div>
        </section>
    );
};

export default Hero;
