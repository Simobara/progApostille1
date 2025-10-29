// src/pages/ApostilleShowcase.jsx
export default function ApostilleShowcase() {
  // 👇 Metti qui i tuoi 4 file immagine (per ora sono esempi)
  const images = [
    { src: "/images/apostille1.jpg", alt: "Apostille Giappone" },
    { src: "/images/apostille2.jpg", alt: "Apostille Hong Kong" },
    { src: "/images/apostille3.jpg", alt: "Apostille Cal (USA)" },
    { src: "/images/apostille4.jpg", alt: "Apostille Isole Cayman" },
  ];

  return (
    <main className="mt-[12rem] mb-[12rem]">
      {" "}
      {/* spazio per la Navbar fixed (h-20 ≈ 80px) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Titolo + Sottotitolo */}
        <header className="text-center mb-10 md:mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#2b2b2b] tracking-tight">
            Apostille che abbiamo ottenuto la scorsa settimana
          </h1>
          <p className="mt-3 md:mt-4 text-lg md:text-2xl text-[#6b6b6b]">
            Otteniamo più di 1.000 Apostille al giorno
          </p>
        </header>

        {/* Griglia immagini */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {images.map((img, i) => (
            <figure
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                  draggable="false"
                />
              </div>
              <figcaption className="px-4 py-3 text-center text-sm text-gray-600">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
