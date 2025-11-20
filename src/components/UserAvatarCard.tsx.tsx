import Avvvatars from "avvvatars-react"
import { useUserName } from "../hooks/useUserName";

function UserAvatarCard() {
  const [ name, setName ] = useUserName();

  return (
    <div className="max-w-md mx-auto mt-10 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl">
      <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">
        Generar Avatar
      </h2>

      <input
        type="text"
        placeholder="Ingresa tu nombre..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) =>{
          e.currentTarget.blur();
        }}
        className="w-full text-center px-4 py-3 rounded-xl bg-black/30 text-gray-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {name.length > 0 && (
        <div className="mt-6 flex justify-center">
          <Avvvatars 
            value={name} 
            size={60} 
            style="shape"
          />
        </div>
      )}
    </div>
  )
}

export default UserAvatarCard
