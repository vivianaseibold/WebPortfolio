import { useEffect, useRef, useState } from "react";
import worksRaw from "../data/artworks.json";
import "./art.css";
import Meta from "../components/Meta.jsx";

const BASE = import.meta.env.BASE_URL;

//map the artwork filename and info from artworks.json into ARTWORKS array
//'featured' highlights the LilyPad paintings so it appears larger rather than falling into the grid 
const ARTWORKS = worksRaw.map((w, idx) => {
  const id = w.id || `g${idx + 1}`;
  const stem = `${BASE}images/${w.file}`;
  return {
    id,
    title: w.title || `Piece ${idx + 1}`,
    alt: w.alt || `Artwork ${idx + 1}`,
    year: w.year || "",
    medium: w.medium || "",
    size: w.size || "",
    description: w.description || "",
    featured: Boolean(w.featured), 
    src: `${stem}.png`,
  };
});

//selected to keep track of which artwork card is open
//prevFocus helps the page reset to where it was after closing out a popup
export default function Art() {
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const prevFocus = useRef(null);

  //when selected is true, save the prevFocus and move focus to the X out button
  //when popup is closed, move focus back
  useEffect(() => {
    if (!selected) return;
    prevFocus.current = document.activeElement;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeBtnRef.current?.focus());
    return () => {
      document.body.style.overflow = "";
      prevFocus.current?.focus?.();
    };
  }, [selected]);

  //avoid keyboard trap -- keep the tab focus inside the popup
  function handleModalKeyDown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      setSelected(null);
      return;
    }
    if (e.key !== "Tab") return;

    const focusables = modalRef.current?.querySelectorAll(
      'a,button,textarea,input,select,[tabindex]:not([tabindex="-1"])'
    );
    if (!focusables?.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <>
    <Meta
      title= "Viviana Seibold Art"
      description= "Gallery of Artworks with clickable images for more details."
    />
      {/* set each artwork into a clickable card */}
      <div className="art-page">
        <div className="cards" role="list" aria-label="Artwork gallery">
          {ARTWORKS.map((w) => (
            <button
              key={w.id}
              type="button"
              role="listitem"
              className={`card ${w.featured ? "card--featured" : ""}`}
              onClick={() => setSelected(w)}
              aria-label={`Open details for ${w.title}`}
            >
              <img
                className="card__img"
                src={w.src}
                alt={w.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="card__label">{w.title}</span>
            </button>
          ))}
        </div>

        {selected && (
          <div
            className="art-modal-backdrop"
            onClick={() => setSelected(null)}
            role="presentation"
          >
            <div
              className="art-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="art-modal-title"
              aria-describedby={selected.description ? "art-modal-desc" : undefined}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={handleModalKeyDown}
              ref={modalRef}
            >
              <button
                className="close-btn"
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                ref={closeBtnRef}
              >
                ✕
              </button>

              <div className="art-modal__image">
                <img
                  className="modal__img"
                  src={selected.src}
                  alt={selected.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="art-modal__meta">
                <h3 id="art-modal-title">{selected.title}</h3>

                {(selected.year || selected.medium || selected.size) && (
                  <ul className="meta-list">
                    {selected.year && (
                      <li><strong>Year:</strong> {selected.year}</li>
                    )}
                    {selected.medium && (
                      <li><strong>Medium:</strong> {selected.medium}</li>
                    )}
                    {selected.size && (
                      <li><strong>Dimensions:</strong> {selected.size}</li>
                    )}
                  </ul>
                )}

                {selected.description && (
                  <p id="art-modal-desc" className="art-modal__desc">
                    {selected.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
