
import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

const products: Product[] = [
    { id: 101, name: 'Whey Isolate Gold', price: 45.99, category: 'Proteína', image: 'https://www.farmacialeloir.com.ar/img/articulos/2024/12/imagen2_star_nutrition_platinum_whey_protein_imagen2.jpg', description: '90% pureza, absorción rápida.' },
    { id: 102, name: 'Pre-Workout Igniter', price: 32.50, category: 'Energía', image: 'https://farmacityar.vtexassets.com/arquivos/ids/251652/154546_suplemento-dietario-whey-protein-sabor-chocolate-x-453-gr_imagen-1.jpg?v=638422216484930000', description: 'Cafeína anhidra y beta-alanina.' },
    { id: 103, name: 'BCAA Recovery', price: 24.99, category: 'Recuperación', image: 'https://cdn.newgarden.com.ar/media/catalog/product/cache/14b8c7d087bc6840a9bc9c926e4c587f/w/h/whey-x-pro-ena-double-rich-chocolate-x-1-kg.jpg', description: 'Ratio 2:1:1 para evitar catabolismo.' },
    { id: 104, name: 'Creatina Monohidrato', price: 19.99, category: 'Fuerza', image: 'https://www.enasport.com/cdn/shop/products/100__Whey_vainilla.jpg?v=1704391128&width=2048', description: 'Micronizada para mejor solubilidad.' },
];

interface ShopProps {
    addToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ addToCart }) => {
    return (
        <section id="shop" className="py-24 bg-mcfit-black clip-diagonal-reverse relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white text-center">
                        FUEL YOUR <span className="text-stroke-yellow text-mcfit-yellow">AMBITION</span>
                    </h2>
                    <div className="w-24 h-1 bg-white mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-mcfit-dark p-4 rounded-sm hover:shadow-[0_0_20px_rgba(243,230,0,0.1)] transition-all duration-300 flex flex-col">
                            <div className="relative overflow-hidden mb-4 bg-white/5 aspect-square rounded flex items-center justify-center">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-2 right-2 bg-mcfit-yellow text-black text-xs font-bold px-2 py-1 uppercase rounded-sm">
                                    {product.category}
                                </div>
                            </div>
                            
                            <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-mcfit-yellow transition-colors">{product.name}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                            
                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-xl font-bold text-white">${product.price}</span>
                                <button 
                                    onClick={() => addToCart(product)}
                                    className="bg-white text-black p-2 rounded-full hover:bg-mcfit-yellow transition-colors hover:rotate-90 duration-300"
                                    aria-label="Añadir al carrito"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
