"use client";

import React, { useEffect, useState, useCallback } from "react";

type Props = {
  images: string[];
  altPrefix?: string;
  minTile?: number; // min width for thumbnail tiles in px
  shuffle?: boolean;
};

export default function Gallery({ images = [], altPrefix = "Zdjęcie", minTile = 180, shuffle = false }: Props) {
  const [list, setList] = useState<string[]>(images || []);
  const [errorMap, setErrorMap] = useState<Record<number, boolean>>({});
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => setList(images || []), [images]);
  useEffect(() => {
    if (!images || images.length === 0) {
      setList([]);
      return;
    }
    if (!shuffle) {
      setList(images.slice());
      return;
    }
    const a = images.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setList(a);
  }, [images, shuffle]);

  const handleImgError = useCallback((idx: number, e: any) => {
    setErrorMap((s) => ({ ...s, [idx]: true }));
    e.currentTarget.src = "/logo-wrs.png";
  }, []);

  const openModal = (idx: number) => setOpenIndex(idx);
  const closeModal = () => setOpenIndex(null);
  const next = () => setOpenIndex((i) => (i === null ? null : (i + 1) % list.length));
  const prev = () => setOpenIndex((i) => (i === null ? null : (i - 1 + list.length) % list.length));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, list.length]);

  if (!list || list.length === 0) return null;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(${minTile}px, 1fr))`, gap: 12 }}>
        {list.map((src, idx) => (
          <figure key={idx} style={{ margin: 0 }}>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openModal(idx);
              }}
              style={{ display: "block", border: "1px solid #e5e7eb", borderRadius: 8, padding: 12, background: "#fff" }}
            >
              <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden", borderRadius: 6 }}>
                <img
                  src={src}
                  alt={`${altPrefix} ${idx + 1}`}
                  onError={(e) => handleImgError(idx, e)}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </a>
            
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Poprzednie"
            style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "transparent", color: "#fff", border: 0, fontSize: 28 }}
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={list[openIndex]}
              alt={`${altPrefix} ${openIndex + 1}`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/logo-wrs.png";
              }}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: 6,
                display: "block",
              }}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Następne"
            style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "transparent", color: "#fff", border: 0, fontSize: 28 }}
          >
            ›
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Zamknij"
            style={{ position: "absolute", right: 18, top: 18, background: "transparent", color: "#fff", border: 0, fontSize: 20 }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

