# Navigate Centre Website

A responsive one-page website for **Navigate Centre** — an ICT training, cyber café, printing and digital services centre in Eldoret, Kenya.

Built with plain HTML, CSS and JavaScript (no framework, no backend) so it can be hosted for free on GitHub Pages.

## Folder structure

```
navigate-centre/
├── index.html          # all page content and sections
├── style.css            # all styling (brand colours, layout, responsive rules)
├── script.js            # nav toggle, FAQ accordion, back-to-top, contact form logic
├── images/
│   └── logo.png          # brand logo (black / lime / royal blue version)
├── favicon/
│   ├── favicon.ico
│   └── favicon-16.png, favicon-32.png, favicon-180.png, favicon-192.png
└── assets/                # reserved for future files (brochures, extra brand assets)
```

## Before you go live — 3 things to update

These are all marked with `TODO` comments in `index.html`:

1. **Contact form** — replace `YOUR_FORM_ID` in the `<form action="https://formspree.io/f/YOUR_FORM_ID">` line with your real [Formspree](https://formspree.io) form ID (free tier works fine for a small business site).
2. **Jobs link** — the "View Available Jobs" button currently points to `#`. Replace with your real jobs board / listing page link once you have one.
3. **Social links** — Facebook, Instagram, TikTok and LinkedIn footer icons currently point to `#`. Replace with your real profile URLs. WhatsApp is already live, linked to 0700 477 205.

Optional: the "Our Space" gallery section uses placeholder icon tiles instead of real photos — swap in real photos of the centre when you have them (drop them in `images/` and update the `gallery-tile` markup).

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `navigate-centre`).
2. Push the contents of this folder to the repository (the `index.html` must be at the root, or in a `/docs` folder — either works).
3. In the repo, go to **Settings → Pages**, choose the branch (usually `main`) and folder (`/root` or `/docs`), and save.
4. GitHub will give you a live URL like `https://yourusername.github.io/navigate-centre/` within a minute or two.
5. If you have a custom domain (e.g. `navigatecentre.co.ke`), add it under **Settings → Pages → Custom domain** and update your domain's DNS records to point to GitHub Pages.

## Editing content

Everything is in plain HTML/CSS — no build step, no `npm install` needed. Open `index.html` in any text editor, find the section you want to change (each section is commented, e.g. `<!-- ============ SERVICES ============ -->`), and edit the text directly. Colours and fonts are all defined once at the top of `style.css` under `:root`, so changing a brand colour there updates it site-wide.

## A single-file version

A version with the CSS, JavaScript, logo and favicons all inlined into one `.html` file is also available, for cases where a single portable file is more convenient than a folder (e.g. quickly sharing a preview). Note that the single-file version's og:image (link-preview thumbnail) won't work until the logo is hosted at a real URL, since embedded image data can't be used for social-share previews.
