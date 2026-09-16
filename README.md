# Divisiri Website

A static HTML5 / CSS3 / vanilla JavaScript website for Divisiri, an
independent wellness and product-development brand. No build step, no
backend, no frameworks.

## Project structure

```
/index.html                    Home
/about.html                    About Us
/solutions.html                Solutions overview
/research-development.html     R&D
/products.html                 Product catalogue (placeholder data)
/concept-to-consumer.html      Concept-to-consumer journey
/private-label.html            Private label + enquiry form
/co-branding.html              Co-branding
/quality-safety.html           Quality & safety
/journal.html                  Journal article previews (draft)
/faq.html                      FAQ accordion
/careers.html                  Careers
/contact.html                  Contact form
/privacy.html, /terms.html, /shipping.html, /returns.html,
/disclaimer.html, /accessibility.html   Legal draft pages
/404.html                      Custom 404 page
/css/style.css                 All site styles
/js/main.js                    Shared behavior (nav, forms, filters, reveal)
/js/content.js                 Central content config (nav, footer, FAQ,
                                journal, product data)
/assets/brand/                 Official logo and favicon assets
/robots.txt, /sitemap.xml      SEO files (placeholder domain)
```

## Running locally

No build step is required. Serve the repository root with any static
file server, for example:

```bash
npx serve .
# or
python3 -m http.server
```

Then open the printed local URL in a browser.

## Deploying

This site can be deployed as-is to any static host by pointing it at the
repository root — no build command needed. For example:

- **GitHub Pages** — enable Pages on this repo, serving from the root of
  the default branch.
- **Netlify** — create a new site from this repo with an empty build
  command and publish directory set to `/`.
- **Vercel** — import this repo as a static project with no framework
  preset and no build command.

## Before launch — verification checklist

This is a content scaffold. The following must be verified, replaced, or
implemented before this site goes live:

- [ ] Replace `[CANONICAL_URL_PLACEHOLDER]` everywhere it appears (every
      page's `<link rel="canonical">` and Open Graph/Twitter URL tags,
      the JSON-LD blocks on `index.html`, `robots.txt`, and
      `sitemap.xml`) with the real production domain.
- [ ] Confirm the legal entity name, registered address, grievance
      contact, data controller, customer-support email, applicable laws,
      jurisdiction, and product-specific compliance notes referenced as
      bracketed placeholders across the legal pages and footer.
- [ ] Confirm official contact details on `contact.html` (email, phone,
      address, business hours).
- [ ] Replace all placeholder product data on `products.html` and in
      `js/content.js` with verified product names, categories,
      overviews, intended use, ingredients, nutrition information,
      directions, storage guidance, warnings/precautions, allergen
      information, and certifications. Do not publish invented
      ingredients, dosages, prices, or ratings.
- [ ] Confirm real pricing, if and when pricing is introduced — none is
      shown anywhere on this site currently.
- [ ] Finalize shipping and returns terms on `shipping.html` and
      `returns.html`.
- [ ] Confirm any certifications or regulatory approvals before
      referencing them anywhere on the site — none are currently
      claimed.
- [ ] Review all product, wellness, and nutrition claims against
      applicable regulatory requirements before publication.
- [ ] Add real testimonials or case studies only with explicit written
      approval from the parties involved — none are currently shown.
- [ ] Replace the placeholder social media links in the footer
      (`href="#"`) with verified official social profiles, or remove
      them if none exist yet.
- [ ] Wire up real form backends for the newsletter signup
      (`index.html`), the private-label enquiry form
      (`private-label.html`), and the contact form (`contact.html`).
      All three currently intercept submission client-side in
      `js/main.js` and show a placeholder success message — no data is
      sent anywhere.
- [ ] Have privacy, terms, shipping, returns, disclaimer, and
      accessibility copy reviewed by qualified legal counsel before
      publication — all are explicitly marked as draft templates.
- [ ] Confirm journal article authors, publish dates, and content, and
      move article status from "Draft — pending review" once approved.
- [ ] Review job listings on `careers.html` and replace the placeholder
      messaging once real openings exist.
