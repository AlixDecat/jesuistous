// scripts/pages/Demarche.jsx — Salle 2 / Méthode — 6 blocs musée
function DemarchePage({ t, navigate, lang }) {
  const d = t.demarche;
  return (
    <div className="page-enter demarche-wrap">
      <section className="hub-hero grain">
        <div>
          <div className="eyebrow fade-up" style={{ marginBottom: 24 }}>{d.eyebrow}</div>
          <h1 className="fade-up" data-delay="1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 350, lineHeight: 1.04, letterSpacing: "-.025em" }}>
            {d.title}
          </h1>
          <p className="lede fade-up" data-delay="2" style={{ marginTop: 28 }}>{d.lede}</p>
        </div>
        <aside className="hero-meta fade-up" data-delay="3">
          <div style={{ color: "var(--c-blue-400)", letterSpacing: ".18em" }}>Méthode · v1.0</div>
          <div className="kv"><span>Format</span><span>{lang === "fr" ? "6 blocs courts" : "6 short blocks"}</span></div>
          <div className="kv"><span>Position</span><span>{lang === "fr" ? "Preuve avant promesse" : "Proof before promise"}</span></div>
          <div className="kv"><span>Statut</span><span>Public</span></div>
          <div className="kv"><span>{lang === "fr" ? "Mise à jour" : "Updated"}</span><span>2026</span></div>
        </aside>
      </section>

      <section className="method">
        {d.blocs.map((b, i) => (
          <article className="m-bloc" key={i}>
            <div className="m-bloc-head">
              <div className="m-bloc-n display">{b.n}</div>
              <h2 className="m-bloc-t">{b.t}</h2>
            </div>
            <div className="m-bloc-body">
              <p className="m-bloc-p">{b.body}</p>
              <ul className="m-bloc-bullets">
                {b.bullets.map((bl, j) => (
                  <li key={j}>
                    <span className="bk mono">{bl.k}</span>
                    <span className="bv">{bl.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <NextRoom
        to="/presse"
        ctaLabel={t.cta.nextRoom}
        label={lang === "fr" ? "Salle 4 — Bibliothèque" : "Room 4 — Library"}
        sub={lang === "fr" ? "Livres · œuvres disponibles · contact studio" : "Books · available works · studio contact"}
        navigate={navigate}
      />
      <Footer t={t} />
    </div>
  );
}
window.DemarchePage = DemarchePage;
