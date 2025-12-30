import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selectedSize) {
      setSelectedSize(product.sizes[1]); // Default to M
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: product.colors[0].name,
      size: selectedSize,
    });
    setSelectedSize(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${product.id}`}>
        <motion.article
          className="group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setSelectedSize(null);
          }}
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#141414] mb-5">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-[#0a0a0a]/60 flex flex-col items-center justify-center gap-4 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Size Selector */}
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 text-xs tracking-wider border transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-[#c9a962] border-[#c9a962] text-[#0a0a0a]'
                        : 'bg-transparent border-[#f5f5dc]/30 text-[#f5f5dc] hover:border-[#f5f5dc]'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleQuickAdd}
                whileHover={{ scale: 1.02, backgroundColor: '#d4b978' }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-[200px] py-3 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.15em] uppercase font-medium transition-colors"
              >
                {selectedSize ? 'Add to Cart' : 'Select Size'}
              </motion.button>
            </motion.div>

            {/* Color indicator */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {product.colors.map((color) => (
                <div
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-[#f5f5dc]/20"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="text-sm tracking-[0.1em] text-[#f5f5dc] uppercase group-hover:text-[#c9a962] transition-colors duration-300">
              {product.name}
            </h3>
            <p className="text-xs text-[#f5f5dc]/50 tracking-wide">
              {product.colors[0].name}
            </p>
            <p className="text-sm text-[#c9a962] tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
              {formatPrice(product.price, product.currency)}
            </p>
          </div>

          {/* Decorative line on hover */}
          <motion.div
            className="absolute -bottom-2 left-0 h-px bg-[#c9a962]"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.article>
      </Link>
    </motion.div>
  );
}
