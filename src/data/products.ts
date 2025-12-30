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
    id: 'knit-sweater-charcoal',
    name: 'Classic Knit Sweater',
    description: 'Premium quality ribbed knit sweater crafted from soft, breathable cotton blend. Features a relaxed fit with ribbed cuffs and hem for a timeless silhouette.',
    price: 4500,
    currency: 'DZD',
    images: ['/images/01.jpg', '/images/02.jpg', '/images/03.jpg'],
    colors: [
      { name: 'Charcoal', hex: '#4a4a4a' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Sweaters',
    inStock: true,
  },
  {
    id: 'knit-sweater-olive',
    name: 'Heritage Knit Sweater',
    description: 'Elevated everyday essential in rich olive green. Made from premium cotton with a comfortable oversized fit perfect for layering.',
    price: 4500,
    currency: 'DZD',
    images: ['/images/oldmeoneytshirt.jpg', '/images/old-money-tshirt.jpg'],
    colors: [
      { name: 'Olive', hex: '#5a6a4a' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Sweaters',
    inStock: true,
  },
  {
    id: 'knit-sweater-black',
    name: 'Essential Knit Sweater',
    description: 'The foundation of any refined wardrobe. Pure black knit sweater with impeccable construction and a versatile slim fit.',
    price: 4500,
    currency: 'DZD',
    images: ['/images/05.jpg', '/images/rivorn_style02/1.png'],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Sweaters',
    inStock: true,
  },
  {
    id: 'knit-sweater-camel',
    name: 'Signature Knit Sweater',
    description: 'Warm camel tones in our signature ribbed knit. A sophisticated choice that pairs effortlessly with any outfit.',
    price: 4500,
    currency: 'DZD',
    images: ['/images/10.jpg', '/images/09.jpg'],
    colors: [
      { name: 'Camel', hex: '#8b6f4a' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Sweaters',
    inStock: true,
  },
  {
    id: 'knit-sweater-teal',
    name: 'Artisan Knit Sweater',
    description: 'Deep teal hues meet premium craftsmanship. A statement piece that elevates your everyday aesthetic.',
    price: 4500,
    currency: 'DZD',
    images: ['/images/11.jpg', '/images/12.jpg'],
    colors: [
      { name: 'Teal', hex: '#2a5a5a' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Sweaters',
    inStock: true,
  },
];

export const formatPrice = (price: number, currency: string = 'DZD'): string => {
  return `${price.toLocaleString()} ${currency}`;
};
