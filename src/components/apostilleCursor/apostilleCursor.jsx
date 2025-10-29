// src/components/ApostilleCursor.jsx
import { useEffect } from "react";

export default function ApostilleCursor({ enabled = true }) {
  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("cursor-apostille");
    return () => document.body.classList.remove("cursor-apostille");
  }, [enabled]);

  return null;
}
