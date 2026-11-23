// Exporte un carrousel en PNG (1080×1350, une image par slide) et en PDF.
// Usage, depuis la racine du dépôt :
//   node carrousel/export.cjs                                  → version LinkedIn (FR), dans export/
//   node carrousel/export.cjs instagram-en.html instagram-en en → version Instagram (EN), dans export/instagram-en/
// Prérequis : Playwright + Chromium installés, accès réseau à Google Fonts.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const dir = __dirname;
  const source = process.argv[2] || 'carrousel.html';
  const name = process.argv[3] || '';
  const lang = process.argv[4] || 'fr';
  const out = name ? path.join(dir, 'export', name) : path.join(dir, 'export');
  const pdfName = name ? 'carousel-' + name + '.pdf' : 'carrousel-trois-images.pdf';
  fs.mkdirSync(out, { recursive: true });

  // Les sources sont des fragments (format Artifact) : on les enveloppe dans un document complet.
  const src = fs.readFileSync(path.join(dir, source), 'utf8');
  const tmp = path.join(dir, '.export-' + (name || 'main') + '.html');
  fs.writeFileSync(tmp, '<!doctype html><html lang="' + lang + '"><head><meta charset="utf-8">' +
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
    const fonts = await page.evaluate(() => ['Playfair Display', 'Inter'].map((f) => f + ':' + document.fonts.check('900 40px "' + f + '"')));
    console.log('Polices :', fonts.join(' '));
    await page.waitForTimeout(300);

    const slides = await page.$$('.slide');
    for (let i = 0; i < slides.length; i++) {
      const file = path.join(out, 'slide-' + String(i + 1).padStart(2, '0') + '.png');
      await slides[i].screenshot({ path: file });
      console.log('✓', path.relative(process.cwd(), file));
    }
    const pdf = path.join(out, pdfName);
    await page.pdf({ path: pdf, width: '1080px', height: '1350px', printBackground: true, preferCSSPageSize: true });
    console.log('✓', path.relative(process.cwd(), pdf));
  } finally {
    await browser.close();
    fs.rmSync(tmp, { force: true });
  }
})();
