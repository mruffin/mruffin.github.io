# Academic site template

A static, multi-page academic website — same typography as the single-page
garden site (Instrument Serif + Source Sans 3 + JetBrains Mono), but with its
own warm terracotta/sage palette rather than the garden site's blue/teal.
Expanded to match the page structure of the Bryngelson
academic-website-template (Home, About, Research, Publications, Teaching,
Service, News, CV).

No Jekyll, no Ruby, no build step — just plain HTML/CSS/JS. Push it to a repo
named `<username>.github.io` (or any repo with Pages enabled) and it's live.

## Structure

```
index.html          Home — hero, research highlights, selected works, news preview
about.html            About — awards/honors + mentees (grad school + faculty)
research.html         Research areas
publications.html     Publications — tabbed Papers / Talks
teaching.html          Courses + teaching philosophy
service.html           Service, outreach, reviewing, mentorship
news.html              Full news archive
cv.html                Position timeline + link to CV PDF
assets/css/style.css    Shared stylesheet (all page styling lives here)
assets/js/site.js       Shared JS (nav highlighting, mobile menu, fade-ins, Papers/Talks tabs)
assets/img/             Put your headshot and other images here
assets/files/cv.pdf     Put your CV PDF here (linked from cv.html)
```

## To customize

1. **Find/replace** "Margie Ruffin" and the placeholder bio text throughout
   the HTML files with your own name and details.
2. **Swap the photo**: in `index.html`, replace the `<div class="photo-placeholder">M</div>`
   with `<img src="assets/img/headshot.jpg" alt="Your Name">` (a commented-out
   version of this line is already in the file).
3. **Update links**: every `href="#"` for GitHub/Scholar/LinkedIn/email needs
   your real URL — search for `href="#"` across the files.
4. **Publications**: each entry in `publications.html` is a `.pub-group` div —
   copy/paste one and edit the badge, title, authors, summary, and links.
5. **Courses / research cards**: same pattern — each `.card` in `research.html`
   and `teaching.html` is self-contained; copy and edit.
6. **CV PDF**: drop your CV at `assets/files/cv.pdf` (create the folder) —
   the download button in `cv.html` already points there.
7. **Nav / page set**: if you don't need a page (e.g. Service), delete the
   `<li>`/`<a>` for it from the `nav-links` and `mobile-menu` blocks in
   *every* HTML file, and delete the file itself.

## To deploy on GitHub Pages

1. Create a repo named `<your-username>.github.io` (or any repo, then enable
   Pages on a branch/folder in repo Settings).
2. Push these files to the repo root.
3. In **Settings → Pages**, set the source to the branch you pushed to
   (e.g. `main`, root folder). No GitHub Actions workflow needed.
4. Your site is live at `https://<your-username>.github.io/` within a few
   minutes.

## Notes

- **Palette**: colors live as CSS custom properties at the top of
  `assets/css/style.css` (`--ink`, `--accent`, `--teal`, `--cream`, etc.).
  Change them there and the whole site updates. Currently a warm
  terracotta (`--accent`) + sage (`--teal`) palette on an ivory background —
  deliberately different from the blue/teal garden-site palette.
- **About page** has bracketed placeholders (`[Award name]`, `[Student Name]`,
  etc.) for awards and mentees — copy an `.award-item` or `.mentee-item` block
  to add more, or a whole `.mentee-group` for a new mentee category.
- **Selected Works** on the homepage is 3 `.work-card` blocks — copy one to
  change the projects, or add a 4th (the grid wraps automatically).
- **Publications tabs**: Papers and Talks are two `.tab-panel` divs toggled by
  `.tab-btn` buttons; the switching logic is in `assets/js/site.js`. Add more
  papers/talks by copying a `.pub-group` or `.talk-item` block into the
  matching panel.
- The "garden" visualization from the original single-page site was left out
  of this template — it's a nice touch but ties publications tightly to a
  two-branch tree layout, which doesn't scale as cleanly to a dedicated,
  searchable Publications page. If you want it back as a fun extra on the
  Home page, just say the word.
- Fonts are loaded from Google Fonts via `<link>` tags in each page's `<head>`.
- All styling is in one file (`assets/css/style.css`) — no CSS build step.
