// src/components/pagina6/pagina6.jsx
// FAQ con ricerca + espandi/comprimi tutto
// - Click su tutta la barra domanda = toggle
// - "Comprimi tutto" abilitato se almeno una sezione (tra le filtrate) è aperta
// - "Espandi tutto" disattivato quando tutte le filtrate sono aperte
// - "Copia link" copia l'URL #faq-<id> senza aprire/scorrere né togglare

import { useEffect, useId, useMemo, useRef, useState } from "react";
import faqDataRaw from "../../json/faq.json";

// --- utils ---
const norm = (s) => (s || "").toLowerCase();

function highlight(text, query) {
  if (!query) return text;
  const q = norm(query);
  const parts = String(text).split(new RegExp(`(${query})`, "ig"));
  return parts.map((part, i) =>
    norm(part) === q ? (
      <mark key={i} className="bg-yellow-200 px-0.5 rounded">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function renderAnswer(answer, query) {
  const items = String(answer).split("; ");
  if (items.length >= 4) {
    return (
      <ul className="list-disc pl-5 space-y-1">
        {items.map((it, idx) => (
          <li key={idx}>{highlight(it.replace(/\.$/, ""), query)}</li>
        ))}
      </ul>
    );
  }
  return <p>{highlight(String(answer), query)}</p>;
}

function Arrow({ open }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
        open ? "rotate-90" : "rotate-0"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707A1 1 0 1 1 8.707 5.293l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z" />
    </svg>
  );
}

// Bottone copia link: non naviga, non toggla
function CopyLinkButton({ idNum }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async (e) => {
    e.stopPropagation(); // non togglare l'accordion
    try {
      const u = new URL(window.location.href);
      u.hash = `#faq-${idNum}`;
      await navigator.clipboard?.writeText(u.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      await navigator.clipboard?.writeText(`#faq-${idNum}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };
  //   return (
  //     <button
  //       type="button"
  //       onClick={onCopy}
  //       className="text-xs rounded border border-gray-300 px-2 py-1 hover:bg-gray-50 text-gray-700"
  //       aria-live="polite"
  //       aria-label={`Copia link diretto alla FAQ ${idNum}`}
  //     >
  //       {/* {copied ? "Copiato!" : "Copia link"} */}
  //     </button>
  //   );
}

// Item CONTROLLATO: lo stato open arriva dal parent
function AccordionItem({ idNum, title, children, isOpen, onToggle }) {
  const panelRef = useRef(null);
  const id = useId();

  // transizione altezza
  const [maxH, setMaxH] = useState(0);
  useEffect(() => {
    if (!panelRef.current) return;
    const el = panelRef.current;
    const ro = new ResizeObserver(() => {
      if (isOpen) setMaxH(el.scrollHeight);
    });
    ro.observe(el);
    if (isOpen) setMaxH(el.scrollHeight);
    return () => ro.disconnect();
  }, [isOpen]);

  // apri se l'hash combacia al primo mount
  //   useEffect(() => {
  //     if (typeof window === "undefined") return;
  //     const hash = window.location.hash.replace("#", "");
  //     if (hash === `faq-${idNum}`) {
  //       onToggle(idNum, true);
  //       requestAnimationFrame(() => {
  //         panelRef.current?.parentElement?.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       });
  //     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  // click su TUTTA la barra titolo = toggle
  const onHeaderClick = () => onToggle(idNum, !isOpen);

  return (
    <div className="border-b border-gray-200" id={`faq-${idNum}`}>
      <button
        type="button"
        className={`w-full flex items-start gap-3 text-left py-4 group cursor-pointer ${
          isOpen ? "bg-[#f2e3b8]" : "bg-white"
        }`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onHeaderClick}
      >
        <Arrow open={isOpen} />
        <span className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-gray-950">
          {title}
        </span>
        <div className="ml-auto mt-0.5">
          <CopyLinkButton idNum={idNum} />
        </div>
      </button>

      <div
        id={`faq-panel-${id}`}
        ref={panelRef}
        role="region"
        aria-hidden={!isOpen}
        style={{ maxHeight: isOpen ? maxH : 0 }}
        className="overflow-hidden transition-[max-height] duration-[350ms] ease-in-out"
      >
        <div
          className={`pb-6 pl-8 leading-relaxed max-w-none ${
            isOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-200 text-gray-700 prose prose-sm md:prose-base`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Pagina6FaqApostille() {
  const data = useMemo(() => faqDataRaw || [], []);

  // query string iniziale
  const initialQ = useMemo(() => {
    if (typeof window === "undefined") return "";
    const u = new URL(window.location.href);
    return u.searchParams.get("q") || "";
  }, []);
  const [query, setQuery] = useState(initialQ);
  const qNorm = norm(query);

  // filtro risultati
  const filtered = useMemo(() => {
    if (!qNorm) return data;
    return data.filter(
      (it) =>
        norm(it.question).includes(qNorm) || norm(it.answer).includes(qNorm)
    );
  }, [data, qNorm]);

  // sincronizza ?q= nell'URL
  useEffect(() => {
    if (typeof window === "undefined") return;
    const u = new URL(window.location.href);
    if (query) u.searchParams.set("q", query);
    else u.searchParams.delete("q");
    window.history.replaceState({}, "", u.toString());
  }, [query]);

  // ---- Stato open controllato dal parent ----
  // set di id aperti
  const [openIds, setOpenIds] = useState(() => new Set());

  // se l’utente clicca “Espandi tutto” o “Comprimi tutto”
  const allFilteredIds = useMemo(() => filtered.map((f) => f.id), [filtered]);
  const totalFiltered = allFilteredIds.length;

  const anyOpenFiltered = useMemo(
    () => allFilteredIds.some((id) => openIds.has(id)),
    [allFilteredIds, openIds]
  );
  const allOpenFiltered = useMemo(
    () => totalFiltered > 0 && allFilteredIds.every((id) => openIds.has(id)),
    [allFilteredIds, totalFiltered, openIds]
  );

  const handleExpandAll = () => {
    if (allOpenFiltered) return;
    setOpenIds((prev) => {
      const next = new Set(prev);
      allFilteredIds.forEach((id) => next.add(id));
      return next;
    });
  };

  const handleCollapseAll = () => {
    if (!anyOpenFiltered) return;
    setOpenIds((prev) => {
      const next = new Set(prev);
      allFilteredIds.forEach((id) => next.delete(id));
      return next;
    });
  };

  // toggle singolo
  const handleToggleOne = (id, open) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (open) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-10" id="faq">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b0b0b]">
            FAQ / Domande Frequenti
          </h2>
          {/* <p className="mt-1 text-gray-600"> */}
          {/* Clicca la barra della domanda per aprire/chiudere. Usa la ricerca
            per filtrare. */}
          {/* </p> */}
        </div>

        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-500 hidden sm:block">
            {filtered.length}/{data.length}
          </div>
          <button
            type="button"
            onClick={handleExpandAll}
            disabled={allOpenFiltered}
            className={`px-3 py-2 rounded-lg text-sm font-medium border border-gray-300 ${
              allOpenFiltered
                ? "text-gray-400 bg-gray-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            aria-label="Espandi tutto"
            aria-pressed={allOpenFiltered ? "true" : "false"}
          >
            Espandi tutto
          </button>
          <button
            type="button"
            onClick={handleCollapseAll}
            disabled={!anyOpenFiltered}
            className={`px-3 py-2 rounded-lg text-sm font-medium border border-gray-300 ${
              !anyOpenFiltered
                ? "text-gray-400 bg-gray-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
            aria-label="Comprimi tutto"
            aria-pressed={!anyOpenFiltered ? "true" : "false"}
          >
            Comprimi tutto
          </button>
        </div>
      </div>

      {/* Ricerca */}
      <div className="mt-4">
        <label className="sr-only" htmlFor="faq-search">
          Cerca nelle FAQ
        </label>
        <div className="relative">
          <input
            id="faq-search"
            type="search"
            placeholder="Cerca una parola chiave (es. traduzione, digitale, Italia)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-[15px] outline-none focus:ring-2 focus:ring-blue-200"
          />
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </div>
        {qNorm && (
          <p className="mt-1 text-sm text-gray-500">
            Risultati: {filtered.length}
          </p>
        )}
      </div>

      <div className="mt-6 divide-y divide-gray-200 rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
        {filtered.map((item) => (
          <AccordionItem
            key={item.id}
            idNum={item.id}
            title={item.question}
            isOpen={openIds.has(item.id)}
            onToggle={handleToggleOne}
          >
            {renderAnswer(item.answer, query)}
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}
