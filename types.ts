
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

export interface Workout {
    id: number;
    title: string;
    description: string;
    image: string;
    intensity: 'Alta' | 'Media' | 'Baja';
    videoId: string; // YouTube Video ID
}

export interface Facility {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}
