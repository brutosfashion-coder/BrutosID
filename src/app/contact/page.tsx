'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 md:pt-28 pb-20 bg-cream px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-charcoal mb-4">
            Contact Us
          </h1>
          <p className="text-stone text-base md:text-lg max-w-lg">
            We&apos;d love to hear from you. Reach out with any questions or inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-charcoal font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded border border-sand bg-white text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-camel transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-charcoal font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded border border-sand bg-white text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-camel transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-charcoal font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded border border-sand bg-white text-charcoal text-sm placeholder:text-stone/50 focus:outline-none focus:border-camel transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-camel text-white text-xs tracking-[0.15em] uppercase rounded border border-camel-light hover:bg-camel-light transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-camel/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-camel" />
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-1">Visit Us</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Jl. Kemang Raya No. 45<br />
                  Jakarta Selatan, 12730
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-camel/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-camel" />
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-1">Email</h3>
                <p className="text-stone text-sm">hello@brutosid.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-camel/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-camel" />
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-1">Phone</h3>
                <p className="text-stone text-sm">+62 21 1234 5678</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
