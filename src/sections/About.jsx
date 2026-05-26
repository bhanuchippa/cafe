import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Coffee, Users, Award } from 'lucide-react';

const stats = [
  { id: 1, icon: Coffee, value: '50k+', label: 'Cups Served' },
  { id: 2, icon: Users, value: '10k+', label: 'Happy Customers' },
  { id: 3, icon: Award, value: '15+', label: 'Years Experience' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:w-5/6"
            >
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                alt="Barista making coffee" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-4 lg:-right-10 w-2/3 md:w-1/2 aspect-square rounded-2xl overflow-hidden border-8 border-white dark:border-dark-800 shadow-xl z-20 hidden sm:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800" 
                alt="Coffee Beans" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block"
            >
              Our Story
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg text-coffee-800 dark:text-white mb-6"
            >
              A Legacy of <span className="text-orange-500">Perfect</span> Roasts
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
            >
              Since 2008, Aroma Cafe has been a sanctuary for coffee lovers. We source our beans from sustainable farms across the globe, ensuring every cup delivers a rich, unforgettable experience. Our master baristas treat every pour as a work of art.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              {['Premium 100% Arabica Beans', 'Expertly Trained Baristas', 'Luxurious, Relaxing Environment'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                  <CheckCircle2 className="text-orange-500" size={24} />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="text-center sm:text-left">
                    <div className="inline-flex items-center justify-center p-3 bg-orange-50 dark:bg-orange-500/10 rounded-full text-orange-500 mb-3">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-coffee-800 dark:text-white">{stat.value}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
