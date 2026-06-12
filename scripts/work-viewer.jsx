// scripts/work-viewer.jsx — Plein écran "exposition" viewer (Mode A)
// Mounted once at app root. Listens to window event "viewer:open" {id, source, sectionId}.
// source: "gallery" | "monstration"
// Sequence = full source works, optionally filtered by sectionId.

const { useState: _vUseState, useEffect: _vUseEffect, useMemo: _vUseMemo, useCallback: _vUseCallback } = React;

function WorkViewer({ t, lang }) {
  const [open, setOpen] = _vUseState(false);
  const [seq, setSeq] = _vUseState([]);          // array of works
  const [idx, setIdx] = _vUseState(0);
  const [source, setSource] = _vUseState("gallery");
  const [showCartel, setShowCartel] = _vUseState(true);
  const [showReading, setShowReading] = _vUseState(true);
  const [dark, setDark] = _vUseState(false);     // mode obscur total

  // Listen for openers
  _vUseEffect(() => {
    const onOpen = (e) => {
      const { id, source: src, sectionId } = e.detail || {};
      const src2 = src || "gallery";
      const all = (src2 === "monstration") ? window.MONSTRATION_WORKS : window.WORKS;
      let pool = all;
      if (sectionId && sectionId !== "all") pool = all.filter(w => w.section === sectionId);
      const i = pool.findIndex(w => w.id === id);
      setSource(src2);
      setSeq(pool);
      setIdx(i >= 0 ? i : 0);
      setOpen(true);
    };
    window.addEventListener("viewer:open", onOpen);
    return () => window.removeEventListener("viewer:open", onOpen);
  }, []);

  // Body scroll lock
  _vUseEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Keyboard
  const close = _vUseCallback(() => { setOpen(false); setDark(false); }, []);
  const next  = _vUseCallback(() => setIdx(i => Math.min(i + 1, seq.length - 1)), [seq.length]);
  const prev  = _vUseCallback(() => setIdx(i => Math.max(i - 1, 0)), []);

  _vUseEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "c" || e.key === "C") setShowCartel(v => !v);
      else if (e.key === "r" || e.key === "R") setShowReading(v => !v);
      else if (e.key === "d" || e.key === "D") setDark(v => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  const work = seq[idx];
  if (!open || !work) return null;

  // Source-specific labels
  const isMon = source === "monstration";
  const sectionData = isMon
    ? t.monstration.sections.find(s => s.id === work.section)
    : t.gallery.sections.find(s => s.id === work.section);
  const sectionTitle = sectionData ? sectionData.title : (window.SECTION_LABEL[work.section]?.[lang] || work.section);
  const roomLabel = isMon ? "MONSTRATION" : "#JE SUIS TOUS";
  const roomN = isMon ? (lang === "fr" ? "Salle 2" : "Room 2") : (lang === "fr" ? "Salle 1" : "Room 1");
  const readingDefault = isMon ? t.monstration.reading
                                : (lang === "fr"
                                    ? "Cette image teste l’accès au cadre : que change l’incarnation quand le décor reste iconique ?"
                                    : "This image tests access to the frame: what does embodiment change when the set stays iconic?");
  // ref creator parsing — keep simple
  const ref = work.ref.replace(/^r[ée]f\.\s*/i, "");
  const cartel = (window.CARTELS && window.CARTELS[work.id]) || null;
  const readingText = cartel ? cartel.read[lang] : readingDefault;

  const progressPct = seq.length > 1 ? ((idx + 1) / seq.length) * 100 : 100;

  return (
    <div className={"viewer" + (dark ? " is-dark" : "") + (open ? " is-open" : "")} role="dialog" aria-modal="true">
      {/* Stage */}
      <div className="vw-stage">
        <div className="vw-image">
          {/* Drop-zone for user image (persisted via image-slot) */}
          <image-slot id={`viewer-${work.id}`} shape="rect" src={work.img || undefined} placeholder={(work.title[lang] || work.title.fr)}></image-slot>
        </div>
      </div>

      {/* Top bar */}
      <header className={"vw-top" + (dark ? " is-hidden" : "")}>
        <div className="vw-top-l">
          <div className="vw-room mono">{roomN} · {roomLabel}</div>
          <div className="vw-section mono">{sectionTitle}</div>
        </div>
        <div className="vw-top-c">
          <div className="vw-seq mono">
            {String(idx + 1).padStart(2, "0")} <span className="vw-seq-sep">/</span> {String(seq.length).padStart(2, "0")}
          </div>
          <div className="vw-bar"><div className="vw-bar-fill" style={{ width: progressPct + "%" }}></div></div>
        </div>
        <div className="vw-top-r">
          <button className="vw-tool mono" data-cur="link" onClick={() => setShowCartel(v => !v)} aria-pressed={showCartel}>
            <span className="vw-dot" style={{ background: showCartel ? "var(--c-red-500)" : "transparent" }}></span>
            {lang === "fr" ? "Cartel" : "Card"}
          </button>
          <button className="vw-tool mono" data-cur="link" onClick={() => setShowReading(v => !v)} aria-pressed={showReading}>
            <span className="vw-dot" style={{ background: showReading ? "var(--c-blue-400)" : "transparent" }}></span>
            {lang === "fr" ? "Lecture" : "Reading"}
          </button>
          <button className="vw-tool mono" data-cur="link" onClick={() => setDark(v => !v)} aria-pressed={dark}>
            <span className="vw-dot" style={{ background: dark ? "#fff" : "transparent" }}></span>
            {lang === "fr" ? "Obscur" : "Dark"}
          </button>
          <button className="vw-close mono" data-cur="link" onClick={close} aria-label={t.cta.close}>
            <span aria-hidden="true">×</span>
            <span>{lang === "fr" ? "Fermer" : "Close"}</span>
          </button>
        </div>
      </header>

      {/* Cartel (right side) */}
      {showCartel && !dark && (
        <aside className="vw-cartel">
          <div className="vc-eyebrow mono">{lang === "fr" ? "Cartel" : "Card"}</div>
          <h2 className="vc-title">{work.title[lang] || work.title.fr}</h2>
          <div className="vc-kind">{t.artwork.cartel.kind} — {work.year}</div>
          <dl className="vc-grid">
            <div><dt>{lang === "fr" ? "Référence" : "Reference"}</dt><dd>{ref}</dd></div>
            <div><dt>{lang === "fr" ? "Série" : "Series"}</dt><dd>{roomLabel}</dd></div>
            <div><dt>{lang === "fr" ? "Sous-section" : "Sub-section"}</dt><dd>{sectionTitle}</dd></div>
            <div><dt>{lang === "fr" ? "Outil" : "Tool"}</dt><dd>{t.artwork.cartel.outil}</dd></div>
          </dl>
          <div className="vc-badges">
            <span className="vc-badge"><span className="vcb-i">✓</span>{lang === "fr" ? "Corpus consentant" : "Consenting corpus"}</span>
            <span className="vc-badge"><span className="vcb-i">✕</span>{lang === "fr" ? "Pas de deepfake" : "No deepfake"}</span>
            <span className="vc-badge"><span className="vcb-i">◉</span>{lang === "fr" ? "Transparence" : "Transparency"}</span>
          </div>

          {showReading && (
            <div className="vc-reading">
              <div className="vc-r-eyebrow mono">{lang === "fr" ? "Lecture" : "Reading"}</div>
              {cartel && cartel.quote && <p className="vc-quote">« {cartel.quote} »</p>}
              <p>{readingText}</p>
            </div>
          )}

          <div className="vc-acq">
            <div className="vc-acq-eyebrow mono">{lang === "fr" ? "Acquisition / expo" : "Acquisition / show"}</div>
            <div className="vc-acq-rows">
              <div><span>{lang === "fr" ? "Formats" : "Formats"}</span><span>30×40 · 50×70 · 70×100</span></div>
              <div><span>{lang === "fr" ? "Édition" : "Edition"}</span><span>5 + 2 AP</span></div>
            </div>
            <button className="vc-acq-cta mono" data-cur="link">{lang === "fr" ? "Demander la fiche œuvre" : "Request the work sheet"} →</button>
          </div>
        </aside>
      )}

      {/* Nav buttons */}
      <button className={"vw-nav vw-prev" + (idx === 0 ? " is-disabled" : "")} onClick={prev} disabled={idx === 0} aria-label={t.cta.prevRoom} data-cur="link">
        <span aria-hidden="true">←</span>
      </button>
      <button className={"vw-nav vw-next" + (idx === seq.length - 1 ? " is-disabled" : "")} onClick={next} disabled={idx === seq.length - 1} aria-label={t.cta.nextRoom} data-cur="link">
        <span aria-hidden="true">→</span>
      </button>

      {/* Bottom keyboard hint */}
      {!dark && (
        <div className="vw-hint mono">
          <span><kbd>←</kbd><kbd>→</kbd> {lang === "fr" ? "naviguer" : "navigate"}</span>
          <span><kbd>C</kbd> {lang === "fr" ? "cartel" : "card"}</span>
          <span><kbd>R</kbd> {lang === "fr" ? "lecture" : "reading"}</span>
          <span><kbd>D</kbd> {lang === "fr" ? "obscur" : "dark"}</span>
          <span><kbd>Esc</kbd> {lang === "fr" ? "fermer" : "close"}</span>
        </div>
      )}
    </div>
  );
}

window.WorkViewer = WorkViewer;
