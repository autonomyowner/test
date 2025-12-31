import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&q=80"
            alt="ALLOUANI Collection"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </motion.div>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Top decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-12"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs tracking-[0.5em] text-[#c9a962] uppercase mb-6"
        >
          The Art of Scent
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-[#f5f5dc] mb-8 leading-[0.9]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Timeless
          <br />
          <span className="italic text-[#c9a962]">Elegance</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-[#f5f5dc]/60 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Discover our curated collection of luxury fragrances,
          crafted for those who appreciate the art of scent.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/#collection">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#d4b978' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
            >
              Shop Collection
            </motion.button>
          </Link>
          <Link to="/#about">
            <motion.button
              whileHover={{ scale: 1.02, borderColor: '#c9a962', color: '#c9a962' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent border border-[#f5f5dc]/30 text-[#f5f5dc] text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
            >
              Our Story
            </motion.button>
          </Link>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mt-16"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-[#f5f5dc]/40 uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#f5f5dc]/40 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="text-[10px] tracking-[0.5em] text-[#f5f5dc]/30 uppercase -rotate-90 block origin-center whitespace-nowrap">
          Luxury Fragrances
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <span className="text-[10px] tracking-[0.5em] text-[#f5f5dc]/30 uppercase rotate-90 block origin-center whitespace-nowrap">
          Signature Scents
        </span>
      </motion.div>
    </section>
  );
}
