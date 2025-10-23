import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Smile, Infinity, Zap, Users, BarChart } from 'lucide-react';

const Feature = ({ icon, title, children }) => (
  <div className="flex">
    <div className="flex-shrink-0 mr-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-blue/20 text-deep-blue">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-600">{children}</p>
    </div>
  </div>
);

export const PoweredByAI = () => {
  return (
    <section id="casos-exito" className="py-20 md:py-28 bg-soft-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Potenciados por IA de Vanguardia</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Nuestros agentes no solo responden, entienden y aprenden para ofrecer una personalización sin precedentes.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Feature icon={<BrainCircuit size={24} />} title="Comprensión del Lenguaje Natural (NLU)">
            Interpreta la intención del usuario, no solo las palabras clave.
          </Feature>
          <Feature icon={<Smile size={24} />} title="Análisis de Sentimiento">
            Adapta el tono de la conversación según el estado de ánimo del cliente.
          </Feature>
          <Feature icon={<Infinity size={24} />} title="Aprendizaje Continuo">
            Mejora con cada interacción, volviéndose más inteligente con el tiempo.
          </Feature>
          <Feature icon={<Zap size={24} />} title="Integración Flexible">
            Conecta fácilmente con tus sistemas CRM, ERP y otras herramientas.
          </Feature>
          <Feature icon={<Users size={24} />} title="Personalización a Escala">
            Crea experiencias únicas para miles de usuarios simultáneamente.
          </Feature>
          <Feature icon={<BarChart size={24} />} title="Análisis y Reportes">
            Obtén insights valiosos de cada conversación para tomar mejores decisiones.
          </Feature>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto text-center bg-white p-10 rounded-2xl shadow-lg border border-gray-100"
        >
          <p className="text-xl md:text-2xl font-medium text-gray-700">
            "Implementar los agentes de Open Revolution redujo nuestro tiempo de respuesta en un 90% y aumentó la satisfacción del cliente en 30 puntos. Es como tener al mejor empleado, disponible 24/7."
          </p>
          <div className="mt-6">
            <p className="font-bold text-gray-900">Ana García</p>
            <p className="text-gray-500">Directora de Operaciones, TechSolutions</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
