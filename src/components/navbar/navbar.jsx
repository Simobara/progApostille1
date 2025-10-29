// src/components/Navbar.jsx
export default function Navbar() {
  const items = [
    "Apostille",
    "Servizi",
    "Come funziona",
    "Risorse",
    "Assistenza",
  ];

  return (
    <header className="w-full bg-white shadow-sm font-[Poppins]">
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo-apos.png"
            alt="Logo Apostille"
            className="h-12 w-auto select-none"
            draggable="false"
          />
        </a>

        {/* MENU CENTRALE — equidistante anche ai bordi */}
        <div className="flex justify-center flex-grow mx-10">
          <div className="grid grid-cols-7 w-full max-w-3xl text-center">
            {/* colonna vuota prima */}
            <div></div>

            {items.map((label, index) => (
              <a
                key={index}
                href="#"
                className="text-[16px] font-semibold uppercase text-[#4b4b4b] hover:text-[#0b4ea2] transition-colors tracking-wide"
              >
                {label}
              </a>
            ))}

            {/* colonna vuota dopo */}
            <div></div>
          </div>
        </div>

        {/* BOTTONE DESTRA */}

        <button
          className="bg-[#0b4ea2] text-white font-extrabold uppercase text-[16px]
             px-[3rem] py-[1.4rem] rounded-full hover:brightness-110
             transition-all shadow-lg flex items-center justify-center select-none"
        >
          OTTIENI L&apos;APOSTILLE
        </button>
      </nav>
    </header>
  );
}
