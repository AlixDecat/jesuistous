# Carrousel « Trois images, une démarche »

Deux versions, même DA, au format 1080×1350 (4:5) :

- `carrousel.html` : version LinkedIn, en français, 10 slides.
- `instagram-en.html` : version Instagram, en anglais, 7 slides : hook « I don't like AI » avec les images Gemini et ChatGPT, puis « So I built my own » avec Stable Bibi, et le prompt en slide 4.
- `instagram-fr.html` : la même version Instagram, en français (le prompt reste en anglais).

- `images/` : 1 Gemini, 2 ChatGPT, 3 Stable Bibi (modèle de l'autrice), et `queens-pact-rideau.png`, l'image à cheval sur les slides 9 et 10.
- `export/` : la version LinkedIn, avec `carrousel-trois-images.pdf` à publier comme « document » et les PNG.
- `export/instagram-en/` et `export/instagram-fr/` : les versions Instagram, avec `slide-01.png` … `slide-07.png` à publier.

Régénérer les exports après une modification :

```bash
node carrousel/export.cjs
node carrousel/export.cjs instagram-en.html instagram-en en
node carrousel/export.cjs instagram-fr.html instagram-fr fr
```

Pour changer une image, remplacer le fichier dans `images/` (même nom) ou modifier le `src` dans `carrousel.html`.
Le recadrage sur le visage (couvertures et triptyque) se règle avec `data-focal="x y"` (position du visage dans l'image, de 0 à 1).
