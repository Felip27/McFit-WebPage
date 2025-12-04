
import React, { useState } from 'react';
import { Workout } from '../types';
import { Dumbbell, Activity, Heart, Zap, Play, X } from 'lucide-react';

const workouts: Workout[] = [
    { id: 1, title: 'Hipertrofia', description: 'Entrenamiento enfocado en el crecimiento muscular puro.', image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1000&auto=format&fit=crop', intensity: 'Alta', videoId: 't4nS3o6iS7s' }, // Bodybuilding
    { id: 2, title: 'HIIT', description: 'Intervalos de alta intensidad para quemar grasa rápidamente.', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000&auto=format&fit=crop', intensity: 'Alta', videoId: 'cZnsLVArIt8' }, // HIIT
    { id: 3, title: 'Yoga & Movilidad', description: 'Recuperación activa y mejora del rango de movimiento.', image: 'https://www.hola.com/horizon/43/5c8fd02e953d-gettyimages-1445516635.jpg', intensity: 'Baja', videoId: 'sTANio_2E0Q' }, // Yoga
    { id: 4, title: 'Powerlifting', description: 'Fuerza bruta. Sentadilla, Press Banca y Peso Muerto.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop', intensity: 'Alta', videoId: 'RjexvOAsVtI' }, // Deadlift
];

const Workouts: React.FC = () => {
    const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

    const openModal = (workout: Workout) => {
        setSelectedWorkout(workout);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedWorkout(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="workouts" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-mcfit-yellow font-bold tracking-widest uppercase mb-2 block">Train Like a Pro</span>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
                        PROGRAMAS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-mcfit-yellow to-white">ENTRENAMIENTO</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workouts.map((workout, index) => (
                        <div 
                            key={workout.id} 
                            className="group relative h-[400px] overflow-hidden border border-gray-800 hover:border-mcfit-yellow transition-colors duration-300 cursor-pointer"
                            onClick={() => openModal(workout)}
                        >
                            {/* Background Image */}
                            <img 
                                src={workout.image} 
                                alt={workout.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>

                            {/* Play Button Overlay (appears on hover) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <div className="bg-mcfit-yellow/90 p-4 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                                    <Play fill="black" className="text-black ml-1" size={32} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-2 text-mcfit-yellow">
                                        {index === 0 ? <Dumbbell size={20} /> : index === 1 ? <Zap size={20} /> : index === 2 ? <Heart size={20} /> : <Activity size={20} />}
                                        <span className="text-xs font-bold uppercase tracking-widest">Intensidad: {workout.intensity}</span>
                                    </div>
                                    <h3 className="font-display text-3xl font-bold text-white mb-2 leading-none">{workout.title}</h3>
                                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {workout.description}
                                    </p>
                                    <span className="text-xs text-mcfit-yellow uppercase font-bold mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Ver Video Explicativo &rarr;
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedWorkout && (
                <div 
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div 
                        className="relative w-full max-w-5xl bg-black border border-mcfit-yellow rounded-lg overflow-hidden shadow-[0_0_50px_rgba(243,230,0,0.3)] animate-slide-up"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-mcfit-dark">
                            <h3 className="font-display text-2xl font-bold text-white uppercase">{selectedWorkout.title}</h3>
                            <button 
                                onClick={closeModal} 
                                className="text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Video Container (Responsive Aspect Ratio) */}
                        <div className="relative pt-[56.25%] bg-black">
                            <iframe 
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedWorkout.videoId}?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1`}
                                title={selectedWorkout.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Footer Description */}
                        <div className="p-6 bg-mcfit-dark">
                            <div className="flex items-center gap-4 mb-2">
                                <span className={`px-3 py-1 rounded text-xs font-bold uppercase ${
                                    selectedWorkout.intensity === 'Alta' ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'
                                }`}>
                                    Intensidad {selectedWorkout.intensity}
                                </span>
                            </div>
                            <p className="text-gray-300">
                                {selectedWorkout.description} Este programa está diseñado meticulosamente por Mario Carboni para asegurar resultados máximos.
                                Sigue la técnica mostrada en el video para evitar lesiones y maximizar la hipertrofia.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Workouts;
