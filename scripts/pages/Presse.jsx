// scripts/pages/Presse.jsx — Salle 3 / Proposer
function PressePage({ t, navigate, lang }) {
  const p = t.presse;
  return (
    <div className="page-enter">
      <section className="hub-hero grain">
        <div>
          <div className="eyebrow fade-up" style={{ marginBottom: 24 }}>{p.eyebrow}</div>
          <h1 className="fade-up" data-delay="1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 350, lineHeight: 1.04, letterSpacing: "-.025em" }}>
            {p.title}
          </h1>
          <p className="lede fade-up" data-delay="2" style={{ marginTop: 28 }}>{p.lede}</p>
          <div className="ctas fade-up" data-delay="3">
            <a href={t.cta.contactHref} target="_blank" rel="noopener" className="btn btn--primary" data-cur="cta-red">
              {t.cta.contact} <span className="arr">↗</span>
            </a>
            <a href={t.cta.listHref} target="_blank" rel="noopener" className="btn btn--secondary" data-cur="link">
              {t.cta.list}
            </a>
          </div>
        </div>
        <aside className="hero-meta fade-up" data-delay="4">
          <div style={{ color: "var(--c-blue-400)", letterSpacing: ".18em" }}>Contact direct</div>
          <div className="kv"><span>Email</span><span>catalanolydie@gmail.com</span></div>
          <div className="kv"><span>Ville</span><span>Lyon · FR</span></div>
          <div className="kv"><span>Instagram</span><span>@lydie_iam</span></div>
        </aside>
      </section>

      <section className="hub-section">
        <div className="hub-section-head">
          <h2>{lang === "fr" ? "Trois portes d’entrée" : "Three doors in"}</h2>
          <p className="intro">
            {lang === "fr"
              ? "Selon votre rôle, choisissez le bon dossier. Tous les documents sont envoyés sous 72h."
              : "Pick the right kit for your role. All documents are sent within 72 hours."}
          </p>
        </div>
        <div className="bloc-grid">
          {p.blocs.map((b, i) => (
            <div className="bloc" key={i}>
              <div className="bloc-k mono">{b.k}</div>
              <h3>{b.t}</h3>
              <p>{b.b}</p>
              <a href={b.href || "#"} target={b.href ? "_blank" : undefined} rel={b.href ? "noopener" : undefined} className="btn btn--secondary" data-cur="link"
                 onClick={b.href ? undefined : (e) => e.preventDefault()}>
                {b.cta} <span className="arr">{b.href ? "↗" : "→"}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {p.events && p.events.length > 0 && (
        <section className="hub-section">
          <div className="hub-section-head">
            <h2>{p.eventsTitle}</h2>
            <p className="intro mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase" }}>
              Index · 2024–2026
            </p>
          </div>
          <div className="events">
            {p.events.map((e, i) => (
              <div className="event" key={i}>
                <div className="ev-date">{e.date}</div>
                <div className="ev-mid">
                  <div className="ev-lieu mono">{e.lieu}</div>
                  <div className="ev-t">{e.t}</div>
                </div>
                <div className={"ev-statut mono " + (e.statut.toLowerCase().includes("conf") ? "is-confirmed" : e.statut.toLowerCase().includes("arch") ? "is-archived" : "is-announced")}>
                  <span className="dot"></span>{e.statut}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <NextRoom
        to="/"
        ctaLabel={t.cta.backToPlan}
        label={lang === "fr" ? "Retour au vestibule" : "Back to the vestibule"}
        sub={lang === "fr" ? "Plan complet · recommencer la visite" : "Full plan · restart the visit"}
        navigate={navigate}
      />
      <Footer t={t} />
    </div>
  );
}
window.PressePage = PressePage;
