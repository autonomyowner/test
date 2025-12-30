import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  wilaya: string;
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    wilaya: '',
  });

  const shippingCost = 600; // DZD
  const finalTotal = totalPrice + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store order in localStorage for reference
    const orderData = {
      customer: formData,
      items: items.map((item) => ({
        name: item.name,
        color: item.color,
        size: item.size,
        quantity: item.quantity,
        price: item.price,
      })),
      subtotal: totalPrice,
      shipping: shippingCost,
      total: finalTotal,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('revorn_last_order', JSON.stringify(orderData));

    // Open Instagram (since user only wants Instagram contact)
    window.open('https://instagram.com/rivorn_style', '_blank');

    setIsSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-24 lg:pt-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center">
            <h1
              className="text-3xl text-[#f5f5dc] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your cart is empty
            </h1>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-24 lg:pt-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-lg mx-auto"
          >
            <div className="w-16 h-16 mx-auto mb-8 border border-[#c9a962] rounded-full flex items-center justify-center">
              <span className="text-[#c9a962] text-2xl">&#10003;</span>
            </div>
            <h1
              className="text-3xl text-[#f5f5dc] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Order Submitted
            </h1>
            <p className="text-sm text-[#f5f5dc]/60 mb-8">
              Please send your order details via Instagram DM to @rivorn_style
              to confirm your purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://instagram.com/rivorn_style"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium"
              >
                Open Instagram
              </motion.a>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 border border-[#f5f5dc]/20 text-[#f5f5dc] text-xs tracking-[0.2em] uppercase"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

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
          <span className="text-[#f5f5dc]/60">Checkout</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-3xl font-light text-[#f5f5dc] mb-10"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Checkout
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-[0.15em] text-[#f5f5dc]/60 uppercase mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#141414] border border-[#f5f5dc]/10 text-[#f5f5dc] text-sm focus:outline-none focus:border-[#c9a962] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] text-[#f5f5dc]/60 uppercase mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#141414] border border-[#f5f5dc]/10 text-[#f5f5dc] text-sm focus:outline-none focus:border-[#c9a962] transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs tracking-[0.15em] text-[#f5f5dc]/60 uppercase mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="0555 00 00 00"
                  className="w-full px-4 py-3 bg-[#141414] border border-[#f5f5dc]/10 text-[#f5f5dc] text-sm focus:outline-none focus:border-[#c9a962] transition-colors placeholder:text-[#f5f5dc]/20"
                />
              </div>

              {/* Wilaya */}
              <div>
                <label className="block text-xs tracking-[0.15em] text-[#f5f5dc]/60 uppercase mb-2">
                  Wilaya *
                </label>
                <select
                  name="wilaya"
                  value={formData.wilaya}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#141414] border border-[#f5f5dc]/10 text-[#f5f5dc] text-sm focus:outline-none focus:border-[#c9a962] transition-colors"
                >
                  <option value="">Select Wilaya</option>
                  <option value="Alger">Alger</option>
                  <option value="Oran">Oran</option>
                  <option value="Constantine">Constantine</option>
                  <option value="Annaba">Annaba</option>
                  <option value="Blida">Blida</option>
                  <option value="Batna">Batna</option>
                  <option value="Setif">Setif</option>
                  <option value="Djelfa">Djelfa</option>
                  <option value="Sidi Bel Abbes">Sidi Bel Abbes</option>
                  <option value="Biskra">Biskra</option>
                  <option value="Tebessa">Tebessa</option>
                  <option value="Tiaret">Tiaret</option>
                  <option value="Bechar">Bechar</option>
                  <option value="Tlemcen">Tlemcen</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, backgroundColor: '#d4b978' }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-medium mt-8"
              >
                Place Order via Instagram
              </motion.button>

              <p className="text-xs text-[#f5f5dc]/40 text-center">
                You will be redirected to Instagram to confirm your order
              </p>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-[#141414] p-8 sticky top-32">
              <h2
                className="text-xl text-[#f5f5dc] mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Order Summary
              </h2>

              {/* Items */}
              <ul className="space-y-6 mb-8">
                {items.map((item) => (
                  <li
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="border border-[#f5f5dc]/10 p-4"
                  >
                    {/* Large Product Image */}
                    <div className="aspect-square w-full bg-[#1a1a1a] overflow-hidden mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Product Details */}
                    <div className="space-y-2">
                      <h3 className="text-sm text-[#f5f5dc] tracking-wide uppercase">{item.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-[#f5f5dc]/50">
                          {item.color} / Size: {item.size}
                        </p>
                        <p className="text-xs text-[#f5f5dc]/50">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-lg text-[#c9a962]" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Totals */}
              <div className="border-t border-[#f5f5dc]/10 pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#f5f5dc]/60">Subtotal</span>
                  <span className="text-[#f5f5dc]">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#f5f5dc]/60">Shipping</span>
                  <span className="text-[#f5f5dc]">{formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-lg pt-4 border-t border-[#f5f5dc]/10">
                  <span className="text-[#f5f5dc]">Total</span>
                  <span className="text-[#c9a962]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-8 p-4 border border-[#c9a962]/20">
                <p className="text-xs text-[#f5f5dc]/60 leading-relaxed">
                  Payment is Cash on Delivery (COD). Your order will be confirmed
                  via Instagram DM after submission.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
