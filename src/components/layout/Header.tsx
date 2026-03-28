
import  {useUserName}  from "../../shared/hooks/useUserName.tsx";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [ name ] = useUserName();
  const [isOpen, setIsOpen] = useState(false);

  return (

    <>
      <header className="sticky top-0 z-50 px-4 sm:px-6 md:px-10 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
      
        <nav className="flex items-center justify-between py-4 max-w-7xl mx-auto hover:*:text-[#fb7259]">
          
          <NavLink to="/" className="hidden md:block text-3xl font-bold text-white mb-4 md:mb-0">
          MyBlog
          </NavLink>

          {/** MOBILE MENU **/}
          <section className="flex md:hidden">
            {/* HAMBURGUESA LATE*/}
            <div className="space-y-2 -ml-1 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-200 group-hover:bg-[#fb7259]"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-200 group-hover:bg-[#fb7259]"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-200 group-hover:bg-[#fb7259]"></span>
            </div>

            <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
              <div className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsOpen(false)}
                >
                <svg className="h-8 w-8 text-gray-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
          {/* NAVEGACION MOBILE OPEN */}
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-600 my-8 uppercase">
                  <NavLink
                  to="/"
                  className={({isActive}) => isActive ? "text-[#eb7d69]" : "text-white"}> 
                  
                  Inicio
                  </NavLink>
                </li>


                <li className="border-b border-gray-600 my-8 uppercase">
                  <NavLink
                  to="/blog"
                  className={({isActive}) => isActive ? "text-[#eb7d69]" : "text-white"}> 

                  Blog
                  </NavLink>
                </li>
                
                <li className="border-b border-gray-600 my-8 uppercase">
                  <NavLink
                  to="/contacto"
                  className={({isActive}) => isActive ? "text-[#eb7d69]" : "text-white"}> 
                  
                  Contacto
                  </NavLink>
                </li>
            { name && (
                <div className="flex flex-col items-center mt-6 md:hidden gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#fb7259] flex items-center justify-center text-white font-bold">
                    {name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-slate-300 pl-2">{name}</span>
                </div>
            )}
              </ul>
            </div>
  

          </section>

          {/* NAVEGACION DESKTOP */}
          <ul className="hidden text-lg space-x-8 md:flex">
            <li>
                <NavLink
                to="/"
                  className={({isActive}) => isActive ? "text-[#eb7d69]" : "text-white"}>
                    Inicio
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/projects"
                  className={({isActive}) => isActive ? "text-[#eb7d69]" : "text-white"}>
                    Projectos
                </NavLink>
            </li>

            <li>
                <NavLink
                to="/contacto"
                  className={({isActive}) => isActive ? "text-[#eb7d69]" : "text-white"}>
                    Contacto
                </NavLink>
            </li>
        {/* ESTO ES PARA EL AVATAR */}
        { name && (
          <div className="hidden md:flex items-center pr-4">
            <div className="w-8 h-8 rounded-full bg-[#fb7259] flex items-center justify-center text-sm font-bold">
              {name.charAt(0).toUpperCase()}
            </div>

            <span className="text-sm text-slate-300 p-2">{name}</span>
          </div>
)}
          </ul>

        </nav>

        <style>
          {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(17,17,17,0.8);
        backdrop-filter: blur(10px);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
        </style>
    </header>

    </>
  )
}

export default Header