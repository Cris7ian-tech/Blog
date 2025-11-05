import hooksData from "../data/HooksData.json";
import CardArticle from "../components/ui/CardArticle.tsx";
// import ButtonLeerMas from "../components/ui/ButtonLeerMas.tsx";

const MainLayout = () => {
  return (
    <>
    <main className="min-h-screen p-4 sm:p6 md:p-12 lg:p-20">
      {/*IMAGEN*/ }
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-gray-600 md:col-span-2 rounded-lg w-full h-full object-cover">
          <img src="/src/assets/react.svg" 
          alt="react logo"
          className="object-cover rounded-lg"
          />
        </div>

          {/*TEXTOS*/ }
        <div className="content-end bg-cyan-600 md:col-span-3 rounded-lg px-4 py-6">
          <h2 className="text-gray-300 text-2xl font-bold py-4">Hola! soy Cristian ✌️</h2>
          <p className="text-gray-300 mb-4 leading-5" > Soy un <strong>desarrollador web en proceso</strong>y éste es mi blog, donde comparto mis proyectos y experiencias en la programación. 
          </p>

          <p className="text-gray-300 mb-4 leading-5">  
            La primera publicación sará sobre <strong>React</strong>  y sus <strong>Hooks</strong> , una herramienta clave y poderosa para crear aplicaciones modernas y dinámicas.
          </p>
          <p className="text-gray-300 mb-4 leading-5"> 
            Si estás empezando con React o queres mejorar tu forma de trabajar con componentes funcionales, <strong>este espacio es para vos.</strong>            
          </p>
        </div>
      </div>

      {/*ARTICULOS*/ }
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

      {/*Articulo 1*/}
      {/* <article className="bg-neutral-900 shadow min-h-[200px] rounded-lg p-4 border border-stone-700">
        <div>
          <p className="text-gray-300 mb-4 leading-5"><strong>UseState y UseEffect</strong> El punto de partida</p>
          <p className="text-gray-500 mb-4 leading-5">Aprende cómo manejar estados y efectos secundarios en React con los Hooks más utilizados.
            Ideal para quienes recén comienzan o quieren reforzar conceptos claves.
          </p>
        </div>
        <ButtonLeerMas />
      </article> */}

      {/*Articulo 2*/}
      {/* <article className="bg-neutral-900 shadow min-h-[200px] rounded-lg p-4 border border-stone-700">
        <div>
          <p className="text-gray-300 mb-4 leading-5"><strong>Nombre Hoock</strong></p>
          <p className="text-gray-400 mb-4 leading-5">descripcion hoock 2</p>
        </div>
        <ButtonLeerMas />
      </article> */}

      {/*Articulo 3*/}
      {/* <article className="bg-neutral-900 shadow min-h-[200px] rounded-lg p-4 border border-stone-700">
        <div>
          <p className="text-gray-300 mb-4 leading-5"><strong>Nombre Hoock</strong></p>
          <p className="text-gray-400 mb-4 leading-5">descripcion hoock 3</p>
        </div>
      <ButtonLeerMas />
      </article> */}
    {hooksData.HooksDataCards.map((hook, index) => (
            <CardArticle
              key={index}
              titulo={hook.titulo}
              subtitulo={hook.subtitulo}
              descripcion={hook.descripcion}
            />
            ))}
      </div>

    </main>
    </>
  );
}

export default MainLayout;