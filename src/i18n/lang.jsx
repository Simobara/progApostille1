// i18n minimale con Context + localStorage
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const dictionaries = {
  it: {
    locale: "it",
    navbar: {
      menu: ["Apostille", "Servizi", "Come funziona", "Risorse", "Assistenza"],
      cta: "OTTIENI L'APOSTILLE",
    },
    hero: {
      h1_a: "APOSTILLE",
      h1_b: "documenti",
      h1_c: "peruviani",
      h2: "Invio in tutto il Perù e a qualsiasi paese.",
      p: "Valido per qualsiasi documento ufficiale, notarile o privato. Servizio di Apostille accreditato.",
      cta: "OTTIENI L'APOSTILLE",
      tooltip: "Apostille per qualsiasi documento da qualsiasi paese.",
      whatsappCta: "Ottieni un preventivo gratuito",
      whatsappMsg:
        "Salve! Vorrei ottenere un preventivo gratuito per un apostille.",
    },
    sidebar: {
      lineParts: ["Scelto dalle", "aziende leader a", "livello mondiale"],
    },
    guarantee: {
      message:
        "Il riconoscimento e l'accettazione dell'Apostille dell'Aja (La Haya) sono garantiti da",
      brand: "ApostilleGarant™",
    },
    showcase: {
      title: "Documenti apostillati nell’ultimo mese",
      subtitle: "Apostilliamo più di 50 documenti al mese",
      images: [
        { alt: "Esempio di apostille su certificato n. 1" },
        { alt: "Esempio di apostille su certificato n. 2" },
        { alt: "Esempio di apostille su certificato n. 3" },
        { alt: "Esempio di apostille su certificato n. 4" },
      ],
    },
  },

  "es-PE": {
    locale: "es-PE",
    navbar: {
      menu: [
        "Apostilla",
        "Servicios",
        "Cómo funciona",
        "Recursos",
        "Asistencia",
      ],
      cta: "OBTENER APOSTILLA",
    },
    hero: {
      h1_a: "APOSTILLA",
      h1_b: "documentos",
      h1_c: "peruanos",
      h2: "Envío a todo el Perú y a cualquier país.",
      p: "Válido para cualquier documento oficial, notarial o privado. Servicio de Apostilla acreditado.",
      cta: "OBTENER APOSTILLA",
      tooltip: "Apostilla para cualquier documento de cualquier país.",
      whatsappCta: "Obtén una cotización gratis",
      whatsappMsg:
        "¡Hola! Quisiera una cotización gratuita para una apostilla.",
    },
    sidebar: {
      lineParts: ["Elegido por", "empresas líderes a", "nivel mundial"],
    },

    guarantee: {
      message:
        "El reconocimiento y la aceptación de la Apostilla de La Haya están garantizados por",
      brand: "ApostilleGarant™",
    },
    showcase: {
      title: "Documentos apostillados en el último mes",
      subtitle: "Apostillamos más de 50 documentos al mes",
      images: [{ alt: "" }, { alt: "" }, { alt: "" }, { alt: "" }],
    },
  },
};

const LangContext = createContext({
  lang: "it",
  setLang: () => {},
  t: (path) => path,
});

export function LanguageProvider({ children, defaultLang = "it" }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || defaultLang;
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    // semplice path getter tipo "hero.h1_a"
    return (path) => {
      const parts = path.split(".");
      let cur = dictionaries[lang] || dictionaries[defaultLang];
      for (const p of parts) {
        if (cur && typeof cur === "object" && p in cur) cur = cur[p];
        else return path; // fallback: mostra la chiave
      }
      return cur;
    };
  }, [lang, defaultLang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  return useContext(LangContext).t;
}
