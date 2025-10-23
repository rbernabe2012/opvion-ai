import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';

const SolutionCard = ({ icon, title, description, href }) => (
  <motion.div 
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center justify-center w-16 h-16 bg-sky-blue/20 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <a href={href} className="font-semibold text-deep-blue hover:underline">
      Ver demo interactiva &rarr;
    </a>
  </motion.div>
);

export const Solutions = () => {
  return (
    <section id="soluciones" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestras Soluciones de IA</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Automatiza y mejora cada punto de contacto con el cliente.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <SolutionCard 
            icon={<MessageSquare size={32} className="text-deep-blue" />}
            title="Agentes de Texto"
            description="Respuestas instantáneas 24/7 en WhatsApp y web. Gestiona solicitudes, resuelve dudas y califica leads de forma automática."
            href="#"
          />
          <SolutionCard 
            icon={<Phone size={32} className="text-deep-blue" />}
            title="Agentes de Voz"
            description="Ofrece experiencias de voz casi humanas para agendar citas, realizar encuestas y gestionar llamadas de alto volumen."
            href="#"
          />
        </div>
      </div>
    </section>
  );
};
