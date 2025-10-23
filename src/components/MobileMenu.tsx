import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../config/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40"
        >
          <nav className="flex flex-col items-start p-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="font-medium text-gray-800 hover:text-deep-blue transition-colors w-full py-3 rounded-md hover:bg-gray-50 px-3"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={onClose}
              className="w-full mt-4 bg-deep-blue text-white font-semibold px-5 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-center"
            >
              Demo Gratuita
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
