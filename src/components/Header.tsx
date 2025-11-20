
import { useState } from "react";
import Avvvatars from "avvvatars-react"
import { Link } from "react-router-dom";

export default function Header() {
  
  const [nickname, setNickname] = useState("");

  return (
    <header className="bg-neutral-800 p-4 text-neutral-200 shadow-gray-50/10 shadow-md">
      <nav className="flex flex-col md:flex-row justify-around">
        <Link to="/"
            className="text-2xl font-semibold hover:text-cyan-500">
          Blog
        </Link>

        <ul className="flex flex-col text-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li className="font-semibold py-2 px-4 rounded-full border border-transparent hover:border-cyan-400 transition duration-300 cursor-pointer hover:bg-cyan-400 hover:text-black">
              <Link to="/projects">Proyectos</Link>
          </li>
          <li className="font-semibold py-2 px-4 rounded-full border border-transparent hover:border-cyan-400 transition duration-300 cursor-pointer hover:bg-cyan-400 hover:text-black">
              <Link to="/contacto" className="hover:text-gray-700">Contacto</Link>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-2">
          <input type="text"
          className="bg-neutral-900 p-2 rounded-2xl text-gray-400 text-center w-40"
          value={nickname}
          onChange={event => setNickname(event.target.value)}
          placeholder="ingresa tu nombre" />

          <Avvvatars
            value={nickname}
            style="character"
            // style="shape"
            size={30}
          />
          </div>
      </nav>
    </header>
  )
}


