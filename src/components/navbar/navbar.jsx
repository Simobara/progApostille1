// src/components/navbar/navbar.jsx
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLang, useT } from "../../i18n/lang";

/* Bandiere inline SVG */
function FlagIT({ className = "w-6 h-4 rounded-sm" }) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
      <rect width="1" height="2" x="0" y="0" fill="#009246" />
      <rect width="1" height="2" x="1" y="0" fill="#ffffff" />
      <rect width="1" height="2" x="2" y="0" fill="#ce2b37" />
    </svg>
  );
}
function FlagPE({ className = "w-6 h-4 rounded-sm" }) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
      <rect width="1" height="2" x="0" y="0" fill="#d91023" />
      <rect width="1" height="2" x="1" y="0" fill="#ffffff" />
      <rect width="1" height="2" x="2" y="0" fill="#d91023" />
    </svg>
  );
}

export default function Navbar({ logoSrc }) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = useT();

  const items = t("navbar.menu");

  const LangSwitch = (
    <div className="flex items-center gap-2 ml-4">
      <button
        aria-label="Italiano"
        onClick={() => setLang("it")}
        className={`flex items-center gap-2 px-2 py-1 rounded-full border transition 
          ${
            lang === "it"
              ? "border-[#0b4ea2] bg-[#E6F3FF]"
              : "border-transparent hover:bg-gray-100"
          }`}
      >
        <FlagIT />
        <span className="text-xs font-semibold uppercase text-[#4b4b4b]">
          IT
        </span>
      </button>
      <button
        aria-label="Español (Perú)"
        onClick={() => setLang("es-PE")}
        className={`flex items-center gap-2 px-2 py-1 rounded-full border transition 
          ${
            lang === "es-PE"
              ? "border-[#0b4ea2] bg-[#E6F3FF]"
              : "border-transparent hover:bg-gray-100"
          }`}
      >
        <FlagPE />
        <span className="text-xs font-semibold uppercase text-[#4b4b4b]">
          PE
        </span>
      </button>
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-[10000] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm font-[Poppins] pt-4">
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 md:px-8">
        {/* LOGO */}
        <a
          href="#"
          className="flex items-center gap-3 shrink-0"
          aria-label="Home"
        >
          <img
            src={logoSrc}
            alt="Logo Apostille"
            className="h-12 w-auto select-none"
            draggable="false"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center justify-center flex-grow mx-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {Array.isArray(items) &&
              items.map((label, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-[15px] md:text-[16px] font-semibold uppercase text-[#4b4b4b] hover:text-[#0b4ea2] transition-colors tracking-wide whitespace-nowrap"
                >
                  {label}
                </a>
              ))}
          </div>
        </div>

        {/* CTA DESKTOP + SWITCH LINGUA */}
        <div className="hidden lg:flex items-center">
          <button className="bg-[#0b4ea2] text-white font-extrabold uppercase text-[15px] px-[2.4rem] py-[1.2rem] rounded-full hover:brightness-110 transition-all shadow-lg items-center justify-center select-none whitespace-nowrap">
            {t("navbar.cta")}
          </button>
          {LangSwitch}
        </div>

        {/* ICONA MENU MOBILE + SWITCH LINGUA */}
        <div className="lg:hidden flex items-center gap-2">
          {LangSwitch}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0b4ea2] p-2 rounded-md hover:bg-gray-100 transition"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* OVERLAY MOBILE (non blocca la navbar) */}
      {
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
      ${
        isOpen
          ? "opacity-100 visible pointer-events-auto"
          : "opacity-0 invisible pointer-events-none"
      }`}
        />
      }

      {/* DRAWER MOBILE (sopra overlay, sotto header) */}
      <div
        className={`fixed top-0 right-0 z-[1100] h-full w-4/5 max-w-sm bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
      >
        <div className="flex flex-col h-full py-10 px-6 space-y-6">
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
              aria-label="Chiudi menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col space-y-5">
            {Array.isArray(items) &&
              items.map((label, index) => (
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
              className="w-full bg-[#0b4ea2] text-white font-extrabold uppercase text-[16px] py-[1.2rem] rounded-full hover:brightness-110 transition-all shadow-md"
            >
              {t("navbar.cta")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
