export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  colors: ProductColor[];
  sizes: string[];
  category: string;
  inStock: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export const products: Product[] = [
  {
    id: 'parfum-noir-intense',
    name: 'Noir Intense',
    description: 'A bold and captivating fragrance with deep notes of oud, black amber, and smoky vetiver. Perfect for evening occasions and those who command attention.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80',
    ],
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Parfum',
    inStock: true,
  },
  {
    id: 'parfum-rose-elegance',
    name: 'Rose Elegance',
    description: 'A sophisticated floral bouquet featuring Damascus rose, peony petals, and a whisper of white musk. Timeless femininity in every drop.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80',
    ],
    colors: [
      { name: 'Rose', hex: '#d4a5a5' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Parfum',
    inStock: true,
  },
  {
    id: 'parfum-ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Fresh and invigorating with notes of sea salt, bergamot, and driftwood. Captures the essence of Mediterranean shores at dawn.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
      'https://images.unsplash.com/photo-1595425964071-2c1ecb10b52d?w=800&q=80',
    ],
    colors: [
      { name: 'Aqua', hex: '#5a9a9a' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Toilette',
    inStock: true,
  },
  {
    id: 'parfum-amber-royal',
    name: 'Amber Royal',
    description: 'Luxurious warmth with golden amber, sandalwood, and vanilla orchid. A regal scent for those with refined taste.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80',
      'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&q=80',
    ],
    colors: [
      { name: 'Amber', hex: '#c9a962' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Parfum',
    inStock: true,
  },
  {
    id: 'parfum-cedar-mystique',
    name: 'Cedar Mystique',
    description: 'Earthy and mysterious with Atlas cedar, patchouli, and black pepper. For the sophisticated soul who walks their own path.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800&q=80',
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&q=80',
    ],
    colors: [
      { name: 'Cedar', hex: '#8b6f4a' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Parfum',
    inStock: true,
  },
  {
    id: 'parfum-midnight-bloom',
    name: 'Midnight Bloom',
    description: 'A mysterious and seductive blend of night-blooming jasmine, dark plum, and smoky vanilla. For unforgettable evenings.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=80',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80',
    ],
    colors: [
      { name: 'Purple', hex: '#4a235a' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Parfum',
    inStock: true,
  },
  {
    id: 'parfum-white-musk',
    name: 'White Musk',
    description: 'Clean and sensual with white musk, lily of the valley, and soft woods. An elegant everyday fragrance with lasting power.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&q=80',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
    ],
    colors: [
      { name: 'White', hex: '#f5f5f5' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Toilette',
    inStock: true,
  },
  {
    id: 'parfum-golden-saffron',
    name: 'Golden Saffron',
    description: 'Luxurious and warm with precious saffron, leather accord, and smoky incense. For those who appreciate the finer things.',
    price: 0,
    currency: 'DZD',
    images: [
      'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=800&q=80',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80',
    ],
    colors: [
      { name: 'Gold', hex: '#d4af37' },
    ],
    sizes: ['30ml', '50ml', '100ml'],
    category: 'Eau de Parfum',
    inStock: true,
  },
];

export const formatPrice = (price: number, currency: string = 'DZD'): string => {
  if (price === 0) return 'Contact for price';
  return `${price.toLocaleString()} ${currency}`;
};
