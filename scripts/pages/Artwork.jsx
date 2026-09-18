// scripts/pages/Artwork.jsx — Œuvre detail (cartel format)

function ArtworkPage({ t, navigate, lang, workId }) {
  const a = t.artwork;
  const works = window.WORKS;
  const sections = t.gallery.sections;
  const work = works.find((w) => w.id === workId) || works[0];
  const sec = sections.find((s) => s.id === work.section) || sections[0];
  const title = work.title[lang] || work.title.fr;

  const related = works.filter((w) => w.section === work.section && w.id !== work.id).slice(0, 5);

  // Next work overall for "Salle suivante" feel
  const idx = works.indexOf(work);
  const nextWork = works[(idx + 1) % works.length];
  const nextWorkSec = sections.find((s) => s.id === nextWork.section);

  // Frame adopts the image's real ratio so it shows uncropped
  // (CSS 4/5 stays as the loading fallback).
  const naturalRatio = useNaturalRatio(work.img);

  return (
    <div className="artwork-wrap page-enter">
      <nav className="artwork-breadcrumb">
        <a href="#/oeuvres" onClick={(e) => { e.preventDefault(); navigate("/oeuvres"); }} data-cur="link">{a.breadcrumb[0]}</a>
        <span className="sep">/</span>
        <a href={`#/oeuvres?s=${sec.id}`} onClick={(e) => { e.preventDefault(); navigate(`/oeuvres?s=${sec.id}`); }} data-cur="link">{sec.title}</a>
        <span className="sep">/</span>
        <span className="cur">{title}</span>
      </nav>

      <div className="artwork-grid">
        <figure className="artwork-media-fig">
          <div className="artwork-media grain" data-cur="art"
               style={naturalRatio ? { aspectRatio: naturalRatio } : null}>
            <image-slot
              id={`detail-${work.id}`}
              shape="rect"
              src={work.img || undefined}
              placeholder={`${title} · ${sec.title}`}
              style={{ width: "100%", height: "100%" }}
            ></image-slot>
          </div>
          <figcaption className="cartel-museum">
            <div className="cm-title">
              <span className="cm-t">{title}</span>
              <span className="cm-year"> — {work.year}</span>
            </div>
            <div className="cm-ref mono">{work.ref}</div>
            <div className="cm-rows">
              <div className="cm-row"><span className="k">Série</span><span className="v">#JE SUIS TOUS</span></div>
              <div className="cm-row"><span className="k">Section</span><span className="v">{sec.n} · {sec.title}</span></div>
              <div className="cm-row"><span className="k">Type</span><span className="v">{a.cartel.kind}</span></div>
              <div className="cm-row"><span className="k">Outil</span><span className="v">{a.cartel.outil}</span></div>
              <div className="cm-row"><span className="k">Note</span><span className="v">{a.cartel.note}</span></div>
            </div>
          </figcaption>
        </figure>

        <aside className="artwork-side">
          <div className="series">
            <span className="red">●</span>
            <span>{sec.n} · {sec.title}</span>
          </div>
          <h1>{title}</h1>
          <p className="lede">{a.lede}</p>

          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>{a.contextTitle}</div>
            <blockquote className="section-cartel-q">
              <span className="mono">{lang === "fr" ? "Cartel de salle" : "Room card"}</span>
              <p>{sec.cartel}</p>
            </blockquote>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 10, color: "var(--c-blue-400)" }}>{a.protocolTitle}</div>
            <ProofBox
              tools={a.protocol.tools}
              sources={a.protocol.sources}
              limits={a.protocol.limits}
              ctaLabel={a.protocol.logCta}
            />
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <a href={t.cta.contactHref} target="_blank" rel="noopener" className="btn btn--primary" data-cur="cta-red">
              {t.cta.contact} <span className="arr">↗</span>
            </a>
            <a href={`#/oeuvres?s=${sec.id}`} className="btn btn--secondary" data-cur="link"
               onClick={(e) => { e.preventDefault(); navigate(`/oeuvres?s=${sec.id}`); }}>
              {t.cta.backToGallery}
            </a>
          </div>
        </aside>
      </div>

      <section className="related">
        <h3>{a.relatedTitle}</h3>
        <div className="related-grid">
          {related.map((w) => (
            <a key={w.id}
               href={`#/work/${w.id}`}
               className="r-slot grain"
               data-cur="art"
               onClick={(e) => { e.preventDefault(); navigate(`/work/${w.id}`); window.scrollTo(0, 0); }}>
              <image-slot
                id={`rel-${w.id}`}
                shape="rect"
                src={w.img || undefined}
                placeholder={`${sec.title} · ${w.year}`}
                style={{ width: "100%", height: "100%" }}
              ></image-slot>
              <div className="r-cap mono">{w.title[lang] || w.title.fr}</div>
            </a>
          ))}
        </div>
      </section>

      <NextRoom
        to={`/work/${nextWork.id}`}
        ctaLabel={lang === "fr" ? "Œuvre suivante" : "Next work"}
        label={nextWork.title[lang] || nextWork.title.fr}
        sub={`${nextWorkSec ? nextWorkSec.n + " · " + nextWorkSec.title : ""} — ${nextWork.year}`}
        navigate={(p) => { navigate(p); window.scrollTo(0, 0); }}
      />
      <Footer t={t} />
    </div>
  );
}

window.ArtworkPage = ArtworkPage;
