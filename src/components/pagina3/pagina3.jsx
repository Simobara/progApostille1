import { FiCheckCircle } from "react-icons/fi";

/**
 * Banner di garanzia/nota informativa.
 * Props:
 * - message: testo principale (stringa o JSX)
 * - brand: nome evidenziato in grassetto (es. "ApostilleGarant")
 * - className: per aggiungere/override di stili tailwind
 */
export default function GuaranteeBanner({
  message = "Il riconoscimento e l'accettazione dell'Apostille dell'Aja (La Haya) sono garantiti da",
  brand = "ApostilleGarant™",
  className = "",
}) {
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
      <span className="shrink-0">
        <FiCheckCircle className="text-emerald-500" size={28} />
      </span>

      <p className="text-[17px] sm:text-lg leading-snug">
        {typeof message === "string" ? (
          <>
            {message}{" "}
            <strong className="font-semibold text-slate-700">{brand}</strong>
          </>
        ) : (
          message
        )}
      </p>
    </div>
  );
}
