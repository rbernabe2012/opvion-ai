import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedIcon = () => {
  const [index, setIndex] = React.useState(0);
  const icons = ['🤖', '🧠'];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center justify-center text-4xl md:text-5xl mx-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {icons[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-soft-gray">
       <div className="absolute inset-0 bg-grid-sky-blue/[0.05] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6 text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
        >
          Conversaciones Inteligentes,
          <br />
          <span className="text-sky-blue">Resultados Reales</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
        >
          Transformamos respuestas simples en interacciones avanzadas con agentes virtuales de IA.
          De <span className="inline-block align-middle">🤖</span> a <span className="inline-block align-middle">🧠</span>, llevamos tu comunicación al siguiente nivel.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <a href="#soluciones" className="bg-deep-blue text-white font-bold text-lg px-8 py-4 rounded-xl hover:scale-105 transform transition-transform duration-300 shadow-lg">
            Descubre Nuestras Soluciones
          </a>
        </motion.div>
      </div>
    </section>
  );
};
