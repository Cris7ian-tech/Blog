import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo o nombre */}
          <div className="text-2xl font-light text-blue-50">Mi Blog</div>

          {/* Botón hamburguesa (solo visible en móvil) */}
          <button
            className="md:hidden text-blue-50-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Icono hamburguesa / X */}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Enlaces (desktop) */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#blog"
              className="hover:text-blue-300 transition-colors duration-200">
              Blog
            </a>

            <a
              href="#doc"
              className="hover:text-blue-300 transition-colors duration-200">
              Doc
            </a>

            <a
              href="#contacto"
              className="hover:text-blue-300 transition-colors duration-200">
              Contacto
            </a>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a
            href="#blog"
            className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
          <a
            href="#doc"
            className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Doc
          </a>
          <a
            href="#contacto"
            className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}>
            Contacto
          </a>
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
