import avatar from "./img/avtar.png";
import caminata from "./img/caminata.jpg";
import fulbol from "./img/fulbol.webp";

const UserDashboard = () => {
  return (
    <div className=" mover flex items-start justify-center min-h-screen bg-gray-100 pt-10">
      <div className="grid grid-cols-2 gap-6 p-8 bg-white shadow-xl rounded-lg max-w-4xl w-full">
        <div className="border p-6 rounded-lg shadow-md bg-blue-50">
          <h2 className="font-bold text-xl text-gray-800">Bienvenido, John</h2>
          <div className="mt-4 flex justify-center">
            <div className="border border-gray-400 w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-semibold">
              <img src={avatar} alt="" className="avatar2" />
            </div>
          </div>
        </div>

        <div className=" border p-6 rounded-lg shadow-md bg-blue-50">
          <h2 className="font-bold text-xl text-gray-800 center">
            Información del Usuario
          </h2>
          <p className="mt-3">
            <strong className="text-gray-700 padd">Nombre:</strong> John Pecados
          </p>
          <p>
            <strong className="text-gray-700 padd">ID:</strong> 6969
          </p>
          <p>
            <strong className="text-gray-700 padd">Rol:</strong> Administrador
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border bg-white">
          <img
            className="w-full h-40 object-cover img1"
            src={caminata}
            alt="Imagen"
          />
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2 text-gray-800 padd">
              Caminata Al Cerro De Las Tres Cruces
            </h3>
            <p className="text-gray-700 padd">
              Te invitamos a la caminata al cerro de las tres cruces <br />
              Donde podras disfrutar de la naturaleza y la tranquilidad
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 padd">
            <span className="tag">#Naturaleza</span>
            <span className="tag">#Atletismo</span>
            <span className="tag">#Marihuaneros</span>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border bg-white">
          <img
            className="w-full h-40 object-cover img1"
            src={fulbol}
            alt="Imagen"
          />
          <div className="px-6 py-4 ">
            <h3 className="font-bold text-xl mb-2 text-gray-800 padd">
              Gran Torneo InterFichas
            </h3>
            <p className="text-gray-700 padd">
              Te invitamos al gran torneo de futbol Interfichas <br /> Solo
              tienes que reclutar a los mejores Jugadores ¡Suerte!
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 padd">
            <span className="tag">#Futbol</span>
            <span className="tag">#Deporte</span>
            <span className="tag">#Ludicas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
