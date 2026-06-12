// scripts/i18n.jsx — translations + data
// V3 — Pivot "Visite nuit" (Lang × Cronenberg).
// Hall onirique + couloir 3 chapitres + Notes drawer + Méthode 6 blocs.

const I18N = {
  fr: {
    nav: {
      plan: "Plan",
      oeuvres: "Œuvres",
      demarche: "Méthode",
      presse: "Bibliothèque",
      notes: "Notes",
    },
    cta: {
      acquisition: "Proposer une exposition / acquisition",
      seeWork: "Voir l’œuvre",
      seeMethod: "Voir la méthode",
      openNotes: "Ouvrir les Notes",
      backToGallery: "Retour aux œuvres",
      backToPlan: "Revenir au plan",
      nextRoom: "Salle suivante",
      prevRoom: "Salle précédente",
      contact: "Commander les livres",
      contactHref: "https://www.partage.fr/products/livre-de-lexposition-jesuistous-par-lydie-catalano",
      list: "Consulter la liste des œuvres disponibles",
      listHref: "https://www.partage.fr/collections/lydie-catalano",
      viewLog: "Voir le log de génération",
      close: "Fermer",
    },
    lang: { fr: "FR", en: "EN" },

    visit: {
      label: "Visite",
      rooms: ["Hall", "JE SUIS TOUS", "JE SUIS MONSTRE", "Méthode", "Bibliothèque"],
    },

    // ───── HALL (homepage onirique) ─────
    hall: {
      eyebrow: "Visite nuit · Salle 0",
      h1: "ENTREZ DANS LE CADRE.",
      h2: "Qui a le droit d’y rester ?",
      microUnder: "Visite nuit. Notes disponibles à tout moment.",
      secondThese: "À côté de l’accès au rôle (#JE SUIS TOUS), cette visite ouvre une seconde question : qui a le droit d’être opaque ?",
      twoTheses: [
        { k: "#JE SUIS TOUS", v: "Accès au rôle. Transfert de légitimité." },
        { k: "MONSTRATION",   v: "Droit à l’opacité. Femmes fatales sans justification." },
      ],
      scroll: "Descendre dans le couloir",

      // Couloir = 3 chapitres
      couloir: {
        label: "Couloir",
        intro: "Trois écrans pour comprendre comment lire ce qui suit.",
        chapters: [
          {
            n: "01",
            t: "HORS-CHAMP",
            a: "On vous apprend très tôt quels corps sont « faits pour » le rôle.",
            b: "Le reste disparaît dans le hors-champ.",
          },
          {
            n: "02",
            t: "ANOMALIE",
            a: "Je réinscris une anomalie dans des icônes de pop culture.",
            b: "Pas pour imiter : pour déplacer la norme.",
          },
          {
            n: "03",
            t: "PARTENARIAT",
            a: "Ici, la machine n’est pas un auteur.",
            b: "C’est un partenaire qui révèle — et que je cadre.",
          },
        ],
      },
    },

    // ───── NOTES DRAWER ─────
    notes: {
      title: "NOTES DE VISITE",
      subtitle: "Repères de lecture. Pas de jargon.",
      planTitle: "Plan de la visite",
      defsTitle: "Définitions",
      defs: [
        { k: "Cadre",                       v: "Ce qui rend un rôle visible, crédible, central." },
        { k: "Hors-champ",                  v: "Ce que l’image ne montre pas (ou ne sait pas montrer)." },
        { k: "Anomalie",                    v: "Un corps ou un visage que la norme classe comme « non conforme »." },
        { k: "Partenariat homme–machine",   v: "Je dirige le geste ; la machine amplifie et révèle." },
        { k: "Mythologies visuelles",       v: "Les icônes et récits qui programment nos attentes." },
        { k: "Femme fatale",                v: "Une figure d’opacité : elle ne s’explique pas, elle agit." },
        { k: "Opacité",                     v: "Le droit de ne pas être rendue « lisible » pour être acceptable." },
        { k: "Menace",                      v: "Un privilège narratif : être dangereuse sans être neutralisée par une morale." },
      ],
      guardsTitle: "Garanties",
      guards: [
        { k: "Corpus consentant", v: "autoportraits uniquement." },
        { k: "Pas de deepfake",   v: "aucun emprunt non consenti." },
        { k: "Transparence",      v: "outils mentionnés, choix assumés." },
      ],
      linksTitle: "Aller à",
      links: [
        { t: "Aller à la Méthode (concret)",                to: "/demarche" },
        { t: "Commander les livres",                      to: "https://www.partage.fr/products/livre-de-lexposition-jesuistous-par-lydie-catalano", ext: true },
        { t: "Consulter les œuvres disponibles",          to: "https://www.partage.fr/collections/lydie-catalano", ext: true },
      ],
    },

    // ───── ŒUVRES (Salle 1) — conservé ─────
    gallery: {
      title: "Salle 1 — Œuvres",
      titleSub: "Six sections · #JE SUIS TOUS",
      meta1: "Index 2024–2026",
      total: "œuvres",
      eyebrow: "Salle 1 / Œuvres",
      search: "Rechercher…",
      filters: { all: "Toutes les sections" },
      sections: [
        { id: "cadres",    n: "Section 1", title: "Moi dans leurs cadres",          subtitle: "Quand l’anomalie investit les temples du masculin", opening: "Ces images reprennent des films où l’autorité, l’action et la légitimité sont majoritairement incarnées par des corps masculins. Le projet ne cherche pas l’hommage : il teste une hypothèse simple. Que se passe-t-il si le rôle « central » est tenu par le même visage, le même corps, d’une image à l’autre — un corps que le cinéma mainstream laisse souvent au second plan ?\n\nEn entrant dans ces cadres, vous ne voyez pas une « version alternative » du film : vous voyez le mécanisme de distribution du visible.", cartel: "Vous n’êtes pas face à une parodie : vous êtes face à un transfert de légitimité." },
        { id: "desir",     n: "Section 2", title: "Mon regard sur leur désir",      subtitle: "Retourner l’objectification en affirmation",        opening: "Cette section travaille des scènes où le désir est cadré comme une capture : poses, glamour, fétichisation, contrôle du regard. Le geste consiste à reprendre ces codes sans les reproduire à l’identique : les conserver suffisamment pour qu’ils soient immédiatement reconnaissables, et les détourner suffisamment pour qu’ils cessent de fonctionner « contre » le sujet.\n\nVous êtes invité·e à observer ce qui change quand l’image ne demande plus d’être consommée, mais interrogée.", cartel: "Ici, le désir devient un dispositif visible, pas une évidence." },
        { id: "ombres",    n: "Section 3", title: "Mes zones d’ombre",              subtitle: "Habiter la violence et la folie au féminin",         opening: "Le cinéma tolère la contradiction masculine (violence, chaos, transgression) comme matière narrative. Pour les femmes, ces états sont souvent psychologisés, excusés ou neutralisés. Cette section place volontairement un corps féminin « hors norme » dans des archétypes sombres sans fournir de justification morale.\n\nL’objectif n’est pas la provocation : c’est la restitution d’un droit à la complexité.", cartel: "Le trouble n’est pas un effet : c’est une réattribution de rôle." },
        { id: "pouvoir",   n: "Section 4", title: "Mon pouvoir dans leurs empires", subtitle: "L’outsider prend le contrôle",                       opening: "Ici, vous entrez dans des récits de pouvoir : clans, hiérarchies, domination, stratégies. Le projet teste la résistance de ces mythologies à un simple déplacement : changer l’incarnation du « chef » sans changer les signes extérieurs du pouvoir.\n\nCe que vous regardez n’est pas « moi à la place d’eux » : c’est la question de ce qui, dans l’image, fabrique l’autorité.", cartel: "Le décor ne fait pas le pouvoir. L’incarnation le révèle." },
        { id: "super",     n: "Section 5", title: "Mes super-pouvoirs",             subtitle: "Sous le masque, des forces en place",                opening: "La pop culture fabrique des permissions : qui peut sauver, conduire, dominer, décider, porter le mythe. En réinvestissant ces figures (cape, masque, mission), cette section déplace la question des « capacités » vers celle des « autorisations ».\n\nVous êtes invité·e à lire ces images comme des tests : que reste-t-il du héros quand le corps autorisé change ?", cartel: "Le super-pouvoir le plus rare, c’est l’accès au rôle." },
        { id: "transcend", n: "Section 6", title: "Mes transcendances",             subtitle: "L’anomalie comme révélation",                        opening: "Cette dernière section aborde la métamorphose (religieuse, technologique, morale). Là où certains récits choisissent un « élu » conforme aux standards dominants, #JE SUIS TOUS maintient la même incarnation : une continuité volontaire. Vous n’assistez pas à une « amélioration » : vous assistez à une réinscription.\n\nL’IA est ici un levier de déplacement — pas un sujet en soi.", cartel: "La transcendance commence quand le rôle cesse d’être conditionnel." },
      ],
    },

    artwork: {
      breadcrumb: ["Œuvres"],
      seriesLabel: "Section",
      contextTitle: "Cartel",
      protocolTitle: "Protocole",
      relatedTitle: "Autres œuvres de la section",
      lede: "Auto-portrait recodé. La référence cinématographique est conservée dans le cadrage et la lumière ; l’incarnation est déplacée. La pièce documente ce que le rôle exige du corps autorisé — et ce qui change quand ce corps cesse d’être conforme.",
      cartel: { kind: "Auto-portrait recodé", outil: "IA générative · Stable Diffusion / LoRA", note: "Corpus photographique consentant (autoportraits)" },
      protocol: { tools: "Stable Diffusion XL · LoRA personnalisé · ComfyUI · Capture One", sources: "Auto-portraits photographiques 2022–2026 · prompts manuscrits", limits: "Le modèle restitue mal certaines carnations · biais culturel UE / féminin", logCta: "Voir le log de génération (.json)" },
    },

    // ───── MÉTHODE (Salle 2) — 6 blocs musée ─────
    demarche: {
      eyebrow: "Salle 2 / Méthode",
      title: "Comment c’est fabriqué",
      lede: "Six blocs courts. Chaque pièce de l’exposition rejoue ce protocole avec ses propres variables — vous le retrouvez dans chaque cartel.",
      blocs: [
        {
          n: "01",
          t: "Intention",
          body: "Je travaille la représentation comme un montage : ce que l’on cadre, ce que l’on coupe, ce que l’on rend crédible. Mon point de départ est simple : la pop culture produit des icônes, et ces icônes distribuent des rôles. #JE SUIS TOUS réinscrit une même incarnation — la mienne — dans ces mythologies visuelles pour rendre visible un mécanisme : qui a accès au centre de l’image.",
          bullets: [
            { k: "Sujet",    v: "cadre / hors-champ / accès au rôle" },
            { k: "Matériau", v: "icônes, scènes, codes reconnaissables" },
            { k: "But",      v: "déplacer la norme, pas « refaire » le film" },
          ],
        },
        {
          n: "02",
          t: "Partenariat homme–machine",
          body: "Je ne délègue pas l’œuvre à une machine. J’utilise un partenariat homme–machine : la machine génère, je dirige. Ce partenariat me sert à tester rapidement des variations de rôle, de lumière, de posture, puis à choisir celles qui tiennent politiquement et visuellement. La co-création est une méthode de déplacement : elle montre ce que les systèmes « préféreraient » produire par défaut.",
          bullets: [
            { k: "La machine", v: "amplifie / révèle / répète des normes" },
            { k: "L’artiste",  v: "cadre / choisit / tranche" },
            { k: "Le résultat",v: "une image qui fait apparaître un tri" },
          ],
        },
        {
          n: "03",
          t: "Corpus consentant",
          body: "Le projet repose sur un corpus consentant : je travaille à partir de mes autoportraits. C’est un choix esthétique (continuité d’un visage à travers les mythes) et un choix éthique (pas d’appropriation de l’image d’autrui). Ce cadre permet aussi une lecture claire : ce n’est pas « une femme à la place d’un homme », c’est la même personne qui traverse 30 rôles, comme un test répété.",
          bullets: [
            { k: "Source",      v: "autoportraits uniquement" },
            { k: "Limite",      v: "pas de deepfake" },
            { k: "Continuité",  v: "même visage = même regard critique" },
          ],
        },
        {
          n: "04",
          t: "Recodage",
          body: "Chaque pièce est un auto-portrait recodé : une scène iconique reste reconnaissable, mais l’incarnation change. Je conserve volontairement des indices (lumière, costume, posture, décor) pour que la référence soit immédiate. Ensuite, je déplace la lecture : l’image cesse d’être « naturelle ». Elle redevient un dispositif. Vous pouvez la lire comme un cartel vivant : que raconte ce rôle, et à qui est-il habituellement réservé ?",
          bullets: [
            { k: "Référence",   v: "reconnaissable, assumée" },
            { k: "Déplacement", v: "incarnation, pas décor" },
            { k: "Lecture",     v: "test de légitimité" },
          ],
        },
        {
          n: "05",
          t: "Transparence",
          body: "Je mentionne les outils utilisés quand ils participent au sens. Ici, l’IA générative est un levier de production et un révélateur culturel : elle synthétise des stéréotypes, des préférences, des exclusions. Je n’en fais pas un argument d’innovation. Je l’emploie comme un miroir gouverné : un miroir qui ne décide pas, mais qui rend visible ce qui est déjà là.",
          bullets: [
            { k: "Outils cités", v: "IA générative (Stable Diffusion / LoRA)" },
            { k: "Rôle",         v: "levier + miroir, pas auteur" },
            { k: "Position",     v: "preuve > promesse" },
          ],
        },
        {
          n: "06",
          t: "Formats d’exposition / acquisition",
          body: "Le projet est conçu pour être parcouru comme une visite : sections thématiques, cartels, progression. Chaque œuvre peut être exposée seule, mais l’ensemble prend sa force en série : répétition, variation, effet de preuve. Pour les expositions, je fournis un dossier (statement, visuels, sélection, besoins techniques) et une version presse. Pour l’acquisition, une liste d’œuvres disponibles et leurs formats.",
          bullets: [
            { k: "Parcours",    v: "6 sections, cartels, progression" },
            { k: "Expo",        v: "dossier PDF + sélection sur mesure" },
            { k: "Acquisition", v: "œuvres disponibles + formats" },
          ],
        },
      ],
    },

    // ───── MONSTRATION (Salle 2) ─────
    monstration: {
      eyebrow: "Salle 2 / Monstration",
      title: "MONSTRATION",
      titleSub: "Femmes fatales · cycle 2025–2026",
      subtitle: "Femmes fatales : le droit d’être fascinante sans être justifiée.",
      meta1: "Cycle 2025–2026",
      total: "œuvres",
      opening: "Le cinéma a longtemps accordé aux hommes le privilège d’être dangereux, opaques, moralement ambigus — et d’être aimés pour cela. Aux femmes, on demande des raisons : un trauma, une cause, une morale.\n\nMONSTRATION teste l’inverse : que se passe-t-il quand un corps que la norme rend « inoffensif » entre dans l’archétype de la femme fatale sans justification ? Ici, l’IA n’est pas un sujet : c’est un levier de mise en scène. Je m’inscris dans des codes (film noir, cabaret, lumière coupante, surfaces vivantes) pour rendre visible une censure culturelle : qui a le droit d’être une menace — et de rester opaque.",
      cartel: "Ici, l’opacité n’est pas un défaut : c’est un droit.",
      filters: { all: "Toute la salle" },
      reading: "Cette image teste le droit à l’opacité : une femme peut-elle être fatale sans être expliquée ?",
      sections: [
        { id: "cadre",       n: "Sous-section 1", title: "Cadre",        subtitle: "Codes du noir, lumière coupante, scène assumée",       opening: "Première entrée dans la salle : un travail sur les codes — film noir, cabaret, contre-jour. Ce sont des mises en scène qui ont longtemps appartenu à une certaine grammaire du regard. Ici, l’image n’imite pas l’affiche : elle la réoccupe.", cartel: "Le cadre n’est pas un costume : c’est une revendication." },
        { id: "menace",      n: "Sous-section 2", title: "Menace",       subtitle: "Être dangereuse sans être punie",                        opening: "La menace est un privilège narratif. Cette sous-section met en scène la dangerosité sans la résoudre : pas de morale, pas de neutralisation. La question n’est plus « pourquoi » mais « qui a le droit ».", cartel: "Ici, la menace ne se justifie pas : elle s’affirme." },
        { id: "fascination", n: "Sous-section 3", title: "Fascination",  subtitle: "Surfaces vivantes, opacité revendiquée (Cronenberg)",  opening: "Dernière entrée : matrices vivantes, peau qui déborde, organique sous le glamour. La fascination ne demande pas d’explication. Elle déplace le centre du désir vers ce qui dérange — et reste là.", cartel: "La fascination est une zone : on n’en sort pas explicitée." },
      ],
    },

    presse: {
      eyebrow: "Salle 4 / Bibliothèque",
      title: "Bibliothèque · livres · œuvres",
      lede: "Plutôt qu’un dossier PDF, le projet existe en livres et en tirages. Commandez l’ouvrage d’exposition, consultez la collection d’œuvres disponibles — ou retrouvez les expositions passées et à venir.",
      blocs: [
        { k: "L’ouvrage",         t: "Livre de l’exposition",     b: "#JE SUIS TOUS, par Lydie Catalano. Tirage limité, impression soignée. Vendu directement par Partage.", cta: "Commander le livre", href: "https://www.partage.fr/products/livre-de-lexposition-jesuistous-par-lydie-catalano" },
        { k: "La collection",      t: "Œuvres disponibles",         b: "Tirages pigmentaires, éditions limitées (3 + 1 EA), certificat d’authenticité signé. Toute la collection en ligne, mise à jour régulièrement.", cta: "Voir la collection", href: "https://www.partage.fr/collections/lydie-catalano" },
        { k: "Contact direct",     t: "Commissaires · médias",     b: "Pour une exposition, une interview ou un kit visuel sur mesure, écrivez-moi : réponse sous 72h.",                                                                cta: "Écrire à Lydie", href: "mailto:catalanolydie@gmail.com" },
      ],
      eventsTitle: "Expositions",
      events: [],
    },

    footer: {
      sig: { a: "Une exposition sur ", em: "qui est autorisé à incarner un rôle", b: ". Preuve avant promesse." },
      colA: ["Contact", "catalanolydie@gmail.com", "Lyon · FR", ""],
      colB: ["Suivre", "Instagram"],
      baseline: ["© Lydie · 2026", "#JE SUIS TOUS · v1.0"],
    },
  },

  en: {
    nav: { plan: "Plan", oeuvres: "Works", demarche: "Method", presse: "Library", notes: "Notes" },
    cta: {
      acquisition: "Propose a show / acquisition",
      seeWork: "Enter the work",
      seeMethod: "Read the method",
      openNotes: "Open the Notes",
      backToGallery: "Back to works",
      backToPlan: "Back to plan",
      nextRoom: "Next room",
      prevRoom: "Previous room",
      contact: "Order the books",
      contactHref: "https://www.partage.fr/products/livre-de-lexposition-jesuistous-par-lydie-catalano",
      list: "Browse available works",
      listHref: "https://www.partage.fr/collections/lydie-catalano",
      viewLog: "View the generation log",
      close: "Close",
    },
    lang: { fr: "FR", en: "EN" },

    visit: { label: "Visit", rooms: ["Hall", "JE SUIS TOUS", "JE SUIS MONSTRE", "Method", "Library"] },

    hall: {
      eyebrow: "Night visit · Room 0",
      h1: "STEP INTO THE FRAME.",
      h2: "Who is allowed to remain?",
      microUnder: "Night visit. Notes available at any time.",
      secondThese: "Beside access to the role (#JE SUIS TOUS), this visit opens a second question: who is allowed to be opaque?",
      twoTheses: [
        { k: "#JE SUIS TOUS", v: "Access to the role. Transfer of legitimacy." },
        { k: "MONSTRATION",   v: "Right to opacity. Femmes fatales without justification." },
      ],
      scroll: "Down the corridor",
      couloir: {
        label: "Corridor",
        intro: "Three short screens to learn how to read what follows.",
        chapters: [
          { n: "01", t: "OFF-FRAME",    a: "We learn very early which bodies are ‘made for’ the role.", b: "The rest disappears off-frame." },
          { n: "02", t: "ANOMALY",      a: "I re-inscribe an anomaly inside pop-culture icons.",        b: "Not to imitate: to displace the norm." },
          { n: "03", t: "PARTNERSHIP",  a: "Here the machine is not an author.",                         b: "It is a partner that reveals — and that I frame." },
        ],
      },
    },

    notes: {
      title: "VISIT NOTES",
      subtitle: "Reading aids. No jargon.",
      planTitle: "Visit plan",
      defsTitle: "Definitions",
      defs: [
        { k: "Frame",                 v: "What makes a role visible, credible, central." },
        { k: "Off-frame",             v: "What the image doesn’t show (or can’t)." },
        { k: "Anomaly",               v: "A body or face that the norm files as ‘non-conforming’." },
        { k: "Human–machine partnership", v: "I direct the gesture; the machine amplifies and reveals." },
        { k: "Visual mythologies",    v: "The icons and stories that program our expectations." },
        { k: "Femme fatale",          v: "A figure of opacity: she doesn’t explain, she acts." },
        { k: "Opacity",               v: "The right not to be made ‘legible’ to be acceptable." },
        { k: "Threat",                v: "A narrative privilege: dangerous without being neutralized by a moral." },
      ],
      guardsTitle: "Guarantees",
      guards: [
        { k: "Consenting corpus", v: "self-portraits only." },
        { k: "No deepfake",       v: "no non-consenting borrowing." },
        { k: "Transparency",      v: "tools cited, choices owned." },
      ],
      linksTitle: "Go to",
      links: [
        { t: "Go to the Method (concrete)",   to: "/demarche" },
        { t: "Order the books",                to: "https://www.partage.fr/products/livre-de-lexposition-jesuistous-par-lydie-catalano", ext: true },
        { t: "Browse available works",          to: "https://www.partage.fr/collections/lydie-catalano", ext: true },
      ],
    },

    gallery: {
      title: "Room 1 — Works",
      titleSub: "Six sections · #JE SUIS TOUS",
      meta1: "Index 2024–2026",
      total: "works",
      eyebrow: "Room 1 / Works",
      search: "Search…",
      filters: { all: "All sections" },
      sections: [
        { id: "cadres",    n: "Section 1", title: "Me, in their frames",          subtitle: "When the anomaly steps into the temples of the masculine", opening: "These images take films where authority, action and legitimacy are overwhelmingly carried by male bodies. The project is not a tribute: it tests a simple hypothesis. What happens if the ‘central’ role is held by the same face, the same body, from one image to the next — a body mainstream cinema usually keeps in the background?\n\nWalking into these frames, you are not seeing an ‘alternative version’ of the film: you are seeing the mechanism that distributes the visible.", cartel: "You are not facing parody: you are facing a transfer of legitimacy." },
        { id: "desir",     n: "Section 2", title: "My gaze on their desire",      subtitle: "Turning objectification into assertion",                    opening: "This section works with scenes where desire is framed as capture: posing, glamour, fetishization, control of the gaze. The gesture is to take those codes without reproducing them identically: keep them recognizable, divert them enough so they stop working against the subject.\n\nYou are invited to notice what changes when the image no longer asks to be consumed, but to be questioned.", cartel: "Here desire becomes a visible device, no longer a given." },
        { id: "ombres",    n: "Section 3", title: "My shadow zones",              subtitle: "Inhabiting violence and madness in the feminine",           opening: "Cinema tolerates male contradiction (violence, chaos, transgression) as narrative material. For women, those states are usually psychologized, excused, neutralized. This section deliberately places a non-conforming female body inside dark archetypes — without providing moral justification.\n\nThe aim isn’t provocation: it’s restoring a right to complexity.", cartel: "Trouble isn’t an effect: it’s a re-attribution of role." },
        { id: "pouvoir",   n: "Section 4", title: "My power inside their empires",subtitle: "The outsider takes control",                                opening: "Here you enter stories of power: clans, hierarchies, domination, strategy. The project tests how these mythologies hold up against a single displacement: change the embodiment of the ‘chief’ without changing the outward signs of power.\n\nWhat you are watching is not ‘me in their place’ — it’s the question of what, in the image, manufactures authority.", cartel: "The set doesn’t make power. Embodiment reveals it." },
        { id: "super",     n: "Section 5", title: "My super-powers",              subtitle: "Under the mask, forces already in place",                   opening: "Pop culture manufactures permissions: who is allowed to save, drive, dominate, decide, carry the myth. By re-inhabiting these figures (cape, mask, mission), this section shifts the question from ‘abilities’ to ‘authorizations’.\n\nRead these images as tests: what remains of the hero when the authorized body changes?", cartel: "The rarest super-power is access to the role." },
        { id: "transcend", n: "Section 6", title: "My transcendences",            subtitle: "Anomaly as revelation",                                     opening: "This closing section addresses metamorphosis — religious, technological, moral. Where some stories pick a ‘chosen one’ matching dominant standards, #JE SUIS TOUS keeps the same embodiment: a deliberate continuity. You are not watching an ‘improvement’: you are watching a re-inscription.\n\nAI is a displacement lever here — not the subject.", cartel: "Transcendence begins when the role stops being conditional." },
      ],
    },

    artwork: {
      breadcrumb: ["Works"],
      seriesLabel: "Section",
      contextTitle: "Card",
      protocolTitle: "Protocol",
      relatedTitle: "More from this section",
      lede: "Recoded self-portrait. The cinematic reference is preserved in framing and light; embodiment is displaced. The piece documents what the role demands of the authorized body — and what changes when that body stops conforming.",
      cartel: { kind: "Recoded self-portrait", outil: "Generative AI · Stable Diffusion / LoRA", note: "Consenting photographic corpus (self-portraits)" },
      protocol: { tools: "Stable Diffusion XL · custom LoRA · ComfyUI · Capture One", sources: "Photographic self-portraits 2022–2026 · handwritten prompts", limits: "Model handles certain skin tones poorly · LoRA biased EU / female", logCta: "View the generation log (.json)" },
    },

    demarche: {
      eyebrow: "Room 2 / Method",
      title: "How it’s made",
      lede: "Six short blocks. Every piece in the show reruns this protocol with its own variables — you find it on each card.",
      blocs: [
        { n: "01", t: "Intention",                body: "I treat representation as montage: what we frame, what we cut, what we make credible. My starting point is simple: pop culture manufactures icons, and those icons distribute roles. #JE SUIS TOUS re-inscribes one embodiment — mine — inside those visual mythologies to make a mechanism visible: who has access to the center of the image.", bullets: [ { k: "Subject", v: "frame / off-frame / access to the role" }, { k: "Material", v: "icons, scenes, recognizable codes" }, { k: "Aim", v: "displace the norm, not ‘remake’ the film" } ] },
        { n: "02", t: "Human–machine partnership",body: "I don’t delegate the work to a machine. I use a human–machine partnership: the machine generates, I direct. The partnership lets me test variations of role, light, posture quickly, then choose the ones that hold politically and visually. Co-creation is a method of displacement: it shows what the systems would ‘prefer’ to produce by default.", bullets: [ { k: "The machine", v: "amplifies / reveals / repeats norms" }, { k: "The artist", v: "frames / chooses / cuts" }, { k: "The result", v: "an image that makes a sorting visible" } ] },
        { n: "03", t: "Consenting corpus",        body: "The project rests on a consenting corpus: I work from my own self-portraits. It is an aesthetic choice (a single face across the myths) and an ethical one (no appropriation of someone else’s image). The frame also makes the reading clear: not ‘a woman in a man’s place’, but the same person crossing 30 roles — as a repeated test.", bullets: [ { k: "Source",     v: "self-portraits only" }, { k: "Limit",      v: "no deepfake" }, { k: "Continuity", v: "same face = same critical gaze" } ] },
        { n: "04", t: "Recoding",                 body: "Every piece is a recoded self-portrait: an iconic scene stays recognizable, but the embodiment changes. I deliberately keep cues (light, costume, posture, set) so the reference is immediate. Then I displace the reading: the image stops being ‘natural’. It becomes a device again. You can read it as a living card: what does this role tell us, and to whom is it usually reserved?", bullets: [ { k: "Reference", v: "recognizable, owned" }, { k: "Shift",     v: "embodiment, not set" }, { k: "Reading",   v: "test of legitimacy" } ] },
        { n: "05", t: "Transparency",             body: "I cite the tools when they take part in meaning. Here generative AI is both a production lever and a cultural mirror: it synthesizes stereotypes, preferences, exclusions. I do not turn it into an innovation argument. I use it as a governed mirror — a mirror that doesn’t decide, but reveals what is already there.", bullets: [ { k: "Tools cited", v: "Generative AI (Stable Diffusion / LoRA)" }, { k: "Role",        v: "lever + mirror, not author" }, { k: "Stance",      v: "proof > promise" } ] },
        { n: "06", t: "Exhibition / acquisition", body: "The project is designed to be walked through as a visit: themed sections, cards, progression. Each work can stand alone, but the whole gains force as a series: repetition, variation, an effect of proof. For shows I provide a kit (statement, visuals, selection, tech needs) and a press version. For acquisition, an available-works list and formats.", bullets: [ { k: "Path",        v: "6 sections, cards, progression" }, { k: "Show",        v: "PDF kit + custom selection" }, { k: "Acquisition", v: "available works + formats" } ] },
      ],
    },

    monstration: {
      eyebrow: "Room 2 / Monstration",
      title: "MONSTRATION",
      titleSub: "Femmes fatales · 2025–2026 cycle",
      subtitle: "Femmes fatales: the right to be fascinating without being justified.",
      meta1: "Cycle 2025–2026",
      total: "works",
      opening: "Cinema has long granted men the privilege of being dangerous, opaque, morally ambiguous — and being loved for it. Women are asked for reasons: a trauma, a cause, a morality.\n\nMONSTRATION tests the reverse: what happens when a body the norm marks as ‘harmless’ steps into the femme-fatale archetype without justification? Here AI isn’t a subject: it’s a staging lever. I inhabit codes (film noir, cabaret, hard light, living surfaces) to make a cultural censorship visible: who has the right to be a threat — and to remain opaque.",
      cartel: "Here opacity is not a flaw: it is a right.",
      filters: { all: "Entire room" },
      reading: "This image tests the right to opacity: can a woman be fatale without being explained?",
      sections: [
        { id: "cadre",       n: "Sub 1", title: "Frame",       subtitle: "Noir codes, hard light, an owned set",      opening: "First entry: a work on codes — film noir, cabaret, backlight. Stagings that long belonged to a certain grammar of the gaze. Here the image doesn’t imitate the poster: it re-occupies it.", cartel: "The frame is not a costume: it is a claim." },
        { id: "menace",      n: "Sub 2", title: "Threat",      subtitle: "To be dangerous without being punished",     opening: "Threat is a narrative privilege. This sub-section stages dangerousness without resolving it: no morality, no neutralization. The question is no longer ‘why’ but ‘who is allowed to’.", cartel: "Here threat is not justified: it is asserted." },
        { id: "fascination", n: "Sub 3", title: "Fascination", subtitle: "Living surfaces, claimed opacity (Cronenberg)", opening: "Last entry: living matrices, skin that overflows, the organic under the glamour. Fascination does not ask for explanation. It shifts the center of desire toward what unsettles — and stays there.", cartel: "Fascination is a zone: you don’t leave it explained." },
      ],
    },

    presse: {
      eyebrow: "Room 4 / Library",
      title: "Library · books · works",
      lede: "Rather than a PDF kit, the project lives as books and prints. Order the exhibition book, browse the available works — or check past and upcoming shows.",
      blocs: [
        { k: "The book",     t: "Exhibition book",  b: "#JE SUIS TOUS, by Lydie Catalano. Limited run, finely printed. Sold directly by Partage.",                                       cta: "Order the book",      href: "https://www.partage.fr/products/livre-de-lexposition-jesuistous-par-lydie-catalano" },
        { k: "The collection",t: "Available works",  b: "Pigment prints, limited editions (3 + 1 AP), signed certificate of authenticity. Full collection online, regularly updated.", cta: "Browse the collection", href: "https://www.partage.fr/collections/lydie-catalano" },
        { k: "Direct contact",t: "Curators · media", b: "For a show, an interview or a custom visual kit, write to me: answer within 72 hours.",                                  cta: "Email Lydie",     href: "mailto:catalanolydie@gmail.com" },
      ],
      eventsTitle: "Shows",
      events: [],
    },

    footer: {
      sig: { a: "A show about ", em: "who is allowed to embody a role", b: ". Proof before promise." },
      colA: ["Contact", "catalanolydie@gmail.com", "Lyon · FR", ""],
      colB: ["Follow", "Instagram"],
      baseline: ["© Lydie · 2026", "#JE SUIS TOUS · v1.0"],
    },
  },
};

// Works data
const SECTION_LABEL = {
  cadres:    { fr: "Moi dans leurs cadres",          en: "Me in their frames" },
  desir:     { fr: "Mon regard sur leur désir",      en: "My gaze on their desire" },
  ombres:    { fr: "Mes zones d’ombre",              en: "My shadow zones" },
  pouvoir:   { fr: "Mon pouvoir dans leurs empires", en: "My power inside their empires" },
  super:     { fr: "Mes super-pouvoirs",             en: "My super-powers" },
  transcend: { fr: "Mes transcendances",             en: "My transcendences" },
  // MONSTRATION sub-sections
  cadre:       { fr: "Cadre",       en: "Frame" },
  menace:      { fr: "Menace",      en: "Threat" },
  fascination: { fr: "Fascination", en: "Fascination" },
};

const WORKS = [
  { id: "cad-01", section: "cadres",   year: 2025, ref: "réf. Goodfellas (1990)",        img: "images/jst/famille-lucchese.jpg", title: { fr: "La famille Lucchese",  en: "The Lucchese family" },     ratio: "square" },
  { id: "cad-02", section: "cadres",   year: 2025, ref: "réf. Forrest Gump (1994)",      img: "images/jst/forrest-gump.jpg", title: { fr: "La boîte de chocolats", en: "The box of chocolates" }, ratio: "tall" },
  { id: "cad-03", section: "cadres",   year: 2024, ref: "réf. Les Sept Samouraïs (1954)", img: "images/jst/samourai.jpg", title: { fr: "Sous la pluie",     en: "Under the rain" },            ratio: "tall" },
  { id: "des-01", section: "desir",    year: 2025, ref: "réf. Casino Royale (2006)",    img: "images/jst/all-in.jpg", title: { fr: "All-In",            en: "All-In" },                    ratio: "tall" },
  { id: "des-02", section: "desir",    year: 2025, ref: "réf. Gatsby le Magnifique (2013)", img: "images/jst/gatsby.jpg", title: { fr: "Glitter Gatsby",    en: "Glitter Gatsby" },            ratio: "square" },
  { id: "des-03", section: "desir",    year: 2024, ref: "réf. Baywatch (1989)",          img: "images/jst/baywatch.jpg", title: { fr: "La bouée",         en: "The buoy" },                  ratio: "tall" },
  { id: "omb-01", section: "ombres",   year: 2025, ref: "réf. Inception (2010)",          img: "images/jst/inception.jpg", title: { fr: "Le totem",          en: "The totem" },                 ratio: "square" },
  { id: "omb-02", section: "ombres",   year: 2024, ref: "réf. Taxi Driver (1976)",        img: "images/jst/taxi-driver.jpg", title: { fr: "Ligne de nuit",     en: "Night shift" },               ratio: "square" },
  { id: "omb-03", section: "ombres",   year: 2024, ref: "réf. Fight Club (1999)",        img: "images/jst/fight-club.jpg", title: { fr: "Fight Club",        en: "Fight Club" },                ratio: "square" },
  { id: "pou-01", section: "pouvoir",  year: 2025, ref: "réf. Le Parrain (1972)",        img: "images/jst/dona-corleone.jpg", title: { fr: "Dona Corleone",     en: "Dona Corleone" },             ratio: "square" },
  { id: "pou-02", section: "pouvoir",  year: 2025, ref: "réf. Lord of War (2005)",       img: "images/jst/lady-of-war.jpg", title: { fr: "Lady of War",       en: "Lady of War" },               ratio: "tall" },
  { id: "pou-03", section: "pouvoir",  year: 2024, ref: "réf. Scarface (1983)",          img: "images/jst/scarface.jpg", title: { fr: "ScarLace",          en: "ScarLace" },                  ratio: "square" },
  { id: "sup-01", section: "super",    year: 2025, ref: "réf. Star Wars (1977)",          img: "images/jst/stormtrooper.jpg", title: { fr: "Sous l’armure",     en: "Under the armor" },           ratio: "tall" },
  { id: "sup-02", section: "super",    year: 2025, ref: "réf. Superman (1978)",          img: "images/jst/superman.jpg", title: { fr: "Krypton, banal",    en: "Krypton is common" },         ratio: "tall" },
  { id: "sup-03", section: "super",    year: 2024, ref: "réf. Michael Jackson — scène", img: "images/jst/jackson.jpg", title: { fr: "La garde dorée",     en: "The golden guard" },          ratio: "tall" },
  { id: "tra-01", section: "transcend",year: 2025, ref: "réf. The Matrix (1999)",         img: "images/jst/matrix.jpg", title: { fr: "L’éveil n°2",        en: "Awakening n°2" },             ratio: "wide" },
  { id: "tra-02", section: "transcend",year: 2025, ref: "réf. Jesus Christ Superstar",  img: "images/jst/superstar.jpg", title: { fr: "Superstar, NOT Savior", en: "Superstar, NOT Savior" }, ratio: "square" },
  { id: "tra-03", section: "transcend",year: 2024, ref: "réf. Frankenstein (1931)",      img: "images/jst/frankenstein.jpg", title: { fr: "Out of the Lab",    en: "Out of the Lab" },            ratio: "square" },
];

// Cartels enrichis — réplique détournée + lecture courte (inspiré du livre d'expo)
const CARTELS = {
  // ── #JE SUIS TOUS ──
  "cad-01": { quote: "As far back as I can remember, I always wanted to be seen.", read: { fr: "Le clan se referme autour d’un visage qu’il n’aurait jamais laissé entrer.", en: "The clan closes around a face it would never have let in." } },
  "cad-02": { quote: "Life is a box of chocolates — I take the one they never offer.", read: { fr: "Le banc, l’attente, la candeur : un rôle d’homme-enfant jamais accordé aux femmes « trop ».", en: "The bench, the wait, the candor: a man-child role never granted to ‘too much’ women." } },
  "cad-03": { quote: "We can’t win this battle without women.", read: { fr: "Sous la pluie de Kurosawa, l’héroïsme collectif refusait le corps féminin. Je le réarme.", en: "In Kurosawa’s rain, collective heroism refused the female body. I rearm it." } },
  "des-01": { quote: "I’m the money — and I deal myself in.", read: { fr: "Smoking, mise, sang-froid : la table de jeu comme théâtre d’une autorité qu’on me refusait.", en: "Tuxedo, bet, cool nerve: the card table as theater of an authority denied to me." } },
  "des-02": { quote: "So we beat on — glass raised, against the canon.", read: { fr: "Le faste comme revendication : occuper le luxe au lieu de le décorer.", en: "Splendor as a claim: to occupy luxury instead of decorating it." } },
  "des-03": { quote: "Don’t run on the beach — run the beach.", read: { fr: "Le maillot rouge, hyper-objet du male gaze, retourné en posture de sauvetage.", en: "The red swimsuit, hyper-object of the male gaze, flipped into a posture of rescue." } },
  "omb-01": { quote: "You’re waiting for a dream that doesn’t tilt.", read: { fr: "Le totem, l’arme, le doute : habiter la confusion mentale sans qu’on me l’excuse.", en: "The totem, the gun, the doubt: inhabiting mental confusion without being excused for it." } },
  "omb-02": { quote: "You talkin’ to me? Now I’m the one driving.", read: { fr: "La nuit, le volant, la rage : un solipsisme violent longtemps réservé aux hommes.", en: "Night, the wheel, the rage: a violent solipsism long reserved for men." } },
  "omb-03": { quote: "The first rule: I exist.", read: { fr: "Le savon, le double, le chaos : la dissociation virile retournée en affirmation.", en: "The soap, the double, the chaos: virile dissociation flipped into assertion." } },
  "pou-01": { quote: "Men can be careless. But not women.", read: { fr: "Endosser le costume du Parrain, c’est interroger la grammaire du pouvoir qui m’en excluait.", en: "Wearing the Godfather’s suit interrogates the grammar of power that excluded me." } },
  "pou-02": { quote: "You can’t run from the arms you bear.", read: { fr: "La mallette, les billets, le calme : la marchande de mort, sans rédemption requise.", en: "The briefcase, the bills, the calm: the merchant of death, female, no redemption required." } },
  "pou-03": { quote: "Say hello to my little reframe.", read: { fr: "L’empire de Scarface restylé : l’ascension brutale comme droit, pas comme exception.", en: "Scarface’s empire restyled: brutal ascent as a right, not an exception." } },
  "sup-01": { quote: "These aren’t the bodies you’re looking for.", read: { fr: "Sous l’armure anonyme de l’Empire, le corps que la saga n’imagine jamais en première ligne.", en: "Under the Empire’s anonymous armor, the body the saga never imagines on the front line." } },
  "sup-02": { quote: "You’ll believe a woman can stay.", read: { fr: "Krypton banalisé : le super-pouvoir le plus rare reste l’accès au rôle de sauveur.", en: "Krypton made common: the rarest super-power is still access to the savior’s role." } },
  "sup-03": { quote: "It doesn’t matter if you’re in or out — of the frame.", read: { fr: "L’uniforme de scène, la garde dorée : la pop fabrique des permissions, j’en réclame une.", en: "The stage uniform, the golden guard: pop manufactures permissions; I claim one." } },
  "tra-01": { quote: "There is no canon. Then you’ll see.", read: { fr: "Arrêter les balles d’une main : l’élue n’a pas le gabarit prévu, et c’est le sujet.", en: "Stopping bullets with one hand: the chosen one isn’t the expected build — that’s the point." } },
  "tra-02": { quote: "Don’t crown me. Cast me.", read: { fr: "Couronne d’épines, ciel bleu : l’iconographie du martyr refusée comme assignation.", en: "Crown of thorns, blue sky: the martyr’s iconography refused as assignment." } },
  "tra-03": { quote: "It’s alive — and it won’t apologize.", read: { fr: "La créature sort du labo : l’anomalie assumée comme aboutissement, pas comme faute.", en: "The creature leaves the lab: the anomaly owned as outcome, not as fault." } },
  // ── JE SUIS MONSTRE ──
  "mon-cad-01": { quote: "Sing it like you own the dark.", read: { fr: "La chanteuse de cabaret : le glamour du noir réoccupé, pas imité.", en: "The cabaret singer: noir glamour re-occupied, not imitated." } },
  "mon-cad-02": { quote: "I light my own.", read: { fr: "Cigarette, satin, contre-jour : les codes de la femme fatale repris à la source.", en: "Cigarette, satin, backlight: femme-fatale codes taken at the source." } },
  "mon-cad-03": { quote: "I’ll take the call. I won’t take the fall.", read: { fr: "Le combiné, le divan, l’attente : la fatale qui agit au lieu d’attendre le détective.", en: "The handset, the couch, the wait: the fatale who acts instead of awaiting the detective." } },
  "mon-men-01": { quote: "You didn’t see her — until she fired.", read: { fr: "Le revolver derrière les stores : être dangereuse sans devoir s’en expliquer.", en: "The revolver behind the blinds: dangerous without owing an explanation." } },
  "mon-men-02": { quote: "I decide who heals.", read: { fr: "Le stylo, la blouse, le contrôle : l’autorité froide comme privilège revendiqué.", en: "The pen, the coat, the control: cold authority as a claimed privilege." } },
  "mon-men-03": { quote: "Who is the real me? The one who scares you.", read: { fr: "Le sang sur le gant blanc, le sourire : la confusion qui menace au lieu de fragiliser.", en: "Blood on the white glove, the smile: confusion that threatens instead of weakening." } },
  "mon-men-04": { quote: "I’m not the joke. I’m the silence.", read: { fr: "L’opacité au milieu des rires : ne rien performer, et que ce soit ça, la menace.", en: "Opacity amid the laughter: performing nothing, and that being the threat." } },
  "mon-fas-01": { quote: "One of us — measured, never owned.", read: { fr: "Le corps annoté, mesuré, scruté : la fascination qui ne demande pas pardon d’exister.", en: "The body annotated, measured, scrutinized: fascination that doesn’t apologize for existing." } },
  "mon-fas-02": { quote: "I’m rotten to the heart — and in frame.", read: { fr: "La pose alanguie, le satin : l’objet du désir qui regarde en retour.", en: "The languid pose, the satin: the object of desire that looks back." } },
  "mon-fas-03": { quote: "Now I hold the lens.", read: { fr: "Le fauteuil, l’appareil photo : renverser le voyeur — c’est elle qui cadre.", en: "The chair, the camera: reversing the voyeur — she frames now." } },
};

window.CARTELS = CARTELS;
window.I18N = I18N;
window.WORKS = WORKS;
window.MONSTRATION_WORKS = [
  { id: "mon-cad-01", serie: "monstration", section: "cadre",       year: 2025, ref: "réf. Dark City (1950)",            img: "images/mon/dark-city.jpg",     title: { fr: "La chanteuse",     en: "The singer" },        ratio: "tall" },
  { id: "mon-cad-02", serie: "monstration", section: "cadre",       year: 2024, ref: "réf. Phantom Lady (1944)",        img: "images/mon/phantom-lady.jpg",  title: { fr: "Phantom Lady",     en: "Phantom Lady" },      ratio: "tall" },
  { id: "mon-cad-03", serie: "monstration", section: "cadre",       year: 2025, ref: "réf. Farewell, My Lovely (1975)",img: "images/mon/farewell.jpg",      title: { fr: "Le téléphone",     en: "The phone call" },    ratio: "square" },
  { id: "mon-men-01", serie: "monstration", section: "menace",      year: 2024, ref: "réf. Out of the Past (1947)",     img: "images/mon/out-of-the-past.jpg", title: { fr: "Kathie Moffat",  en: "Kathie Moffat" },     ratio: "square" },
  { id: "mon-men-02", serie: "monstration", section: "menace",      year: 2025, ref: "réf. Ratched (2020)",            img: "images/mon/ratched.jpg",       title: { fr: "Mildred",          en: "Mildred" },           ratio: "wide" },
  { id: "mon-men-03", serie: "monstration", section: "menace",      year: 2025, ref: "réf. Perfect Blue (1997)",       img: "images/mon/perfect-blue.jpg",  title: { fr: "Mima",             en: "Mima" },              ratio: "tall" },
  { id: "mon-men-04", serie: "monstration", section: "menace",      year: 2025, ref: "réf. Mercredi (2022)",           img: "images/mon/mercredi.jpg",      title: { fr: "Mercredi",         en: "Wednesday" },         ratio: "wide" },
  { id: "mon-fas-01", serie: "monstration", section: "fascination", year: 2024, ref: "réf. Freaks (1932)",             img: "images/mon/freaks.jpg",        title: { fr: "Mensurations",     en: "Measurements" },      ratio: "tall" },
  { id: "mon-fas-02", serie: "monstration", section: "fascination", year: 2024, ref: "réf. Assurance sur la mort (1944)", img: "images/mon/phyllis.jpg",    title: { fr: "Phyllis",          en: "Phyllis" },           ratio: "tall" },
  { id: "mon-fas-03", serie: "monstration", section: "fascination", year: 2025, ref: "réf. Fenêtre sur cour (1954)",   img: "images/mon/rear-window.jpg",   title: { fr: "Fenêtre sur cour", en: "Rear Window" },       ratio: "tall" },
];
window.SECTION_LABEL = SECTION_LABEL;
