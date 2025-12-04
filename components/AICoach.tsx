import React, { useState } from 'react';
import { getAIMotivation } from '../services/geminiService';
import { Brain, Sparkles, Terminal } from 'lucide-react';

const AICoach: React.FC = () => {
    const [motivation, setMotivation] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [activeMode, setActiveMode] = useState<'aggressive' | 'philosophical' | 'scientific'>('aggressive');

    const handleGenerate = async () => {
        setLoading(true);
        const text = await getAIMotivation(activeMode);
        setMotivation(text);
        setLoading(false);
    };

    return (
        <section id="ai-coach" className="py-20 bg-mcfit-gray relative overflow-hidden border-y border-mcfit-yellow/20">
            {/* Background Tech Patterns */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#F3E600 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left Column: UI Interface */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-black border border-mcfit-yellow p-1 rounded-lg shadow-[0_0_30px_rgba(243,230,0,0.15)]">
                            <div className="bg-mcfit-dark rounded p-6 h-[400px] flex flex-col relative overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-2">
                                        <Brain className="text-mcfit-yellow animate-pulse" />
                                        <span className="font-display font-bold text-white tracking-wider">MarIO</span>
                                    </div>
                                    
                                </div>

                                {/* Modes */}
                                <div className="flex gap-2 mb-6">
                                    {(['aggressive', 'philosophical', 'scientific'] as const).map((mode) => (
                                        <button
                                            key={mode}
                                            onClick={() => setActiveMode(mode)}
                                            className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                                                activeMode === mode 
                                                ? 'bg-mcfit-yellow text-black border-mcfit-yellow' 
                                                : 'bg-transparent text-gray-500 border-gray-700 hover:border-gray-500'
                                            }`}
                                        >
                                            {mode}
                                        </button>
                                    ))}
                                </div>

                                {/* Output Area */}
                                <div className="flex-grow flex items-center justify-center text-center p-4">
                                    {loading ? (
                                        <div className="flex flex-col items-center gap-2">
                                            <Sparkles className="animate-spin text-mcfit-yellow" />
                                            <span className="text-xs text-mcfit-yellow font-mono">GENERANDO NEURO-CONEXIÓN...</span>
                                        </div>
                                    ) : motivation ? (
                                        <p className="font-display text-2xl md:text-3xl text-white leading-tight animate-slide-up">
                                            "{motivation}"
                                        </p>
                                    ) : (
                                        <div className="text-gray-600 font-mono text-sm">
                                            <Terminal size={40} className="mx-auto mb-2 opacity-50" />
                                            ¡OBTEN TU DOSIS DE MOTIVACION!
                                            <br />
                                            SELECCIONA UN MODO Y ACTIVA.
                                        </div>
                                    )}
                                </div>

                                {/* Action Button */}
                                <button 
                                    onClick={handleGenerate}
                                    disabled={loading}
                                    className="mt-4 w-full bg-white/5 hover:bg-mcfit-yellow hover:text-black text-white border border-white/20 hover:border-mcfit-yellow py-3 font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    {loading ? 'Procesando...' : 'Generar Motivación'} <Sparkles size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                            MENTALIDAD <br />
                            <span className="text-mcfit-yellow">ARTIFICIALMENTE MEJORADA</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            En McFit, no solo entrenamos el cuerpo. Usamos la tecnología más avanzada para empujar tu mente al límite. 
                            ¿Necesitas un empujón? ¿Un dato científico? ¿O que te griten como un sargento? 
                            Nuestra IA está lista.
                        </p>
                        <div className="p-4 border-l-4 border-mcfit-yellow bg-white/5 inline-block text-left">
                            <p className="text-sm text-gray-300 italic">
                                "La innovación distingue a los líderes de los seguidores."
                            </p>
                            <span className="text-xs text-mcfit-yellow font-bold uppercase mt-2 block">- Mario Carboni</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AICoach;