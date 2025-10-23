import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">Conversaciones Inteligentes, Resultados Reales.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Soluciones</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#soluciones" className="hover:text-white">Agentes de Texto</a></li>
              <li><a href="#soluciones" className="hover:text-white">Agentes de Voz</a></li>
              <li><a href="#industrias" className="hover:text-white">Industrias</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Empresa</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold tracking-wide">Contacto</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="mailto:hola@openrevolution.com" className="hover:text-white">hola@openrevolution.com</a></li>
              <li><a href="tel:+123456789" className="hover:text-white">+1 (234) 567-89</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Open Revolution. Todos los derechos reservados.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-white mx-2">Política de Privacidad</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white mx-2">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
