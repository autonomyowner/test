import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products, formatPrice } from '../data/products';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    setProduct(found || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-[#f5f5dc]/60">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: product.colors[0].name,
      size: selectedSize,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 lg:pt-32">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-24">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs text-[#f5f5dc]/40 mb-12"
        >
          <Link to="/" className="hover:text-[#c9a962] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/#collection" className="hover:text-[#c9a962] transition-colors">
            Collection
          </Link>
          <span>/</span>
          <span className="text-[#f5f5dc]/60">{product.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-[#141414] overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-24 bg-[#141414] overflow-hidden transition-all duration-300 ${
                      selectedImage === index
                        ? 'ring-1 ring-[#c9a962]'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:py-8"
          >
            {/* Category */}
            <p className="text-[10px] tracking-[0.4em] text-[#c9a962] uppercase mb-4">
              {product.category}
            </p>

            {/* Title */}
            <h1
              className="text-3xl lg:text-4xl font-light text-[#f5f5dc] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p
              className="text-2xl text-[#c9a962] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {formatPrice(product.price, product.currency)}
            </p>

            {/* Description */}
            <p className="text-sm text-[#f5f5dc]/60 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Color */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] text-[#f5f5dc]/60 uppercase mb-4">
                Color: <span className="text-[#f5f5dc]">{product.colors[0].name}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <div
                    key={color.name}
                    className="w-8 h-8 rounded-full border-2 border-[#c9a962]"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-10">
              <p className="text-xs tracking-[0.2em] text-[#f5f5dc]/60 uppercase mb-4">
                Size: <span className="text-[#f5f5dc]">{selectedSize || 'Select'}</span>
              </p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 text-sm tracking-wider border transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-[#c9a962] border-[#c9a962] text-[#0a0a0a]'
                        : 'bg-transparent border-[#f5f5dc]/20 text-[#f5f5dc] hover:border-[#f5f5dc]/50'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              whileHover={{ scale: selectedSize ? 1.01 : 1 }}
              whileTap={{ scale: selectedSize ? 0.99 : 1 }}
              className={`w-full py-5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                selectedSize
                  ? 'bg-[#c9a962] text-[#0a0a0a] hover:bg-[#d4b978]'
                  : 'bg-[#141414] text-[#f5f5dc]/30 cursor-not-allowed'
              }`}
            >
              {isAdded ? 'Added to Cart' : selectedSize ? 'Add to Cart' : 'Select a Size'}
            </motion.button>

            {/* Features */}
            <div className="mt-12 pt-10 border-t border-[#f5f5dc]/10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Premium cotton blend',
                  'Ribbed cuffs & hem',
                  'Relaxed fit',
                  'Machine washable',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
                    <span className="text-xs text-[#f5f5dc]/60">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram CTA */}
            <motion.a
              href="https://instagram.com/rivorn_style"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-4 mt-10 text-xs tracking-[0.2em] text-[#c9a962] uppercase"
            >
              <span>Questions? DM us</span>
              <span className="w-8 h-px bg-[#c9a962]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
