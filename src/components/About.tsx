import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80"
                alt="ALLOUANI Parfum"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
            </div>

            {/* Floating accent */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-4 lg:-right-8 bottom-12 bg-[#0a0a0a] border border-[#c9a962]/20 p-6 lg:p-8"
            >
              <p className="text-2xl lg:text-3xl text-[#c9a962]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Premium
              </p>
              <p className="text-xs tracking-[0.2em] text-[#f5f5dc]/60 uppercase mt-2">
                Quality
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#c9a962]" />
              <span className="text-[10px] tracking-[0.5em] text-[#c9a962] uppercase">
                Our Philosophy
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light text-[#f5f5dc] mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Crafted for the
              <br />
              <span className="italic text-[#c9a962]">Discerning Soul</span>
            </h2>

            <div className="space-y-6 text-[#f5f5dc]/60 leading-relaxed">
              <p>
                At ALLOUANI, we believe that true elegance lies in scent.
                Our collection embodies the essence of luxury &mdash;
                refined, memorable, and effortlessly sophisticated.
              </p>
              <p>
                Each fragrance in our collection is carefully crafted with
                premium ingredients and artisan expertise. From morning rituals to
                evening occasions, our scents leave a lasting impression.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { label: 'Premium Ingredients', desc: 'Finest essences' },
                { label: 'Long Lasting', desc: '12+ hour wear' },
                { label: 'Various Sizes', desc: '30ml, 50ml, 100ml' },
                { label: 'Fast Delivery', desc: 'Across Algeria' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <p className="text-sm tracking-[0.1em] text-[#f5f5dc] uppercase">
                    {feature.label}
                  </p>
                  <p className="text-xs text-[#f5f5dc]/40 mt-1">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.instagram.com/allouani__parfumerie1/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-4 mt-12 text-xs tracking-[0.2em] text-[#c9a962] uppercase"
            >
              <span>Follow Our Journey</span>
              <span className="w-8 h-px bg-[#c9a962]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
