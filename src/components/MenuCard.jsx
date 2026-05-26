import React from 'react';
import { motion } from 'framer-motion';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MenuCard({ item }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-md">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span>{item.ratings}</span>
        </div>
        <div className="absolute top-3 left-3 bg-orange-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold shadow-md uppercase tracking-wide">
          {item.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl font-bold line-clamp-1" title={item.name}>{item.name}</h3>
          <span className="font-bold text-orange-500 text-lg">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 line-clamp-2">
          {item.description}
        </p>
        
        <button
          onClick={() => addToCart(item)}
          className="w-full py-2.5 rounded-xl border border-coffee-200 dark:border-gray-700 font-medium flex items-center justify-center gap-2 transition-all hover:bg-coffee-600 hover:text-white hover:border-transparent dark:hover:bg-coffee-500 group-active:scale-95"
        >
          <Plus size={18} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
