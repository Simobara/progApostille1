// src/pages/PreventivoApostille.jsx
import { useState } from "react";

export default function PreventivoApostille() {
  const [docType, setDocType] = useState("");
  const [country, setCountry] = useState("");

  const documentTypes = [
    "Certificato di nascita",
    "Certificato di matrimonio",
    "Casellario giudiziale",
    "Titolo di studio",
    "Procura / documento notarile",
    "Altro",
  ];

  const countries = [
    "Italia",
    "Stati Uniti",
    "Regno Unito",
    "Spagna",
    "Francia",
    "Germania",
    "Australia",
    "Perù",
    "Giappone",
    "Hong Kong",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integra la tua logica (router, API, ecc.)
    console.log({ docType, country });
  };

  return (
    <main className="mt-[12rem] mb-[12rem]">
      <section className="max-w-6xl mx-auto px-4 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-[#FBF6EA] border border-[#f0e7d3] rounded-2xl shadow-sm p-6 md:p-10"
        >
          {/* Titolo */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#1f2937]">
            Richiedi un preventivo gratuito per l&apos;Apostille
          </h1>

          {/* Divider */}
          <hr className="mt-6 mb-8 border-t border-[#e9dfc9]" />

          {/* Grid campi + bottone */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            {/* Tipo di documento */}
            <div className="md:col-span-5">
              <label className="block text-[17px] text-[#374151] font-medium mb-2">
                Tipo di documento:{" "}
                <span className="text-red-600" aria-hidden="true">
                  *
                </span>
              </label>
              <div className="relative">
                <select
                  required
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-300 bg-white px-4 pr-10 text-gray-700
                             focus:outline-none focus:ring-2 focus:ring-[#5897ff] focus:border-[#5897ff] transition"
                >
                  <option value="">Seleziona il tipo di documento</option>
                  {documentTypes.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {/* caret */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ▾
                </span>
              </div>
            </div>

            {/* Paese di emissione */}
            <div className="md:col-span-5">
              <label className="block text-[17px] text-[#374151] font-medium mb-2">
                Paese di emissione:{" "}
                <span className="text-red-600" aria-hidden="true">
                  *
                </span>
              </label>
              <div className="relative">
                <select
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full h-12 rounded-lg border border-gray-300 bg-white px-4 pr-10 text-gray-700
                             focus:outline-none focus:ring-2 focus:ring-[#5897ff] focus:border-[#5897ff] transition"
                >
                  <option value="">Seleziona il paese</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ▾
                </span>
              </div>
            </div>

            {/* Bottone */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[#5897FF] text-white font-semibold
                           hover:brightness-110 active:translate-y-[1px] transition shadow-sm"
              >
                Preventivo gratuito
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
