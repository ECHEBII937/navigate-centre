<p align="center">
  <img src="images/logo.png" alt="Navigate Centre" width="360">
</p>

<h1 align="center">Navigate Centre — Website</h1>
<p align="center"><em>Your Digital Service Partner</em></p>

<p align="center">
  <img alt="status" src="https://img.shields.io/badge/status-live-C7E31A?style=flat-square">
  <img alt="stack" src="https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-2346B8?style=flat-square">
  <img alt="hosting" src="https://img.shields.io/badge/hosted%20on-GitHub%20Pages-1E1A1B?style=flat-square">
</p>

---

## About

Navigate Centre is a cyber café, ICT training centre, and digital services business based in **Eldoret, Kenya**. This repository is the source for its official website — a fast, single-page site built to introduce the business, showcase its services, and make it easy for visitors to get in touch or find their way to the shop.

No frameworks, no build step, no backend. Just clean HTML, CSS and JavaScript that any browser can load in an instant and that stays easy to hand-edit as the business grows.

## Features

- 📱 Fully responsive, mobile-first layout
- 🧭 Brand identity carried through with a diagonal-cut visual motif echoing the logo's compass mark
- 🗂️ All 19 services laid out with custom icons — ICT training, printing, design, KRA/HELB/NTSA/eCitizen support, CV writing, branding and more
- 💬 Floating WhatsApp button for instant contact
- ❓ FAQ accordion, embedded Google Map, and a working contact form (via Formspree)
- ⚡ Lightweight — no external icon libraries or heavy JS, built for a strong Lighthouse score

## Live Site

Once deployed, the site will be live at:
`https://<your-github-username>.github.io/navigate-centre/`

*(Update this link once GitHub Pages is switched on — see [Deploying](#deploying-to-github-pages) below.)*

## Project Structure

```
navigate-centre/
├── index.html          # all page content and sections
├── style.css             # brand colours, layout, responsive rules
├── script.js              # nav toggle, FAQ accordion, back-to-top, contact form
├── images/
│   └── logo.png            # brand logo
├── favicon/                # favicon set (16, 32, 180, 192px + .ico)
├── assets/                 # reserved for future files
├── README.md
└── .gitignore
```

## Before Going Live

A few placeholders still need real values — each is marked with a `TODO` comment in `index.html`:

| What | Where | Replace with |
|---|---|---|
| Contact form | `<form action="...">` | Your real [Formspree](https://formspree.io) form ID |
| Jobs link | "View Available Jobs" button | Your jobs board / listings page |
| Social links | Footer icons | Real Facebook, Instagram, TikTok & LinkedIn URLs |

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under *Branch*, choose `main` (or your default branch) and the root folder.
4. Save — GitHub will publish the site at the URL shown above within a minute or two.
5. Have a custom domain? Add it under **Settings → Pages → Custom domain**, and point your domain's DNS to GitHub Pages.

## Editing

Everything lives in plain HTML/CSS/JS, so there's nothing to install and nothing to compile. Open `index.html` in any editor — each section is clearly commented (`<!-- ============ SERVICES ============ -->`) — and edit the content directly. All brand colours and fonts are defined once, at the top of `style.css` under `:root`, so a single change there updates the whole site.

## Brand

| | |
|---|---|
| ⬛ Black | `#1E1A1B` |
| 🟢 Lime Green | `#C7E31A` |
| 🔵 Royal Blue | `#2346B8` |
| Headings | Poppins |
| Body | Inter |

---

<p align="center">
Built and maintained by <strong>Emmanuel Kibiwott Chebii</strong><br>
for <strong>Navigate Centre</strong> · Eldoret, Kenya<br><br>
© 2026 Navigate Centre. All Rights Reserved.
</p>
