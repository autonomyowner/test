import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#f5f5dc]/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-[#f5f5dc]/10">
              <div>
                <h2 className="text-lg tracking-[0.15em] text-[#f5f5dc] uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Your Cart
                </h2>
                <p className="text-xs text-[#f5f5dc]/40 mt-1">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </p>
              </div>
              <motion.button
                onClick={() => setIsCartOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center text-[#f5f5dc]/60 hover:text-[#f5f5dc] transition-colors"
              >
                <span className="text-2xl font-light">&times;</span>
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <p className="text-[#f5f5dc]/40 text-sm tracking-wide mb-6">
                    Your cart is empty
                  </p>
                  <motion.button
                    onClick={() => setIsCartOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 border border-[#f5f5dc]/20 text-[#f5f5dc]/70 text-xs tracking-[0.2em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              ) : (
                <ul className="space-y-6">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.li
                        key={`${item.id}-${item.color}-${item.size}`}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 pb-6 border-b border-[#f5f5dc]/5"
                      >
                        {/* Image */}
                        <div className="w-24 h-32 bg-[#141414] flex-shrink-0 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-sm tracking-[0.1em] text-[#f5f5dc] uppercase">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#f5f5dc]/40 mt-1">
                            {item.color} / {item.size}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4 mt-auto">
                            <div className="flex items-center border border-[#f5f5dc]/10">
                              <button
                                onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center text-[#f5f5dc]/60 hover:text-[#f5f5dc] transition-colors"
                              >
                                -
                              </button>
                              <span className="w-8 h-8 flex items-center justify-center text-sm text-[#f5f5dc]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center text-[#f5f5dc]/60 hover:text-[#f5f5dc] transition-colors"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id, item.color, item.size)}
                              className="text-xs text-[#f5f5dc]/40 hover:text-red-400 transition-colors tracking-wider uppercase"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#f5f5dc]/10 px-6 py-6 space-y-4">
                <p className="text-xs text-[#f5f5dc]/40 tracking-wide text-center">
                  Contact us on Instagram for pricing
                </p>

                {/* Checkout Button */}
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.01, backgroundColor: '#d4b978' }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium transition-colors"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>

                {/* Continue Shopping */}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 text-center text-xs text-[#f5f5dc]/50 tracking-[0.15em] uppercase hover:text-[#f5f5dc] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
