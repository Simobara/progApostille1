import { useEffect, useRef } from "react";
import itaLogo from "../../assets/itaLogo.png";
import maerskLogo from "../../assets/maerskLogo.png";
import mercedesLogo from "../../assets/mercedesLogo.png";
import southLogo from "../../assets/southLogo.png";

export default function Sidebar() {
  const logos = [
    { src: itaLogo, alt: "ITA" },
    { src: southLogo, alt: "Sotheby's" },
    { src: mercedesLogo, alt: "Mercedes-Benz" },
    { src: maerskLogo, alt: "Maersk" },
  ];

  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTsRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const speed = 50; // px/s
    const gapPx = 110; // spazio tra loghi

    track.style.display = "flex";
    track.style.alignItems = "center";
    track.style.justifyContent = "center";
    track.style.gap = `${gapPx}px`;
    track.style.willChange = "transform";

    offsetRef.current = 0;
    track.style.transform = `translateX(${offsetRef.current}px)`;

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        offsetRef.current -= speed * dt;

        const first = track.firstElementChild;
        if (first) {
          const firstWidth = first.getBoundingClientRect().width + gapPx;
          if (-offsetRef.current >= firstWidth) {
            track.appendChild(first);
            offsetRef.current += firstWidth;
          }
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);
    wrap.addEventListener("mouseenter", pause);
    wrap.addEventListener("mouseleave", resume);

    return () => {
      wrap.removeEventListener("mouseenter", pause);
      wrap.removeEventListener("mouseleave", resume);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-gray-100 py-16 overflow-hidden flex justify-center">
      <div className="max-w-7xl w-full px-6">
        {/* Titolo */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            <span className="bg-blue-100 px-2">Scelto dalle</span>{" "}
            <span className="bg-blue-100 px-2">aziende leader a</span>{" "}
            <span className="bg-blue-100 px-2">livello mondiale</span>
          </h2>
        </div>

        {/* Track centrato con fade morbido */}
        <div
          ref={wrapRef}
          className="relative h-16 overflow-hidden flex justify-center mask-fade"
        >
          <div ref={trackRef} className="flex items-center">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                draggable="false"
                className="h-10 w-auto object-contain opacity-90 transition-opacity duration-700"
                style={{ flex: "0 0 auto" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
