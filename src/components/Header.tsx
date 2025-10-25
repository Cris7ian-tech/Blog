
export default function Header() {
  return (
    <header className="bg-neutral-800 p-4 text-cyan-50 shadow-gray-50/10 shadow-md">
      <nav className="flex flex-col md:flex-row justify-around">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Blog</h1>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li className="font-semibold">Doc</li>
          <li className="font-semibold">Contacto</li>
        </ul>
      </nav>
    </header>
  )
}
