'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Classic Oxford Shirt',
    price: 'Rp 450.000',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80',
    category: 'Shirts',
  },
  {
    name: 'Wool Blend Blazer',
    price: 'Rp 1.250.000',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
    category: 'Outerwear',
  },
  {
    name: 'Leather Watch',
    price: 'Rp 850.000',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80',
    category: 'Accessories',
  },
  {
    name: 'Linen Trousers',
    price: 'Rp 550.000',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&q=80',
    category: 'Trousers',
  },
  {
    name: 'Cashmere Sweater',
    price: 'Rp 780.000',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80',
    category: 'Knitwear',
  },
  {
    name: 'Italian Leather Belt',
    price: 'Rp 350.000',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    category: 'Accessories',
  },
];

export default function ShopPage() {
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
            Shop
          </h1>
          <p className="text-stone text-base md:text-lg max-w-lg">
            Discover our curated collection of premium menswear essentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-sand/30 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <p className="text-xs text-camel uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <h3 className="text-sm md:text-base text-charcoal font-medium mb-1">
                {product.name}
              </h3>
              <p className="text-stone text-sm">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
