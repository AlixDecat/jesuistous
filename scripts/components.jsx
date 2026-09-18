// scripts/components.jsx — shared components (v2)
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ── Custom cursor ────────────────────────────────────────────────
function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    let rx = 0, ry = 0, mx = 0, my = 0, raf = 0;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      if (dotRef.current)  dotRef.current.style.transform  = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  useEffect(() => {
    const onOver = (e) => {
      const t = e.target.closest("[data-cur]");
      setVariant(t ? t.dataset.cur : "default");
    };
    document.addEventListener("mouseover", onOver);
    return () => document.removeEventListener("mouseover", onOver);
  }, []);

  const cls = "cursor " + (
    variant === "link" ? "is-link" :
    variant === "cta-red" ? "is-cta-red" :
    variant === "art" ? "is-art" : ""
  );
  return (
    <React.Fragment>
      <div ref={ringRef} className={cls} aria-hidden="true"></div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
    </React.Fragment>
  );
}

// ── Header ───────────────────────────────────────────────────────
function Header({ route, navigate, lang, setLang, t }) {
  const isActive = (path) => {
    if (path === "/") return route === "/";
    return route.startsWith(path);
  };
  return (
    <header className="hdr hdr--lean">
      <div className="hdr-inner">
        <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="hdr-logo" data-cur="link">
          <span className="dot"></span>
          <span>Lydie · <em style={{ fontStyle: "italic", color: "var(--c-text-400)", fontFamily: "var(--font-display)" }}>#JE SUIS TOUS</em></span>
        </a>
        <div className="hdr-right">
          <div className="lang-switch" role="group" aria-label="Language">
            <button data-cur="link" className={lang === "fr" ? "is-active" : ""} onClick={() => setLang("fr")}>FR</button>
            <button data-cur="link" className={lang === "en" ? "is-active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href={t.cta.contactHref} target="_blank" rel="noopener" className="btn btn--primary" data-cur="cta-red">
            {t.cta.contact} <span className="arr">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

// ── Footer ───────────────────────────────────────────────────────
function Footer({ t }) {
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="sig">{f.sig.a}<em>{f.sig.em}</em>{f.sig.b}</div>
      <div className="col">
        <span className="lbl">{f.colA[0]}</span>
        <a href="mailto:catalanolydie@gmail.com" data-cur="link">catalanolydie@gmail.com</a>
        <span>Lyon · FR</span>
      </div>
      <div className="col">
        <span className="lbl">{f.colB[0]}</span>
        <a href="https://www.instagram.com/lydie_iam/" target="_blank" rel="noopener" data-cur="link">Instagram ↗</a>
      </div>
      <div className="baseline">
        <span>{f.baseline[0]}</span>
        <span>{f.baseline[1]}</span>
      </div>
    </footer>
  );
}

// ── ProofBox ─────────────────────────────────────────────────────
function ProofBox({ tools, sources, limits, ctaLabel, compact = false }) {
  return (
    <div className="proofbox" style={compact ? { padding: "18px 16px" } : null}>
      <div className="pb-row"><span className="k">Tools</span><span className="v">{tools}</span></div>
      <div className="pb-row"><span className="k">Sources</span><span className="v">{sources}</span></div>
      <div className="pb-row"><span className="k">Limits</span><span className="v">{limits}</span></div>
      {ctaLabel && <a href="#" className="pb-cta" data-cur="link">{ctaLabel}</a>}
    </div>
  );
}

// ── Cartel (under an artwork) ────────────────────────────────────
function Cartel({ title, ref_, year, sectionLabel, outil, note }) {
  return (
    <figcaption className="cartel">
      <div className="cartel-t">
        <span className="cartel-title">{title}</span>
        {ref_ && <span className="cartel-ref"> · {ref_}</span>}
        {year && <span className="cartel-year"> — {year}</span>}
      </div>
      <div className="cartel-rows">
        <div className="cartel-row"><span className="k">Section</span><span className="v">#JE SUIS TOUS · {sectionLabel}</span></div>
        {outil && <div className="cartel-row"><span className="k">Outil</span><span className="v">{outil}</span></div>}
        {note  && <div className="cartel-row"><span className="k">Note</span><span className="v">{note}</span></div>}
      </div>
    </figcaption>
  );
}

// ── useNaturalRatio ──────────────────────────────────────────────
// Measures an image's intrinsic aspect ratio so its frame can adopt it
// and show the picture uncropped. Returns null until known (or no src).
function useNaturalRatio(src) {
  const [ratio, setRatio] = useState(null);
  useEffect(() => {
    setRatio(null);
    if (!src) return;
    let alive = true;
    const im = new Image();
    im.onload = () => {
      if (alive && im.naturalWidth && im.naturalHeight) {
        setRatio(im.naturalWidth + " / " + im.naturalHeight);
      }
    };
    im.src = src;
    return () => { alive = false; };
  }, [src]);
  return ratio;
}

// ── ArtworkCard ──────────────────────────────────────────────────
function ArtworkCard({ work, onOpen, lang, sectionLabel }) {
  // The image's real ratio wins so it displays in full; the declared
  // ratio only serves as the frame while the image loads (or is absent).
  const naturalRatio = useNaturalRatio(work.img);
  const fallbackRatio = {
    tall:    "4 / 5",
    "tall-x":"3 / 4",
    square:  "1 / 1",
    wide:    "16 / 10",
  }[work.ratio] || "4 / 5";
  const ratioStyle = { aspectRatio: naturalRatio || fallbackRatio };

  return (
    <figure className="artcard m-item" data-cur="art" onClick={() => onOpen(work.id)}>
      <div className="media" style={ratioStyle}>
        <image-slot
          id={`work-${work.id}`}
          shape="rect"
          src={work.img || undefined}
          placeholder={`${sectionLabel} · ${work.year}`}
          style={{ width: "100%", height: "100%" }}
        ></image-slot>
        <div className="corner" aria-hidden="true">+</div>
        <div className="overlay">
          <div className="s">{sectionLabel} · {work.year}</div>
          <div className="t">{work.title[lang] || work.title.fr}</div>
        </div>
      </div>
      <figcaption className="card-cartel">
        <div className="cc-title">
          <span>{work.title[lang] || work.title.fr}</span>
          <span className="cc-year"> — {work.year}</span>
        </div>
        <div className="cc-ref mono">{work.ref}</div>
      </figcaption>
    </figure>
  );
}

// ── Tag ──────────────────────────────────────────────────────────
function Tag({ children, className = "" }) {
  return <span className={"tag " + className}><span className="dot-r"></span>{children}</span>;
}

// ── Floating "Revenir au plan" link ──────────────────────────────
function BackToPlan({ navigate, label, route }) {
  if (route === "/" || route === "") return null;
  return (
    <a href="#/" onClick={(e) => { e.preventDefault(); navigate("/"); }}
       className="back-plan" data-cur="link">
      ← {label}
    </a>
  );
}

// ── NextRoom band (bottom of pages) ──────────────────────────────
function NextRoom({ to, label, sub, navigate, ctaLabel }) {
  return (
    <a href={`#${to}`}
       onClick={(e) => { e.preventDefault(); navigate(to); }}
       className="next-room" data-cur="link">
      <div className="nr-cta mono">{ctaLabel}</div>
      <div className="nr-t">{label}</div>
      <div className="nr-s">{sub}</div>
      <span className="nr-arr" aria-hidden="true">→</span>
    </a>
  );
}

// ── Visit Progress (fixed) ───────────────────────────────────────
function VisitProgress({ route, t, navigate, openNotes }) {
  const rooms = [
    { id: "/",            label: t.visit.rooms[0] },
    { id: "/oeuvres",     label: t.visit.rooms[1] },
    { id: "/monstration", label: t.visit.rooms[2] },
    { id: "/demarche",    label: t.visit.rooms[3] },
    { id: "/presse",      label: t.visit.rooms[4] },
  ];
  let activeIdx = 0;
  if (route === "/" || route === "") activeIdx = 0;
  else if (route.startsWith("/oeuvres") || route.startsWith("/work/")) activeIdx = 1;
  else if (route.startsWith("/monstration")) activeIdx = 2;
  else if (route.startsWith("/demarche")) activeIdx = 3;
  else if (route.startsWith("/presse")) activeIdx = 4;

  return (
    <div className="visit-progress" role="navigation" aria-label="Plan de visite">
      <div className="vp-label mono">{t.visit.label}</div>
      <div className="vp-track">
        {rooms.map((r, i) => (
          <a key={r.id}
             href={"#" + r.id}
             onClick={(e) => { e.preventDefault(); navigate(r.id); }}
             className={"vp-step" + (i === activeIdx ? " is-active" : i < activeIdx ? " is-past" : "")}
             data-cur="link">
            <span className="vp-n mono">0{i + 1}</span>
            <span className="vp-t">{r.label}</span>
          </a>
        ))}
      </div>
      <button className="vp-notes mono" onClick={openNotes} data-cur="link" aria-label={t.nav.notes}>
        <span className="vp-notes-i" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="3" y="2" width="10" height="12" rx="1"></rect>
            <line x1="5.5" y1="5" x2="10.5" y2="5"></line>
            <line x1="5.5" y1="8" x2="10.5" y2="8"></line>
            <line x1="5.5" y1="11" x2="8.5" y2="11"></line>
          </svg>
        </span>
        <span>{t.nav.notes}</span>
        <span className="vp-notes-pulse" aria-hidden="true"></span>
      </button>
    </div>
  );
}

// ── Notes Drawer ─────────────────────────────────────────────────
function NotesDrawer({ open, onClose, t, navigate, route }) {
  const n = t.notes;
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const rooms = [
    { id: "/",            label: t.visit.rooms[0] },
    { id: "/oeuvres",     label: t.visit.rooms[1] },
    { id: "/monstration", label: t.visit.rooms[2] },
    { id: "/demarche",    label: t.visit.rooms[3] },
    { id: "/presse",      label: t.visit.rooms[4] },
  ];

  return (
    <React.Fragment>
      <div className={"notes-scrim" + (open ? " is-open" : "")} onClick={onClose} aria-hidden="true"></div>
      <aside className={"notes-drawer" + (open ? " is-open" : "")} aria-hidden={!open} aria-label={n.title}>
        <header className="nd-head">
          <div>
            <div className="nd-eyebrow mono">{t.nav.notes}</div>
            <h2 className="nd-title">{n.title}</h2>
            <div className="nd-sub">{n.subtitle}</div>
          </div>
          <button className="nd-close mono" onClick={onClose} data-cur="link" aria-label={t.cta.close}>
            <span aria-hidden="true">×</span>
            <span>{t.cta.close}</span>
          </button>
        </header>

        <div className="nd-body">
          <section className="nd-section">
            <div className="nd-sec-h mono">{n.planTitle}</div>
            <ol className="nd-plan">
              {rooms.map((r, i) => {
                let isActive = false;
                if (i === 0) isActive = route === "/" || route === "";
                else if (i === 1) isActive = route.startsWith("/oeuvres") || route.startsWith("/work/");
                else if (i === 2) isActive = route.startsWith("/monstration");
                else if (i === 3) isActive = route.startsWith("/demarche");
                else if (i === 4) isActive = route.startsWith("/presse");
                return (
                  <li key={r.id} className={isActive ? "is-active" : ""}>
                    <a href={"#" + r.id} data-cur="link"
                       onClick={(e) => { e.preventDefault(); navigate(r.id); onClose(); }}>
                      <span className="np-n mono">0{i + 1}</span>
                      <span className="np-t">{r.label}</span>
                      {isActive && <span className="np-here mono">— ici</span>}
                    </a>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="nd-section">
            <div className="nd-sec-h mono">{n.defsTitle}</div>
            <dl className="nd-defs">
              {n.defs.map((d, i) => (
                <div className="nd-def" key={i}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="nd-section">
            <div className="nd-sec-h mono" style={{ color: "var(--c-blue-400)" }}>{n.guardsTitle}</div>
            <ul className="nd-guards">
              {n.guards.map((g, i) => (
                <li key={i}>
                  <span className="ng-dot"></span>
                  <strong>{g.k}</strong> <span className="ng-sep">—</span> <span>{g.v}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="nd-section">
            <div className="nd-sec-h mono">{n.linksTitle}</div>
            <div className="nd-links">
              {n.links.map((l, i) => (
                l.ext ? (
                  <a key={i} href={l.to} target="_blank" rel="noopener" data-cur="link"
                     onClick={() => { onClose(); }}
                     className={"nd-link" + (i === 0 ? " is-primary" : "")}>
                    <span>{l.t}</span>
                    <span className="arr">↗</span>
                  </a>
                ) : (
                  <a key={i} href={"#" + l.to} data-cur="link"
                     onClick={(e) => { e.preventDefault(); navigate(l.to); onClose(); }}
                     className={"nd-link" + (i === 0 ? " is-primary" : "")}>
                    <span>{l.t}</span>
                    <span className="arr">→</span>
                  </a>
                )
              ))}
            </div>
          </section>
        </div>
      </aside>
    </React.Fragment>
  );
}

Object.assign(window, {
  CustomCursor, Header, Footer, ProofBox, ArtworkCard, Tag,
  Cartel, BackToPlan, NextRoom, VisitProgress, NotesDrawer,
  useNaturalRatio,
});
