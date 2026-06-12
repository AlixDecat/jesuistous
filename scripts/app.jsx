// scripts/app.jsx — main app + routing + tweaks + Notes drawer
const { useState, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "grain": 10,
  "typo": "fraunces",
  "tone": "documentary",
  "flicker": true
}/*EDITMODE-END*/;

function useHashRoute() {
  const parse = () => {
    const raw = (location.hash || "#/").replace(/^#/, "") || "/";
    const [path, query] = raw.split("?");
    return { path, query: query || "" };
  };
  const [r, setR] = useState(parse);
  useEffect(() => {
    const onHash = () => setR(parse());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const navigate = (path) => { location.hash = "#" + path; };
  return [r.path, navigate, r.query];
}

function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem("lydie.lang") || "fr");
  useEffect(() => { localStorage.setItem("lydie.lang", lang); }, [lang]);
  return [lang, setLang];
}

function applyTypo(typo) {
  const root = document.documentElement;
  if (typo === "fraunces") {
    root.style.setProperty("--font-display", `"Fraunces", "Times New Roman", Georgia, serif`);
    root.style.setProperty("--font-sans",    `"Inter", system-ui, -apple-system, sans-serif`);
  } else if (typo === "instrument") {
    root.style.setProperty("--font-display", `"Instrument Serif", "Times New Roman", Georgia, serif`);
    root.style.setProperty("--font-sans",    `"Inter", system-ui, -apple-system, sans-serif`);
  } else if (typo === "mono") {
    root.style.setProperty("--font-display", `"IBM Plex Mono", "Space Mono", ui-monospace, monospace`);
    root.style.setProperty("--font-sans",    `"IBM Plex Sans", "Inter", system-ui, sans-serif`);
  } else if (typo === "affiche") {
    // Lang × affiche : capitales tracking +
    root.style.setProperty("--font-display", `"Fraunces", "Times New Roman", Georgia, serif`);
    root.style.setProperty("--font-sans",    `"Inter", system-ui, -apple-system, sans-serif`);
    root.style.setProperty("--affiche-tracking", ".06em");
  } else {
    root.style.removeProperty("--affiche-tracking");
  }
}

function applyTone(tone) {
  const root = document.documentElement;
  root.style.removeProperty("--c-bg-950");
  root.style.removeProperty("--c-bg-900");
  root.style.removeProperty("--c-red-500");
  if (tone === "editorial") {
    root.style.setProperty("--c-bg-950", "#050505");
    root.style.setProperty("--c-bg-900", "#090909");
  } else if (tone === "cinema") {
    root.style.setProperty("--c-bg-950", "#060604");
    root.style.setProperty("--c-bg-900", "#0a0a08");
  } else if (tone === "cronenberg") {
    // chair / métal — légère bascule chaude
    root.style.setProperty("--c-bg-950", "#08070a");
    root.style.setProperty("--c-bg-900", "#0c0b10");
  } else if (tone === "glitch") {
    root.style.setProperty("--c-red-500", "#FF1F3F");
  }
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, navigate, query] = useHashRoute();
  const [lang, setLang] = useLang();
  const [notesOpen, setNotesOpen] = useState(false);
  const T = window.I18N[lang];

  useEffect(() => {
    document.documentElement.style.setProperty("--grain-opacity", (t.grain / 100).toFixed(3));
  }, [t.grain]);
  useEffect(() => { applyTypo(t.typo); }, [t.typo]);
  useEffect(() => { applyTone(t.tone); }, [t.tone]);
  useEffect(() => {
    document.documentElement.classList.toggle("no-flicker", !t.flicker);
  }, [t.flicker]);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (!isCoarse) document.documentElement.classList.add("custom-cursor-on");
  }, []);

  useEffect(() => {
    if (!route.includes("#")) window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  const openNotes = () => setNotesOpen(true);
  const closeNotes = () => setNotesOpen(false);

  let page;
  if (route === "/" || route === "") {
    page = <HubPage t={T} navigate={navigate} lang={lang} openNotes={openNotes} />;
  } else if (route === "/oeuvres" || route === "/art") {
    page = <GalleryPage t={T} navigate={navigate} lang={lang} query={query} />;
  } else if (route === "/monstration") {
    page = <MonstrationPage t={T} navigate={navigate} lang={lang} query={query} />;
  } else if (route.startsWith("/work/")) {
    const id = route.split("/work/")[1];
    page = <ArtworkPage t={T} navigate={navigate} lang={lang} workId={id} />;
  } else if (route === "/demarche") {
    page = <DemarchePage t={T} navigate={navigate} lang={lang} />;
  } else if (route === "/presse") {
    page = <PressePage t={T} navigate={navigate} lang={lang} />;
  } else {
    page = <HubPage t={T} navigate={navigate} lang={lang} openNotes={openNotes} />;
  }

  const isHall = (route === "/" || route === "");

  return (
    <div className={"app" + (isHall ? " is-hall" : "")}>
      <CustomCursor />
      <Header route={route} navigate={navigate} lang={lang} setLang={setLang} t={T} openNotes={openNotes} />
      <main key={route}>{page}</main>

      <VisitProgress route={route} t={T} navigate={navigate} openNotes={openNotes} />
      <NotesDrawer open={notesOpen} onClose={closeNotes} t={T} navigate={navigate} route={route} />
      <WorkViewer t={T} lang={lang} />

      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === "fr" ? "Atmosphère" : "Atmosphere"} />
        <TweakSlider
          label={lang === "fr" ? "Grain" : "Grain"}
          value={t.grain}
          min={0} max={28} step={1} unit="%"
          onChange={(v) => setTweak("grain", v)}
        />
        <TweakRadio
          label={lang === "fr" ? "Ton" : "Tone"}
          value={t.tone}
          options={[
            { value: "documentary", label: "Doc." },
            { value: "editorial",   label: "Édit." },
            { value: "cinema",      label: "Ciné" },
            { value: "cronenberg",  label: "Cronen." },
          ]}
          onChange={(v) => setTweak("tone", v)}
        />
        <TweakToggle
          label={lang === "fr" ? "Flicker bleu" : "Blue flicker"}
          value={t.flicker}
          onChange={(v) => setTweak("flicker", v)}
        />
        <TweakSection label={lang === "fr" ? "Typographie" : "Typography"} />
        <TweakSelect
          label={lang === "fr" ? "Famille titres" : "Display family"}
          value={t.typo}
          options={[
            { value: "fraunces",   label: "Fraunces" },
            { value: "instrument", label: "Instrument Serif" },
            { value: "affiche",    label: "Affiche (Lang)" },
            { value: "mono",       label: "Mono brutalist" },
          ]}
          onChange={(v) => setTweak("typo", v)}
        />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
