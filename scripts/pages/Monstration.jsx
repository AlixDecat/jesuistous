// scripts/pages/Monstration.jsx — Salle 2 : MONSTRATION / Femmes fatales
// Reuses gallery vocabulary (masonry + cartels). Three sub-sections.

function MonstrationPage({ t, navigate, lang, query }) {
  const m = t.monstration;
  const sParam = new URLSearchParams(query || "").get("s");
  const [sel, setSel] = React.useState(sParam || "all");
  React.useEffect(() => { setSel(sParam || "all"); }, [sParam]);

  const [q, setQ] = React.useState("");
  const works = window.MONSTRATION_WORKS;
  const sections = m.sections;

  const counts = React.useMemo(() => {
    const c = { all: works.length };
    works.forEach((w) => { c[w.section] = (c[w.section] || 0) + 1; });
    return c;
  }, [works]);

  const matches = (w) => {
    if (!q.trim()) return true;
    const qq = q.toLowerCase();
    const sec = sections.find((s) => s.id === w.section);
    return (
      (w.title[lang] || w.title.fr).toLowerCase().includes(qq) ||
      (sec ? sec.title.toLowerCase().includes(qq) : false) ||
      String(w.year).includes(qq) ||
      w.ref.toLowerCase().includes(qq)
    );
  };

  const setSection = (id) => {
    setSel(id);
    if (id === "all") navigate("/monstration");
    else navigate(`/monstration?s=${id}`);
  };

  const openWork = (id) => {
    window.dispatchEvent(new CustomEvent("viewer:open", {
      detail: { id, source: "monstration", sectionId: sel }
    }));
  };

  return (
    <div className="gallery-wrap mon-wrap page-enter grain">
      <div className="gallery-head mon-head">
        <div>
          <div className="eyebrow mon-eyebrow fade-up" style={{ marginBottom: 14 }}>{m.eyebrow}</div>
          <h1 className="mon-h1 fade-up" data-delay="1">{m.title}</h1>
          <div className="gh-sub mon-sub fade-up" data-delay="2">{m.subtitle}</div>
        </div>
        <div className="gh-meta fade-up" data-delay="2">
          <div className="n">{String(works.length).padStart(2, "0")}</div>
          <div>{m.total}</div>
          <div style={{ marginTop: 6 }}>{m.meta1}</div>
        </div>
      </div>

      {/* Opening text */}
      <div className="mon-opening fade-up" data-delay="2">
        {m.opening.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        <div className="mon-cartel">
          <span className="mono">Cartel —</span> {m.cartel}
        </div>
      </div>

      <div className="filterbar fade-up" data-delay="3">
        <button
          className={"filter-pill" + (sel === "all" ? " is-active" : "")}
          onClick={() => setSection("all")}
          data-cur="link">
          {m.filters.all}
          <span className="count">{counts.all}</span>
        </button>
        <span className="sep"></span>
        {sections.map((s, i) => (
          <button key={s.id}
            className={"filter-pill" + (sel === s.id ? " is-active" : "")}
            onClick={() => setSection(s.id)}
            data-cur="link"
            title={s.subtitle}>
            <span className="mono" style={{ color: "var(--c-blue-400)", marginRight: 6 }}>0{i + 1}</span>
            {s.title}
            <span className="count">{counts[s.id] || 0}</span>
          </button>
        ))}
        <div className="filter-search">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--c-text-600)" }}>
            <circle cx="7" cy="7" r="5"></circle>
            <line x1="11" y1="11" x2="14" y2="14"></line>
          </svg>
          <input type="text" placeholder={lang === "fr" ? "Rechercher…" : "Search…"} value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
      </div>

      {sel === "all" ? (
        <div className="sections-list">
          {sections.map((sec, idx) => {
            const items = works.filter((w) => w.section === sec.id && matches(w));
            if (!items.length) return null;
            return (
              <MonSectionBlock
                key={sec.id}
                sec={sec}
                idx={idx}
                items={items}
                lang={lang}
                onOpen={openWork}
                navigate={navigate}
                jumpLabel={lang === "fr" ? "Ouvrir cette sous-section" : "Open this sub-section"}
              />
            );
          })}
        </div>
      ) : (
        (() => {
          const sec = sections.find((s) => s.id === sel) || sections[0];
          const idx = sections.indexOf(sec);
          const items = works.filter((w) => w.section === sec.id && matches(w));
          const nextSec = sections[(idx + 1) % sections.length];
          return (
            <React.Fragment>
              <MonSectionBlock sec={sec} idx={idx} items={items} lang={lang} onOpen={openWork} solo={true} navigate={navigate} />
              <a href={`#/monstration?s=${nextSec.id}`}
                 onClick={(e) => { e.preventDefault(); setSection(nextSec.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                 className="next-section" data-cur="link">
                <div className="mono" style={{ color: "var(--c-blue-400)", fontSize: 10, letterSpacing: ".14em" }}>{lang === "fr" ? "Sous-section suivante" : "Next sub-section"}</div>
                <div className="ns-t">{nextSec.title}</div>
                <span className="ns-arr">→</span>
              </a>
            </React.Fragment>
          );
        })()
      )}

      <NextRoom
        to="/demarche"
        ctaLabel={t.cta.nextRoom}
        label={lang === "fr" ? "Salle 3 — Méthode" : "Room 3 — Method"}
        sub={lang === "fr" ? "Comment c’est fabriqué" : "How it’s made"}
        navigate={navigate}
      />
      <Footer t={t} />
    </div>
  );
}

function MonSectionBlock({ sec, idx, items, lang, onOpen, solo, navigate, jumpLabel }) {
  return (
    <section className={"section-block mon-block" + (solo ? " is-solo" : "")} id={`section-${sec.id}`}>
      <header className="section-header fade-up">
        <div className="sh-n mono" style={{ color: "var(--c-blue-400)" }}>{sec.n}</div>
        <h2 className="sh-t">{sec.title}</h2>
        <div className="sh-sub">{sec.subtitle}</div>
        <div className="sh-opening">
          {sec.opening.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="sh-cartel">
          <span className="mono">Cartel —</span> {sec.cartel}
        </div>
      </header>

      <div className="masonry">
        {items.map((w, i) => (
          <div key={w.id} className="fade-up" style={{ animationDelay: `${Math.min(i * 35, 400)}ms` }}>
            <ArtworkCard work={w} onOpen={onOpen} lang={lang} sectionLabel={sec.title} />
          </div>
        ))}
      </div>

      {jumpLabel && (
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 28, marginBottom: 32 }}>
          <a href={`#/monstration?s=${sec.id}`}
             onClick={(e) => { e.preventDefault(); navigate(`/monstration?s=${sec.id}`); window.scrollTo({ top: 0 }); }}
             className="btn btn--ghost" data-cur="link">
            {jumpLabel} <span className="arr">→</span>
          </a>
        </div>
      )}
    </section>
  );
}

window.MonstrationPage = MonstrationPage;
