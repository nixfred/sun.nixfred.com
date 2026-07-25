# Layout audit

The Stage 5 visual gate. Numbers, not vibes: it finds ragged card grids
and horizontal overflow at three viewport widths without a human
squinting at screenshots.

## How to run

1. `bun astro build && bun astro preview --port 4321`
2. Open http://localhost:4321/ in a Playwright session.
3. Paste the function below into `browser_evaluate`.

It loads every listed route inside a hidden iframe at each width and
reports violations. Zero output means the layout is sound.

```js
async () => {
  const pages = ['/', '/about/leadership', '/mission/why-the-sun', '/research/library',
    '/crisis/solar-depletion', '/documents', '/impact/dashboard', '/adopt-a-sunspot',
    '/donate', '/news/blog', '/about/partners', '/get-involved', '/status', '/search'];
  const widths = [375, 820, 1440];
  // Borderless stat rows read fine with a short last row. Bordered CARD
  // grids do not: that is the defect Fred caught (4 cards then 2).
  const IGNORE = ['footer-columns', 'amounts', 'impact-grid', 'row', 'doc-stats',
    'headline-grid', 'fact-grid', 'scores', 'review', 'doc-meta', 'cert-fields'];
  const frame = document.createElement('iframe');
  frame.style.cssText = 'position:fixed;left:-9999px;border:0;height:900px';
  document.body.appendChild(frame);
  const problems = [];
  for (const w of widths) {
    frame.style.width = w + 'px';
    for (const path of pages) {
      await new Promise((r) => { frame.onload = () => setTimeout(r, 130); frame.src = path; });
      const win = frame.contentWindow, doc = win.document;
      doc.querySelectorAll('*').forEach((el) => {
        const cs = win.getComputedStyle(el);
        if (cs.display !== 'grid') return;
        const cls = String(el.className).split(' ')[0];
        if (IGNORE.includes(cls)) return;
        const tracks = cs.gridTemplateColumns.split(' ').map(parseFloat).filter((n) => n > 1);
        const items = [...el.children].filter((c) => c.offsetHeight > 0).length;
        if (items < 2 || !tracks.length) return;
        const rem = items % tracks.length;
        if (rem !== 0 && items > tracks.length) problems.push(`${w} ${path} RAGGED .${cls} ${tracks.length}col/${items}`);
      });
      if (doc.documentElement.scrollWidth > w + 2) problems.push(`${w} ${path} OVERFLOW ${doc.documentElement.scrollWidth}`);
    }
  }
  frame.remove();
  return problems.length ? problems : 'CLEAN';
}
```

## Standing rules this enforces

1. **Never `auto-fill` or `auto-fit` a card grid.** The browser picks a
   column count from available width, which is how the homepage ended up
   showing four program cards then two. Declare explicit counts per
   breakpoint so the last row is always full.
2. **A fixed column count needs a mobile floor.** Forcing two sponsor
   lockups at every width overflowed a 375px viewport by 24px. Start at
   one column and step up.
3. **Prime item counts (5, 7) cannot tile evenly** except at one column
   or their own count. Use borderless blocks there, or change the count.
4. **Track parsing gotcha:** `getComputedStyle().gridTemplateColumns`
   reports collapsed `auto-fit` tracks as `0px`. Filter to `> 1px` or
   every grid looks ragged.
