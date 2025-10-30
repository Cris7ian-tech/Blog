
export default function Header() {
  return (
    <header className="bg-neutral-800 p-4 text-neutral-200 shadow-gray-50/10 shadow-md">
      <nav className="flex flex-col md:flex-row justify-around">
        <h1 className="text-xl font-bold mb-4 md:mb-0 cursor-pointer hover:text-cyan-400 transition duration-300">Blog</h1>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li className="font-semibold py-2 px-4 rounded-full border border-transparent hover:border-cyan-400 transition duration-300 cursor-pointer hover:bg-cyan-400 hover:text-black
">Doc</li>
          <li className="font-semibold py-2 px-4 rounded-full border border-transparent hover:border-cyan-400 transition duration-300 cursor-pointer hover:bg-cyan-400 hover:text-black
">Contacto</li>
        </ul>
      </nav>
    </header>
  )
}


