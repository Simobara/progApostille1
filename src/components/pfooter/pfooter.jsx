// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#111c21] text-gray-300 py-16 px-6 sm:px-10 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* --- COLUMNA 1: MENÚ --- */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6 tracking-wide">
            MENÚ
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              › Apostilla
            </li>
            <li className="hover:text-white transition cursor-pointer">
              › Servicios
            </li>
            <li className="pl-4 border-l border-gray-700 ml-2">
              <ul className="space-y-2 mt-2">
                <li className="hover:text-white transition cursor-pointer">
                  › Apostilla de documentos
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  › Copia certificada con Apostilla
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* --- COLUMNA 2: REVISTA / SUSCRIPCIÓN --- */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6 tracking-wide">
            REVISTA
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Suscríbete a nuestra revista y recibe nuestras ofertas y novedades
            directamente en tu bandeja de entrada. ¡Obtén acceso prioritario a
            nuevas funciones y herramientas!
          </p>
          <form className="flex flex-col sm:flex-row w-full">
            <input
              type="email"
              placeholder="Correo electrónico..."
              className="flex-1 px-4 py-3 rounded-t-md sm:rounded-l-md sm:rounded-t-none bg-[#1c252b] text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:brightness-110 transition"
            >
              SUSCRIBIRSE
            </button>
          </form>
        </div>

        {/* --- COLUMNA 3: LOGO + DESCRIPCIÓN --- */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#ffcc00] p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#111c21"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-[#ffcc00] text-3xl font-extrabold tracking-wider">
              APOSTILLE ONLINE
            </h3>
          </div>

          <p className="text-gray-400 leading-relaxed">
            El servicio de Apostilla acreditado te permite obtener una apostilla
            para cualquier documento (oficial, notarial, civil, empresarial o
            privado) emitido en cualquier país del mundo.
          </p>
        </div>
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Apostille Online — Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
