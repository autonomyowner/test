import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#f5f5dc]/5">
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-4xl font-light tracking-[0.3em] text-[#f5f5dc]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  RS
                </span>
                <span className="block text-[10px] tracking-[0.4em] text-[#f5f5dc]/60 uppercase mt-1">
                  Rivorn Style
                </span>
              </motion.div>
            </Link>

            <p className="text-sm text-[#f5f5dc]/40 mt-6 max-w-sm leading-relaxed">
              Crafting timeless menswear for the discerning gentleman.
              Each piece embodies the essence of understated luxury.
            </p>

            {/* Social Link */}
            <motion.a
              href="https://instagram.com/rivorn_style"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 mt-8 text-xs tracking-[0.2em] text-[#c9a962] uppercase"
            >
              <span>@rivorn_style</span>
              <span className="w-8 h-px bg-[#c9a962]" />
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-[#f5f5dc]/60 uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'Collection', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                    className="text-sm text-[#f5f5dc]/40 hover:text-[#c9a962] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-[#f5f5dc]/60 uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://instagram.com/rivorn_style"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#f5f5dc]/40 hover:text-[#c9a962] transition-colors duration-300"
                >
                  Instagram DM
                </a>
              </li>
              <li className="text-sm text-[#f5f5dc]/40">
                Algeria
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f5f5dc]/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] tracking-[0.2em] text-[#f5f5dc]/30 uppercase">
              &copy; {new Date().getFullYear()} Rivorn Style. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-[10px] tracking-[0.2em] text-[#f5f5dc]/30 uppercase">
                Premium Menswear
              </span>
              <span className="w-1 h-1 rounded-full bg-[#c9a962]/50" />
              <span className="text-[10px] tracking-[0.2em] text-[#f5f5dc]/30 uppercase">
                Est. 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
