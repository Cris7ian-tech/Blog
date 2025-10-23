import React from 'react';


const MainLayout: React.FC = () => {
  return (
    <>
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-[#0c6992] text-white p-8 grid grid-cols-3 gap-6">
  {/* Imagen */}
  <section className="col-span-1 bg-white/10 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
    <img
      src="/src/assets/Perfil-blog.jpg"
      alt="Cristian Lucero"
      className="w-full h-full object-cover"
    />
  </section>

  {/* Presentación */}
  <section className="col-span-2 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black rounded-xl shadow-lg flex flex-col justify-center p-10">
    <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Cristian</h1>
    <p className="text-lg text-gray-300 leading-relaxed">
      Desarrollador web y entusiasta de React. En este blog comparto lo que aprendo sobre hooks, componentes y desarrollo frontend.
    </p>
  </section>

  {/* Artículos */}
  <section className="col-span-3 grid grid-cols-3 gap-6">
    <article className="bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition">
      <h2 className="text-xl font-semibold mb-2">useState</h2>
      <p className="text-gray-300">Permite manejar el estado local de un componente funcional.</p>
    </article>
    <article className="bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition">
      <h2 className="text-xl font-semibold mb-2">useEffect</h2>
      <p className="text-gray-300">Ejecuta efectos secundarios, como llamadas a APIs o listeners.</p>
    </article>
    <article className="bg-white/10 rounded-xl p-6 shadow-md hover:bg-white/20 transition">
      <h2 className="text-xl font-semibold mb-2">useContext</h2>
      <p className="text-gray-300">Facilita compartir datos entre componentes sin pasar props.</p>
    </article>
  </section>
</main>

    </>
  );
}

export default MainLayout;