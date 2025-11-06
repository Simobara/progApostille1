// src/i18n/lang.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const dictionaries = {
  it: {
    locale: "it",
    navbar: {
      menu: [
        "Apostille",
        "Servizi",
        "Come funziona",
        "Risorse",
        // "Assistenza"
      ],
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
      images: [{ alt: "" }, { alt: "" }, { alt: "" }, { alt: "" }],
    },
    preventivo: {
      title:
        "Richiedi un preventivo gratis per apostillare documenti peruviani",
      labels: {
        docType: "Tipo di documento",
        country: "Paese di destinazione",
        requiredMark: "*",
      },
      placeholders: {
        selectDocType: "Seleziona il tipo di documento",
        selectCountry: "Seleziona il paese",
      },
      cta: "Richiedi Preventivo",
      documentTypes: [
        "Certificato di nascita",
        "Certificato di matrimonio",
        "Casellario giudiziale",
        "Titolo di studio",
        "Procura / documento notarile",
        "Altro",
      ],
      countries: [
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
      ],
    },
    faq: {
      title: "FAQ / Domande frequenti",
      searchLabel: "Cerca nelle FAQ",
      searchPlaceholder:
        "Cerca una parola chiave (es. traduzione, digitale, Italia)",
      results: "Risultati",
      expandAll: "Espandi tutto",
      collapseAll: "Comprimi tutto",
      expandAllAria: "Espandi tutto",
      collapseAllAria: "Comprimi tutto",
      copyLink: (id) => `Copia link diretto alla FAQ ${id}`,
      copied: "Copiato!",
    },
    footer: {
      menuTitle: "MENÙ",
      menuItems: {
        apostille: "Apostille",
        services: "Servizi",
        submenu: {
          apostilleDocs: "Apostille dei documenti",
          certifiedCopy: "Copia certificata con Apostille",
        },
      },

      magazineTitle: "RIVISTA",
      magazineText:
        "Iscriviti alla nostra rivista e ricevi offerte e novità direttamente nella tua casella di posta. Ottieni accesso prioritario a nuove funzioni e strumenti!",
      newsletterPlaceholder: "Email...",
      newsletterCta: "ISCRIVITI",

      brandTitle: "APOSTILLE ONLINE",
      brandDescription:
        "Il servizio di Apostille accreditato ti permette di ottenere un'apostilla per qualsiasi documento (ufficiale, notarile, civile, aziendale o privato) emesso in qualsiasi paese del mondo.",

      copyrightSuffix: "Apostille Online — Tutti i diritti riservati.",
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
        // "Asistencia",
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
    preventivo: {
      title:
        "Solicita una cotización gratuita para apostillar documentos peruanos",
      labels: {
        docType: "Tipo de documento",
        country: "País de destino",
        requiredMark: "*",
      },
      placeholders: {
        selectDocType: "Selecciona el tipo de documento",
        selectCountry: "Selecciona el país",
      },
      cta: "Solicitar cotización",
      documentTypes: [
        "Certificado de nacimiento",
        "Certificado de matrimonio",
        "Antecedentes penales",
        "Título de estudio",
        "Poder / documento notarial",
        "Otro",
      ],
      countries: [
        "Italia",
        "Estados Unidos",
        "Reino Unido",
        "España",
        "Francia",
        "Alemania",
        "Australia",
        "Perú",
        "Japón",
        "Hong Kong",
      ],
    },
    // 🔧 PRIMA era fuori. Ora il blocco FAQ è dentro "es-PE".
    faq: {
      title: "FAQ / Preguntas frecuentes",
      searchLabel: "Buscar en las FAQ",
      searchPlaceholder:
        "Busca una palabra clave (ej. traducción, digital, Italia)",
      results: "Resultados",
      expandAll: "Expandir todo",
      collapseAll: "Contraer todo",
      expandAllAria: "Expandir todo",
      collapseAllAria: "Contraer todo",
      copyLink: (id) => `Copiar enlace directo a la FAQ ${id}`,
      copied: "¡Copiado!",
    },

    footer: {
      menuTitle: "MENÚ",
      menuItems: {
        apostille: "Apostilla",
        services: "Servicios",
        submenu: {
          apostilleDocs: "Apostilla de documentos",
          certifiedCopy: "Copia certificada con Apostilla",
        },
      },

      magazineTitle: "REVISTA",
      magazineText:
        "Suscríbete a nuestra revista y recibe ofertas y novedades directamente en tu bandeja de entrada. ¡Obtén acceso prioritario a nuevas funciones y herramientas!",
      newsletterPlaceholder: "Correo electrónico...",
      newsletterCta: "SUSCRIBIRSE",

      brandTitle: "APOSTILLE ONLINE",
      brandDescription:
        "El servicio de Apostilla acreditado te permite obtener una apostilla para cualquier documento (oficial, notarial, civil, empresarial o privado) emitido en cualquier país del mundo.",

      copyrightSuffix: "Apostille Online — Todos los derechos reservados.",
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
