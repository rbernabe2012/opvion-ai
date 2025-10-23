import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Landmark, ShoppingCart } from 'lucide-react';

const IndustryCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center justify-center w-16 h-16 bg-sky-blue/20 rounded-full mb-6 mx-auto">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export const Industries = () => {
  return (
    <section id="industrias" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Adaptado a Tu Industria</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Soluciones de IA conversacional para los desafíos específicos de tu sector.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <IndustryCard 
            icon={<HeartPulse size={32} className="text-deep-blue" />}
            title="Salud"
            description="Optimiza la gestión de citas, recordatorios y seguimiento de pacientes de forma segura y eficiente."
          />
          <IndustryCard 
            icon={<Landmark size={32} className="text-deep-blue" />}
            title="Banca y Finanzas"
            description="Automatiza consultas de saldo, precalificación de créditos y soporte en fraudes con total seguridad."
          />
          <IndustryCard 
            icon={<ShoppingCart size={32} className="text-deep-blue" />}
            title="Retail y E-commerce"
            description="Ofrece recomendaciones, seguimiento de pedidos y atención post-venta 24/7 para fidelizar clientes."
          />
        </div>
      </div>
    </section>
  );
};
