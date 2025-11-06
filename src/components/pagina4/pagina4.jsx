// src/pages/ApostilleShowcase.jsx
import { useT } from "../../i18n/lang";

export default function ApostilleShowcase({ images: imagesProp }) {
  const t = useT();

  // Titoli localizzati
  const title = t("showcase.title");
  const subtitle = t("showcase.subtitle");

  // Se non passi images via props, usa quelle di default
  const imagesDefault = [
    { src: "/images/apostille1.jpeg" },
    { src: "/images/apostille2.jpeg" },
    { src: "/images/apostille3.jpeg" },
    { src: "/images/apostille4.jpeg" },
  ];

  const imgs = imagesProp && imagesProp.length ? imagesProp : imagesDefault;

  // Alt localizzati (fallback sicuro)
  const alts = t("showcase.images");
  const getAlt = (i) =>
    (Array.isArray(alts) && alts[i] && alts[i].alt) ||
    (typeof alts?.[i] === "string" ? alts[i] : "") ||
    title; // fallback: titolo se alt mancante

  return (
    <main className="mt-[12rem] mb-[12rem]">
      {/* spazio per la Navbar fixed */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo + Sottotitolo */}
        <header className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b2b2b] tracking-tight">
            {title}
          </h1>
          <p className="mt-3 md:mt-4 text-lg md:text-2xl text-[#6b6b6b]">
            {subtitle}
          </p>
        </header>

        {/* Griglia immagini */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {imgs.map((img, i) => (
            <figure
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 
                         hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={img.src}
                  alt={getAlt(i)}
                  loading="lazy"
                  draggable="false"
                  className="max-h-full max-w-full object-contain transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              {/* Mostra il caption solo se esiste un alt specifico */}
              {getAlt(i) && (
                <figcaption className="px-4 py-3 text-center text-sm text-gray-600">
                  {/* {getAlt(i)} */}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
