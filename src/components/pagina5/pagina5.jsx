// src/pages/PreventivoApostille.jsx
import { useState } from "react";
import { useT } from "../../i18n/lang";

export default function PreventivoApostille() {
  const t = useT();
  const [docType, setDocType] = useState("");
  const [country, setCountry] = useState("");

  const documentTypes = t("preventivo.documentTypes") || [];
  const countries = t("preventivo.countries") || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integra router/API; qui solo esempio
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
            {t("preventivo.title")}
          </h1>

          {/* Divider */}
          <hr className="mt-6 mb-8 border-t border-[#e9dfc9]" />

          {/* Grid campi + bottone */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            {/* Tipo di documento */}
            <div className="md:col-span-5">
              <label className="block text-[17px] text-[#374151] font-medium mb-2">
                {t("preventivo.labels.docType")}:{" "}
                <span className="text-red-600" aria-hidden="true">
                  {t("preventivo.labels.requiredMark")}
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
                  <option value="">
                    {t("preventivo.placeholders.selectDocType")}
                  </option>
                  {Array.isArray(documentTypes) &&
                    documentTypes.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                </select>
                {/* caret */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M6 8l4 4 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Paese di destinazione */}
            <div className="md:col-span-5">
              <label className="block text-[17px] text-[#374151] font-medium mb-2">
                {t("preventivo.labels.country")}:{" "}
                <span className="text-red-600" aria-hidden="true">
                  {t("preventivo.labels.requiredMark")}
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
                  <option value="">
                    {t("preventivo.placeholders.selectCountry")}
                  </option>
                  {Array.isArray(countries) &&
                    countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M6 8l4 4 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Bottone */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-14 rounded-lg bg-[#5897FF] text-white font-semibold
               hover:brightness-110 active:translate-y-[1px] transition shadow-sm
               flex flex-col items-center justify-center leading-tight"
              >
                <span>{t("preventivo.cta").split(" ")[0]}</span>
                <span>{t("preventivo.cta").split(" ").slice(1).join(" ")}</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
