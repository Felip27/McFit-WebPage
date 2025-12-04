import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location: React.FC = () => {
    return (
        <section id="location" className="py-24 bg-black border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Info */}
                    <div className="lg:w-1/3">
                        <h2 className="font-display text-5xl font-bold text-white mb-8">
                            NUESTRA <span className="text-mcfit-yellow">BASE</span>
                        </h2>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-mcfit-dark rounded border border-white/10">
                                    <MapPin className="text-mcfit-yellow" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase mb-1">Dirección</h4>
                                    <p className="text-gray-400">Av. Libertador 1234, Ciudad Capital<br />Edificio Carboni, Planta Baja</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-mcfit-dark rounded border border-white/10">
                                    <Clock className="text-mcfit-yellow" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase mb-1">Horarios</h4>
                                    <p className="text-gray-400">Lun - Vie: 06:00 - 23:00</p>
                                    <p className="text-gray-400">Sáb: 08:00 - 20:00</p>
                                    <p className="text-gray-400">Dom: 09:00 - 14:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-mcfit-dark rounded border border-white/10">
                                    <Phone className="text-mcfit-yellow" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase mb-1">Contacto</h4>
                                    <p className="text-gray-400">+54 11 1234-5678</p>
                                    <p className="text-gray-400">info@mcfitcarboni.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Styled Map (Grayscale Placeholder to simulate style) */}
                    <div className="lg:w-2/3 h-[400px] lg:h-auto rounded-lg overflow-hidden relative group">
                        {/* 
                            Note: In a real production app with an API Key, use <iframe ... src="https://www.google.com/maps/embed/v1/..." /> 
                            or @react-google-maps/api. 
                            Here we use a styled placeholder linking to real maps.
                        */}
                        <a 
                            href="https://www.google.com/maps" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-full relative"
                        >
                             <img 
                                src="https://picsum.photos/seed/map/1000/600?grayscale" 
                                alt="Ubicación en mapa" 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300" 
                            />
                            <div className="absolute inset-0 bg-mcfit-yellow/10 pointer-events-none"></div>
                            
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="bg-mcfit-yellow text-black px-4 py-2 font-bold uppercase tracking-widest shadow-lg animate-bounce">
                                    Ver en Google Maps
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;