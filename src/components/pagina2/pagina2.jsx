// src/components/pagina2/pagina2.jsx (Sidebar)
import { useEffect, useMemo, useRef } from "react";
import { useT } from "../../i18n/lang";

import itaLogo from "../../assets/itaLogo.png";
import maerskLogo from "../../assets/maerskLogo.png";
import mercedesLogo from "../../assets/mercedesLogo.png";
import southLogo from "../../assets/southLogo.png";

export default function Sidebar({ speedPxPerSec = 50, gapPx = 110 }) {
  const t = useT();

  // 👇 fallback robusto nel caso manchino le chiavi o cambino forma
  const parts = t("sidebar.lineParts");
  const [p0, p1, p2] =
    Array.isArray(parts) && parts.length >= 3
      ? parts
      : ["Scelto dalle", "aziende leader a", "livello mondiale"];

  const logos = useMemo(
    () => [
      { src: itaLogo, alt: "ITA" },
      { src: southLogo, alt: "Sotheby's" },
      { src: mercedesLogo, alt: "Mercedes-Benz" },
      { src: maerskLogo, alt: "Maersk" },
    ],
    []
  );

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

    // Rispetta prefers-reduced-motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Stili iniziali
    track.style.display = "flex";
    track.style.alignItems = "center";
    track.style.justifyContent = "center";
    track.style.gap = `${gapPx}px`;
    track.style.willChange = "transform";

    offsetRef.current = 0;
    track.style.transform = `translateX(${offsetRef.current}px)`;

    if (reduceMotion) {
      // niente animazione; lascia i loghi statici
      return;
    }

    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        offsetRef.current -= speedPxPerSec * dt;

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

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);

    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    wrap.addEventListener("mouseenter", pause);
    wrap.addEventListener("mouseleave", resume);
    // su mobile tocco = pausa
    wrap.addEventListener("touchstart", pause, { passive: true });
    wrap.addEventListener("touchend", resume);

    return () => {
      wrap.removeEventListener("mouseenter", pause);
      wrap.removeEventListener("mouseleave", resume);
      wrap.removeEventListener("touchstart", pause);
      wrap.removeEventListener("touchend", resume);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [gapPx, speedPxPerSec]);

  return (
    <section className="w-full bg-gray-100 py-16 overflow-hidden flex justify-center">
      <div className="max-w-7xl w-full px-6">
        {/* Titolo */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight"
            aria-label={`${p0} ${p1} ${p2}`}
          >
            <span className="bg-blue-100 px-2">{p0}</span>{" "}
            <span className="bg-blue-100 px-2">{p1}</span>{" "}
            <span className="bg-blue-100 px-2">{p2}</span>
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
