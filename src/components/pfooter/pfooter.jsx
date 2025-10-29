// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#111c21] text-gray-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* --- COLONNA 1: MENU --- */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6 tracking-wide">
            MENU
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              › Apostille
            </li>
            <li className="hover:text-white transition cursor-pointer">
              › Services
            </li>
            <li className="pl-4 border-l border-gray-700 ml-2">
              <ul className="space-y-2 mt-2">
                <li className="hover:text-white transition cursor-pointer">
                  › Apostille
                </li>
                <li className="hover:text-white transition cursor-pointer">
                  › Certified True Copy of Document with Apostille
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* --- COLONNA 2: MAGAZINE --- */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6 tracking-wide">
            MAGAZINE
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Sign up to our Magazine and receive our offers and news right in
            your Inbox! Get priority access to new features and tools.
          </p>
          <form className="flex flex-col sm:flex-row w-[2rem]">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-1 px-6 py-2 rounded-l-md bg-[#1c252b] text-gray-200 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-r-md hover:brightness-110 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* --- COLONNA 3: LOGO + DESCRIZIONE --- */}
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
            Accredited Apostille service allows you to obtain an apostille for
            any document (official, notarial, civil, business, private, etc.)
            issued in any country of the world.
          </p>
        </div>
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Apostille Online — All rights reserved.
      </div>
    </footer>
  );
}
