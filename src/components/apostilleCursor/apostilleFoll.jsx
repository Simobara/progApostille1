import { useEffect, useRef } from "react";

export default function ApostilleFollower({
  size = 28,
  offset = { x: 14, y: 14 },
  src = "/cursors/apostille-seal.svg",
}) {
  const ref = useRef(null);
  const raf = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;

    const onMove = (e) => {
      target.current.x = e.clientX + offset.x;
      target.current.y = e.clientY + offset.y;
      if (!raf.current) tick(); // avvia l’animazione
    };

    const tick = () => {
      raf.current = requestAnimationFrame(tick);
      // lerp per movimento morbido
      pos.current.x += (target.current.x - pos.current.x) * 0.25;
      pos.current.y += (target.current.y - pos.current.y) * 0.25;
      el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      raf.current = null;
    };
  }, [offset.x, offset.y]);

  return (
    <img
      ref={ref}
      src={src}
      alt=""
      aria-hidden="true"
      draggable="false"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 99999,
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
        transform: "translate3d(-9999px,-9999px,0)", // fuori finché non si muove
      }}
    />
  );
}
