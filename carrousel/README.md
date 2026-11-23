# Carrousel « Trois images, une démarche »

Deux versions, même DA, au format 1080×1350 (4:5) :

- `carrousel.html` : version LinkedIn, en français, 10 slides.
- `instagram-en.html` : version Instagram, en anglais, 8 slides : « I don't like AI » seul en slide 1, pourquoi en slide 2 avec les images Gemini et ChatGPT, Stable Bibi en slide 3, le prompt en slide 5.
- `instagram-fr.html` : la même version Instagram, en français (le prompt reste en anglais).

- `images/` : 1 Gemini, 2 ChatGPT, 3 Stable Bibi (modèle de l'autrice), `queens-pact-rideau.png` (le rideau, et les crocs en slide 1 des versions Instagram), et `univers-*.png` (les trois images de la citation Instagram).
- `export/` : la version LinkedIn, avec `carrousel-trois-images.pdf` à publier comme « document » et les PNG.
- `export/instagram-en/` et `export/instagram-fr/` : les versions Instagram, avec `slide-01.png` … `slide-08.png` à publier.

Régénérer les exports après une modification :

```bash
node carrousel/export.cjs
node carrousel/export.cjs instagram-en.html instagram-en en
node carrousel/export.cjs instagram-fr.html instagram-fr fr
```

Pour changer une image, remplacer le fichier dans `images/` (même nom) ou modifier le `src` dans `carrousel.html`.
Le recadrage sur le visage (couvertures et triptyque) se règle avec `data-focal="x y"` (position du visage dans l'image, de 0 à 1).
