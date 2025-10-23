import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Construimos <span className="text-sky-blue">Cerebros Digitales</span> para Negocios Innovadores
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            En Open Revolution, no solo creamos chatbots. Diseñamos y construimos agentes de IA avanzados que actúan como una extensión inteligente de tu equipo. Nuestra misión es hacer que la tecnología conversacional sea más humana, accesible y efectiva para empresas que buscan liderar el futuro.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
