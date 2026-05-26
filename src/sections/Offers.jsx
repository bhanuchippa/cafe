import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';

export default function Offers() {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offers" className="py-24 bg-coffee-800 dark:bg-dark-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full font-bold text-sm mb-6"
            >
              <Tag size={16} />
              Limited Time Offer
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg text-white mb-6"
            >
              Weekend Special: <br/>
              <span className="text-orange-500">Buy 1 Get 1 Free</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Enjoy our signature espresso drinks and artisanal pastries this weekend with our exclusive 2-for-1 offer. Perfect for sharing with someone special.
            </motion.p>
            
            {/* Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center lg:justify-start gap-4 mb-10"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px] text-center border border-white/10">
                <span className="block text-3xl font-bold text-white mb-1">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs text-orange-400 uppercase tracking-wider">Hours</span>
              </div>
              <div className="text-3xl font-bold text-white self-center">:</div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px] text-center border border-white/10">
                <span className="block text-3xl font-bold text-white mb-1">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs text-orange-400 uppercase tracking-wider">Mins</span>
              </div>
              <div className="text-3xl font-bold text-white self-center">:</div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px] text-center border border-white/10">
                <span className="block text-3xl font-bold text-white mb-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs text-orange-400 uppercase tracking-wider">Secs</span>
              </div>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="btn-primary"
            >
              Claim Offer Now
            </motion.button>
          </div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-[100px] opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800" 
                alt="Coffee cups" 
                className="relative z-10 w-full max-w-md mx-auto rounded-full border-8 border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
