import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ logoSrc }) {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    "Apostille",
    "Servizi",
    "Come funziona",
    "Risorse",
    "Assistenza",
  ];

  return (
    <header
      className="w-full bg-white shadow-sm font-[Poppins] pt-4
                 fixed top-0 left-0 z-50"
    >
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src={logoSrc}
            alt="Logo Apostille"
            className="h-12 w-auto select-none"
            draggable="false"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex justify-center flex-grow mx-10">
          <div className="grid grid-cols-7 w-full max-w-3xl text-center">
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
            <div></div>
          </div>
        </div>

        {/* BOTTONE DESKTOP */}
        <button
          className="hidden lg:flex bg-[#0b4ea2] text-white font-extrabold uppercase text-[16px]
                     px-[3rem] py-[1.4rem] rounded-full hover:brightness-110
                     transition-all shadow-lg items-center justify-center select-none"
        >
          OTTIENI L&apos;APOSTILLE
        </button>

        {/* HAMBURGER ICON — MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#0b4ea2] p-2 rounded-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* OVERLAY OSCURANTE */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
      ></div>

      {/* MENU MOBILE A COMPARSA (SLIDE-IN) */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl border-l border-gray-200
                    transform transition-transform duration-300 ease-in-out lg:hidden
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full py-10 px-6 space-y-6">
          {/* Logo piccolo in alto */}
          <div className="flex justify-between items-center mb-4">
            <img
              src={logoSrc}
              alt="Logo Apostille"
              className="h-10 select-none"
              draggable="false"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#0b4ea2] hover:scale-110 transition"
            >
              <X size={28} />
            </button>
          </div>

          {/* Link menu */}
          <nav className="flex flex-col space-y-5">
            {items.map((label, index) => (
              <a
                key={index}
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-[18px] font-semibold uppercase text-[#4b4b4b] hover:text-[#0b4ea2] transition-colors tracking-wide"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#0b4ea2] text-white font-extrabold uppercase text-[16px]
                         py-[1.2rem] rounded-full hover:brightness-110 transition-all shadow-md"
            >
              OTTIENI L&apos;APOSTILLE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
