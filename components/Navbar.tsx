import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
    cart: CartItem[];
    toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cart, toggleCart }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const navLinks = [
        { name: 'Instalaciones', href: '#facilities' },
        { name: 'Entrenamientos', href: '#workouts' },
        { name: 'AI Coach', href: '#ai-coach' },
        { name: 'Shop', href: '#shop' },
        { name: 'Ubicación', href: '#location' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-mcfit-black/90 backdrop-blur-md py-4 border-b border-mcfit-gray' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                     {/* Placeholder for the Logo Image provided by user mentally */}
                    <div className="text-3xl font-display font-bold italic tracking-tighter text-white">
                        McFIT <span className="text-mcfit-yellow">CARBONI</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-mcfit-yellow transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mcfit-yellow transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    
                    <button 
                        onClick={toggleCart} 
                        className="relative p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ShoppingBag className="text-mcfit-yellow" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-white text-mcfit-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                     <button onClick={toggleCart} className="relative">
                        <ShoppingBag className="text-mcfit-yellow" size={24} />
                         {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-white text-mcfit-black text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-mcfit-black border-t border-mcfit-gray p-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-display font-bold uppercase text-white hover:text-mcfit-yellow"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;