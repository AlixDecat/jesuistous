# Carrousel « Trois images, une démarche »

10 slides 1080×1350 (4:5) pour LinkedIn / Instagram.

- `carrousel.html` : la source (textes, mise en page, aperçu des 10 slides + légende du post).
- `images/` : 1 Gemini, 2 ChatGPT, 3 Stable Bibi (modèle de l'autrice), et `queens-pact-rideau.png`, l'image à cheval sur les slides 9 et 10.
- `export/` : `slide-01.png` … `slide-10.png` (Instagram) et `carrousel-trois-images.pdf` (LinkedIn, à publier comme « document »).

Régénérer les exports après une modification :

```bash
node carrousel/export.cjs
```

Pour changer une image, remplacer le fichier dans `images/` (même nom) ou modifier le `src` dans `carrousel.html`.
Le recadrage sur le visage (slides 1 et 3) se règle avec `data-focal="x y"` (position du visage dans l'image, de 0 à 1).
