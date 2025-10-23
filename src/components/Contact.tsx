import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-soft-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Listo para Revolucionar tu Comunicación?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hablemos sobre cómo nuestros agentes de IA pueden ayudarte. Solicita una demo gratuita y sin compromiso.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6">
            <div>
              <label htmlFor="name" className="font-medium text-gray-700">Nombre completo</label>
              <input type="text" id="name" name="name" className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-blue focus:border-sky-blue" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="font-medium text-gray-700">Email de trabajo</label>
              <input type="email" id="email" name="email" className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-blue focus:border-sky-blue" placeholder="tu@empresa.com" />
            </div>
            <div>
              <label htmlFor="message" className="font-medium text-gray-700">Mensaje</label>
              <textarea id="message" name="message" rows={4} className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-sky-blue focus:border-sky-blue" placeholder="¿Cómo podemos ayudarte?"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-deep-blue text-white font-bold text-lg px-8 py-3 rounded-xl hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
                Solicitar Demo
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
