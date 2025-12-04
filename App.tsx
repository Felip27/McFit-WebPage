import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Workouts from './components/Workouts';
import AICoach from './components/AICoach';
import Shop from './components/Shop';
import Location from './components/Location';
import WhatsAppButton from './components/WhatsAppButton';
import { Product, CartItem } from './types';
import { X, Trash2 } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-mcfit-black min-h-screen text-white font-sans selection:bg-mcfit-yellow selection:text-black">
      <Navbar cart={cart} toggleCart={() => setIsCartOpen(!isCartOpen)} />
      
      <main>
        <Hero />
        <Facilities />
        <Workouts />
        <AICoach />
        <Shop addToCart={addToCart} />
        <Location />
      </main>

      <footer className="bg-black py-10 border-t border-gray-900 text-center">
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          &copy; {new Date().getFullYear()} McFit Mario Carboni. Todos los derechos reservados.
        </p>
      </footer>

      <WhatsAppButton />

      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-96 bg-mcfit-dark shadow-2xl transform transition-transform duration-300 z-[60] border-l border-white/10 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-bold uppercase text-white">Tu Carrito</h2>
            <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white">
              <X />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">Tu carrito está vacío.</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-4 bg-black/20 p-4 rounded border border-white/5">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-mcfit-yellow text-sm">${item.price}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-400">Cant: {item.quantity}</span>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold text-mcfit-yellow">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-mcfit-yellow text-black font-bold uppercase py-4 hover:bg-white transition-colors duration-300">
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay for Cart */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-[55] backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default App;