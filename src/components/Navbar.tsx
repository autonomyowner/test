import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#f5f5dc]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Algerian Flag - Always visible */}
          <div className="flex items-center">
            <svg width="24" height="16" viewBox="0 0 900 600" className="flex-shrink-0">
              <rect width="450" height="600" fill="#006233"/>
              <rect x="450" width="450" height="600" fill="#ffffff"/>
              <circle cx="450" cy="300" r="150" fill="#d21034"/>
              <circle cx="480" cy="300" r="120" fill="#ffffff"/>
              <polygon fill="#d21034" points="450,225 465,270 510,270 475,300 490,345 450,315 410,345 425,300 390,270 435,270"/>
            </svg>
          </div>

          {/* Navigation Links - Desktop only */}
          <div className="hidden md:flex items-center gap-10 ml-10">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/#collection" active={false}>Collection</NavLink>
            <NavLink to="/#about" active={false}>About</NavLink>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-3xl lg:text-4xl font-light tracking-[0.3em] text-[#f5f5dc]" style={{ fontFamily: 'Playfair Display, serif' }}>
                RS
              </span>
              <span className="text-[10px] tracking-[0.4em] text-[#f5f5dc]/60 uppercase mt-0.5">
                Rivorn Style
              </span>
            </motion.div>
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-6 lg:gap-10 ml-auto">
            {/* Instagram */}
            <a
              href="https://instagram.com/rivorn_style"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-xs tracking-[0.2em] text-[#f5f5dc]/70 hover:text-[#c9a962] transition-colors duration-300 uppercase"
            >
              Instagram
            </a>

            {/* Cart Button */}
            <motion.button
              onClick={() => setIsCartOpen(true)}
              className="relative group"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xs tracking-[0.2em] text-[#f5f5dc]/70 group-hover:text-[#c9a962] transition-colors duration-300 uppercase">
                Cart
              </span>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-4 w-5 h-5 bg-[#c9a962] text-[#0a0a0a] text-[10px] font-medium flex items-center justify-center rounded-full"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex flex-col gap-1.5 p-2">
              <span className="w-5 h-px bg-[#f5f5dc]"></span>
              <span className="w-5 h-px bg-[#f5f5dc]"></span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={`relative text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
        active ? 'text-[#c9a962]' : 'text-[#f5f5dc]/70 hover:text-[#f5f5dc]'
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="navIndicator"
          className="absolute -bottom-1 left-0 right-0 h-px bg-[#c9a962]"
        />
      )}
    </Link>
  );
}
