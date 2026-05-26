import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg text-coffee-800 dark:text-white"
          >
            Visit <span className="text-orange-500">Aroma Cafe</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: MapPin, title: 'Our Location', content: '123 Coffee Street, Espresso District, NY 10001' },
              { icon: Phone, title: 'Call Us', content: '+1 (555) 123-4567\n+1 (555) 987-6543' },
              { icon: Mail, title: 'Email Us', content: 'hello@aromacafe.com\nbookings@aromacafe.com' },
              { icon: Clock, title: 'Opening Hours', content: 'Mon-Fri: 7am - 8pm\nSat-Sun: 8am - 10pm' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-50 dark:bg-dark-900 rounded-full mb-6">
                    <Icon className="text-orange-500 w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-coffee-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line text-sm">{item.content}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px] border border-gray-200 dark:border-gray-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1683050186981!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aroma Cafe Location"
              className="filter dark:invert-[90%] dark:hue-rotate-180 dark:contrast-[85%]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
