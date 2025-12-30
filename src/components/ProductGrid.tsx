import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#c9a962]/50" />
            <span className="text-[10px] tracking-[0.5em] text-[#c9a962] uppercase">
              Collection
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#c9a962]/50" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#f5f5dc] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Premium <span className="italic text-[#c9a962]">Knitwear</span>
          </h2>

          <p className="text-sm text-[#f5f5dc]/50 max-w-lg mx-auto tracking-wide leading-relaxed">
            Each piece is crafted with meticulous attention to detail,
            using only the finest materials for enduring quality.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 lg:mt-28 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-[#f5f5dc]/40 uppercase mb-8">
            All sweaters priced at 4,500 DZD
          </p>

          <motion.a
            href="https://instagram.com/rivorn_style"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 border border-[#f5f5dc]/20 text-[#f5f5dc]/70 text-xs tracking-[0.2em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
          >
            Follow @rivorn_style
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
