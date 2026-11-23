// Exporte le carrousel en PNG (1080×1350, une image par slide) et en PDF (format document LinkedIn).
// Usage, depuis la racine du dépôt :  node carrousel/export.cjs
// Prérequis : Playwright + Chromium installés, accès réseau à Google Fonts.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const dir = __dirname;
  const out = path.join(dir, 'export');
  fs.mkdirSync(out, { recursive: true });

  // carrousel.html est un fragment (format Artifact) : on l'enveloppe dans un document complet.
  const src = fs.readFileSync(path.join(dir, 'carrousel.html'), 'utf8');
  const tmp = path.join(dir, '.export-tmp.html');
  fs.writeFileSync(tmp, '<!doctype html><html lang="fr"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' + src + '</body></html>');

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
    await page.goto('file://' + tmp, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; }))));
    });
    const fonts = await page.evaluate(() => ['Fraunces', 'Inter', 'IBM Plex Mono'].map((f) => f + ':' + document.fonts.check('40px "' + f + '"')));
    console.log('Polices :', fonts.join(' '));
    await page.waitForTimeout(300);

    const slides = await page.$$('.slide');
    for (let i = 0; i < slides.length; i++) {
      const file = path.join(out, 'slide-' + String(i + 1).padStart(2, '0') + '.png');
      await slides[i].screenshot({ path: file });
      console.log('✓', path.relative(process.cwd(), file));
    }
    const pdf = path.join(out, 'carrousel-trois-images.pdf');
    await page.pdf({ path: pdf, width: '1080px', height: '1350px', printBackground: true, preferCSSPageSize: true });
    console.log('✓', path.relative(process.cwd(), pdf));
  } finally {
    await browser.close();
    fs.rmSync(tmp, { force: true });
  }
})();
