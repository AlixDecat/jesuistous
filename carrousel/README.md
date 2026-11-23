# Carrousel « Trois images, une démarche »

Deux versions, même DA, au format 1080×1350 (4:5) :

- `carrousel.html` : version LinkedIn, en français, 10 slides.
- `instagram-en.html` : version Instagram, en anglais, 8 slides, avec le hook « I don't like AI ».

- `images/` : 1 Gemini, 2 ChatGPT, 3 Stable Bibi (modèle de l'autrice), et `queens-pact-rideau.png`, l'image à cheval sur les slides 9 et 10.
- `export/` : la version LinkedIn, avec `carrousel-trois-images.pdf` à publier comme « document » et les PNG.
- `export/instagram-en/` : la version Instagram, avec `slide-01.png` … `slide-08.png` à publier.

Régénérer les exports après une modification :

```bash
node carrousel/export.cjs
node carrousel/export.cjs instagram-en.html instagram-en en
```

Pour changer une image, remplacer le fichier dans `images/` (même nom) ou modifier le `src` dans `carrousel.html`.
Le recadrage sur le visage (couvertures et triptyque) se règle avec `data-focal="x y"` (position du visage dans l'image, de 0 à 1).
