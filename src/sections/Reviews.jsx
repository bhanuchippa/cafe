import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import reviewsData from '../data/reviewsData.json';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white dark:bg-dark-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-coffee-800 dark:text-white"
          >
            What Our <span className="text-orange-500">Guests</span> Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-cream dark:bg-dark-900 rounded-2xl p-8 relative border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 text-orange-500/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 italic mb-8 relative z-10 text-sm leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-dark-800 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-coffee-800 dark:text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Verified Guest</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
