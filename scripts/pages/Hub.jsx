// scripts/pages/Hub.jsx — Hall (homepage onirique) — Visite nuit · Lang × Cronenberg
function HubPage({ t, navigate, lang, openNotes }) {
  const h = t.hall;
  const [chapter, setChapter] = React.useState(0);
  const total = h.couloir.chapters.length;

  // Subtle blue flicker timing
  const [flicker, setFlicker] = React.useState(false);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      if (Math.random() < 0.012) {
        setFlicker(true);
        setTimeout(() => setFlicker(false), 90);
      }
      raf = setTimeout(tick, 200);
    };
    raf = setTimeout(tick, 1200);
    return () => clearTimeout(raf);
  }, []);

  const goNext = () => setChapter((c) => Math.min(c + 1, total - 1));
  const goPrev = () => setChapter((c) => Math.max(c - 1, 0));

  // Keyboard nav for couloir when chapter section is in view
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const scrollToCouloir = () => {
    const el = document.getElementById("couloir");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hall-wrap page-enter">
      {/* HERO plein écran — ville-machine + peau-métal */}
      <section className={"hall-hero grain" + (flicker ? " is-flicker" : "")}>
        <div className="hall-bg" aria-hidden="true">
          <image-slot
            id="hall-bg"
            shape="rect"
            placeholder="Image d'accueil — Lang × Cronenberg (N&B, contrasté)"
            style={{ width: "100%", height: "100%" }}
          ></image-slot>
          <div className="hall-veil"></div>
          <div className="hall-scanlines"></div>
        </div>

        <div className="hall-corner tl mono">
          <span className="dot-red"></span>
          <span>{h.eyebrow}</span>
        </div>
        <div className="hall-corner tr mono">
          <span>#JE SUIS TOUS · v1.0</span>
        </div>

        <div className="hall-center">
          <h1 className="hall-h1">{h.h1}</h1>
          <h2 className="hall-h2">{h.h2}</h2>

          <div className="hall-ctas hall-ctas--three">
            <a href="#/oeuvres" className="hall-door hd--red" data-cur="cta-red"
               onClick={(e) => { e.preventDefault(); navigate("/oeuvres"); }}>
              <span className="hd-k mono">{lang === "fr" ? "Salle 1" : "Room 1"}</span>
              <span className="hd-t">JE SUIS TOUS</span>
              <span className="hd-s">{lang === "fr" ? "Œuvres · exposition" : "Works · exhibition"}</span>
              <span className="hd-arr">→</span>
            </a>
            <a href="#/monstration" className="hall-door hd--blue" data-cur="link"
               onClick={(e) => { e.preventDefault(); navigate("/monstration"); }}>
              <span className="hd-k mono">{lang === "fr" ? "Salle 2" : "Room 2"}</span>
              <span className="hd-t">JE SUIS MONSTRE</span>
              <span className="hd-s">{lang === "fr" ? "Œuvres · MONSTRATION" : "Works · MONSTRATION"}</span>
              <span className="hd-arr">→</span>
            </a>
            <a href="#/demarche" className="hall-door hd--ghost" data-cur="link"
               onClick={(e) => { e.preventDefault(); navigate("/demarche"); }}>
              <span className="hd-k mono">{lang === "fr" ? "Salle 3" : "Room 3"}</span>
              <span className="hd-t">JE SUIS UN CORPUS</span>
              <span className="hd-s">{lang === "fr" ? "Méthode" : "Method"}</span>
              <span className="hd-arr">→</span>
            </a>
          </div>

          <div className="hall-theses fade-up" data-delay="3">
            {h.twoTheses && h.twoTheses.map((th, i) => (
              <div key={i} className="hall-these">
                <div className="ht-k mono">{th.k}</div>
                <div className="ht-v">{th.v}</div>
              </div>
            ))}
          </div>

          <div className="hall-under mono">{h.microUnder}</div>
        </div>

        <button className="hall-scroll mono" onClick={scrollToCouloir} data-cur="link" aria-label={h.scroll}>
          <span>{h.scroll}</span>
          <span className="arr-d">↓</span>
        </button>
      </section>

      {/* COULOIR — 3 chapitres, navigation Suivant/Précédent */}
      <section className="couloir grain" id="couloir">
        <div className="couloir-top">
          <div className="eyebrow">{h.couloir.label} · 0{chapter + 1} / 0{total}</div>
          <div className="couloir-intro">{h.couloir.intro}</div>
        </div>

        <div className="couloir-stage">
          {h.couloir.chapters.map((c, i) => (
            <article key={i}
              className={"chapter" + (i === chapter ? " is-active" : i < chapter ? " is-past" : " is-future")}
              aria-hidden={i !== chapter}>
              <div className="ch-n display">{c.n}</div>
              <h3 className="ch-t">{c.t}</h3>
              <p className="ch-a">{c.a}</p>
              <p className="ch-b">{c.b}</p>
            </article>
          ))}
        </div>

        <div className="couloir-controls">
          <button className="cc-btn mono" onClick={goPrev} disabled={chapter === 0} data-cur="link">
            <span className="arr-l">←</span> {t.cta.prevRoom}
          </button>

          <div className="cc-dots">
            {h.couloir.chapters.map((_, i) => (
              <button key={i}
                className={"cc-dot" + (i === chapter ? " is-active" : "")}
                onClick={() => setChapter(i)}
                aria-label={`Chapitre ${i + 1}`}
                data-cur="link">
                <span className="cc-dot-n mono">0{i + 1}</span>
              </button>
            ))}
          </div>

          <button className="cc-btn mono" onClick={goNext} disabled={chapter === total - 1} data-cur="link">
            {t.cta.nextRoom} <span className="arr">→</span>
          </button>
        </div>

        {chapter === total - 1 && (
          <div className="couloir-after fade-up">
            <button className="btn btn--secondary" data-cur="link" onClick={openNotes}>
              ◆ {t.cta.openNotes}
            </button>
            <a href="#/oeuvres" className="btn btn--primary" data-cur="cta-red"
               onClick={(e) => { e.preventDefault(); navigate("/oeuvres"); }}>
              {t.cta.seeWork} <span className="arr">→</span>
            </a>
          </div>
        )}
      </section>

      <NextRoom
        to="/oeuvres"
        ctaLabel={t.cta.nextRoom}
        label={lang === "fr" ? "Salle 1 — Œuvres" : "Room 1 — Works"}
        sub={lang === "fr" ? "Six sections · masonry · cartels" : "Six sections · masonry · cards"}
        navigate={navigate}
      />
      <Footer t={t} />
    </div>
  );
}

window.HubPage = HubPage;
