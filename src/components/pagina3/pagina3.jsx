import { FiCheckCircle } from "react-icons/fi";
import { useT } from "../../i18n/lang";

/**
 * Banner di garanzia/nota informativa (i18n-ready).
 * Props (tutte opzionali):
 * - message: testo principale (stringa o JSX). Se assente, usa i18n: guarantee.message
 * - brand: nome evidenziato in grassetto. Se assente, usa i18n: guarantee.brand
 * - className: per aggiungere/override di stili tailwind
 */
export default function GuaranteeBanner({ message, brand, className = "" }) {
  const t = useT();

  const resolvedMessage = message ?? t("guarantee.message");
  const resolvedBrand = brand ?? t("guarantee.brand");

  return (
    <div
      className={[
        "w-full rounded-2xl bg-emerald-50/80 border border-emerald-100",
        "text-slate-600 px-5 sm:px-6 py-4 sm:py-4",
        "shadow-sm",
        "flex items-center gap-3 sm:gap-4",
        className,
      ].join(" ")}
      role="status"
      aria-live="polite"
    >
      <span className="shrink-0" aria-hidden="true">
        <FiCheckCircle className="text-emerald-500" size={28} />
      </span>

      <p className="text-[17px] sm:text-lg leading-snug">
        {typeof resolvedMessage === "string" ? (
          <>
            {resolvedMessage}{" "}
            <strong className="font-semibold text-slate-700">
              {resolvedBrand}
            </strong>
          </>
        ) : (
          // Se passi JSX personalizzato in `message`, lo rendiamo così com'è
          resolvedMessage
        )}
      </p>
    </div>
  );
}
