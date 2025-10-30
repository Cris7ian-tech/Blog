import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 text-center py-4">
        <p>
          © {new Date().getFullYear()} Mi Blog — Creado con{" "}
          <span className="text-blue-300">React</span> y{" "}
          <span className="text-sky-400">Tailwind CSS</span>
        </p>
      </footer>
  )
}

export default Footer;