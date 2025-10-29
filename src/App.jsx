// src/App.jsx
import Navbar from "./components/navbar/navbar";

import { FaWhatsapp } from "react-icons/fa";
import logoMain from "./assets/apostilleLogoMain.png";
import Sidebar from "./components/pagina2/pagina2";
// ➜ se invece è in public/, import { FaWhatsapp } from "react-icons/fa";

//    userai <Navbar logoSrc="/logo-apos.png" ... />
import heroImg from "./assets/apostille.png";
import GuaranteeBanner from "./components/pagina3/pagina3";
import ApostilleShowcase from "./components/pagina4/pagina4";
import PreventivoApostille from "./components/pagina5/pagina5";
import Footer from "./components/pfooter/pfooter";
import "./index.css";

export default function App() {
  // pag apostille:https://apostille.ong/it/
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24">
      {/* NAVBAR */}
      <Navbar logoSrc={logoMain} active="Apostille" />

      {/* HERO */}
      <main className=" max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT copy */}
          <div className="lg:col-span-7">
            <h1 className="text-[60px] md:text-[80px] lg:text-[96px] font-extrabold leading-[0.9] tracking-tight text-[#0b0b0b]">
              APOSTILLE di documenti peruviani
            </h1>

            <h2 className="mt-4 text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-[#4b4b4b] leading-snug max-w-3xl">
              Invio in tutto il Perù e a qualsiasi paese.
            </h2>

            <p className="mt-7 text-gray-500 text-lg md:text-xl max-w-xl">
              Valido per qualsiasi documento ufficiale, notarile o privato.
              Servizio di Apostille accreditato.
            </p>

            <div className="mt-9">
              <a
                href="#"
                className="inline-block rounded-full border-2 border-[#0b4ea2] m-4 px-4 md:px-4 py-3 font-semibold text-[#0b4ea2] text-base md:text-lg hover:bg-[#f5fbff] transition"
              >
                OTTIENI L&apos;APOSTILLE
              </a>
            </div>
          </div>

          {/* RIGHT image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroImg /* se usi public: "/apostille.png" */}
                alt="Esempio di certificato di Apostille"
                className="w-[360px] md:w-[420px] lg:w-[520px] max-w-full rounded-sm shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                draggable="false"
              />

              {/* tooltip nero in basso a destra */}
              <div className="hidden md:block absolute -bottom-3 right-0 translate-y-full bg-black/90 text-white text-[13px] leading-snug px-4 py-2 rounded shadow-md max-w-[260px]">
                Apostille per qualsiasi documento da qualsiasi paese: ottieni lo
                stesso
              </div>
            </div>
          </div>
        </div>

        {/* BOTTONE WHATSAPP FISSO A DESTRA */}
        <a
          href="https://wa.me/393471234567?text=Salve!%20Vorrei%20ottenere%20un%20preventivo%20gratuito%20per%20un%20apostille."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-200 z-[9999]"
        >
          <FaWhatsapp className="text-2xl" />
          <span>Ottieni un preventivo gratuito</span>
        </a>

        {/* onda azzurra */}
        <div className="mt-12 lg:mt-14">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,80 C360,0 1080,160 1440,80 L1440,120 L0,120 Z"
              fill="#E6F3FF"
            />
          </svg>
        </div>
        <Sidebar />
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
          <GuaranteeBanner />
          {/* oppure testo personalizzato */}
          {/* 
      <GuaranteeBanner
        message={<>Servizio coperto dalla nostra <em>Garanzia 100%</em> — partner: </>}
        brand="ApostilleGarant™"
      />
      */}
        </section>
        <ApostilleShowcase />
        <PreventivoApostille />
      </main>
      <Footer />
    </div>
  );
}
