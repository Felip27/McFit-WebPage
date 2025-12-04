
import React from 'react';
import { Facility } from '../types';

const facilities: Facility[] = [
    { id: 1, title: 'Zona de Peso Libre', description: 'Mancuernas hasta 60kg, racks olímpicos y plataformas de levantamiento.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, title: 'Cardio Teatro', description: 'Cintas de correr de última generación con pantallas inmersivas.', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, title: 'Functional Box', description: 'Césped artificial, trineos, kettlebells y estructuras de calistenia.', image: 'https://i.pinimg.com/736x/d9/1f/d6/d91fd66329fef9c9228ddcb747739704.jpg' },
    { id: 4, title: 'Zona de Recuperación', description: 'Sauna, crioterapia y sillones de masaje post-entreno.', image: 'https://www.cambiatufisico.com/wp-content/uploads/recuperacion-fitness.jpg' },
];

const Facilities: React.FC = () => {
    return (
        <section id="facilities" className="py-24 bg-mcfit-dark clip-diagonal relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-2">
                            NUESTRAS <span className="text-mcfit-yellow">INSTALACIONES</span>
                        </h2>
                        <div className="h-1 w-24 bg-mcfit-yellow"></div>
                    </div>
                    <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-right">
                        Diseñadas para maximizar tu rendimiento. Espacios abiertos, maquinaria premium y ambiente motivador.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    
                    {/* Item 1 - Wide */}
                    <div className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-sm border border-white/5">
                        <img src={facilities[0].image} alt={facilities[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                        <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-display text-2xl font-bold text-white uppercase">{facilities[0].title}</h3>
                            <p className="text-mcfit-yellow text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">{facilities[0].description}</p>
                        </div>
                    </div>

                     {/* Item 2 - Tall */}
                     <div className="md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-sm border border-white/5">
                        <img src={facilities[1].image} alt={facilities[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                         <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-display text-2xl font-bold text-white uppercase">{facilities[1].title}</h3>
                            <p className="text-mcfit-yellow text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">{facilities[1].description}</p>
                        </div>
                    </div>

                    {/* Item 3 - Standard */}
                    <div className="md:col-span-1 row-span-1 group relative overflow-hidden rounded-sm border border-white/5">
                        <img src={facilities[2].image} alt={facilities[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                         <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-display text-2xl font-bold text-white uppercase">{facilities[2].title}</h3>
                            <p className="text-mcfit-yellow text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">{facilities[2].description}</p>
                        </div>
                    </div>

                    {/* Item 4 - Wide (filling the gap) */}
                    <div className="md:col-span-3 row-span-1 group relative overflow-hidden rounded-sm border border-white/5">
                         <img src={facilities[3].image} alt={facilities[3].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                         <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-display text-2xl font-bold text-white uppercase">{facilities[3].title}</h3>
                            <p className="text-mcfit-yellow text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">{facilities[3].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
