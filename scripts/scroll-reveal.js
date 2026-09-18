/**
 * scroll-reveal.js — reveal-on-scroll for [data-reveal] elements.
 *
 * Any element carrying `data-reveal` starts hidden (see app.css) and gets
 * the class `is-inview` when it enters the viewport, once. Works with
 * React-rendered content: a MutationObserver picks up nodes added after
 * load (route changes, filter changes), so each new gallery grid replays
 * its entrance. Stagger is driven per-element via the `--rv-delay` CSS
 * custom property.
 *
 * Respects prefers-reduced-motion: elements are shown immediately.
 */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) {
        en.target.classList.add("is-inview");
        io.unobserve(en.target);
      }
    }
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });

  const seen = new WeakSet();
  const attach = (el) => {
    if (seen.has(el)) return;
    seen.add(el);
    if (reduce.matches) el.classList.add("is-inview");
    else io.observe(el);
  };
  const scan = (root) => {
    if (root.hasAttribute && root.hasAttribute("data-reveal")) attach(root);
    if (root.querySelectorAll) root.querySelectorAll("[data-reveal]").forEach(attach);
  };

  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      m.addedNodes.forEach((n) => { if (n.nodeType === 1) scan(n); });
    }
  });

  const start = () => {
    scan(document.documentElement);
    mo.observe(document.body, { childList: true, subtree: true });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
