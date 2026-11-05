# Design — A Style Library

A buildless, static design reference library hosted on GitHub Pages. Three columns on desktop, two on tablets, one on phones. No dependencies or accounts required to view it.

## Edit the collection

`styles.js` holds one object per card. The six initial styles are starter examples, with original CSS previews. They do not claim to reproduce any sourced site or image. Replace or extend them as you gather references.

Each style includes a stable `id`, name, category (Minimal, Expressive, or Digital), tags, description, three six-digit hex colors, typography notes, principles, references, artifacts, and a preview class. For a new category, add a filter button in `index.html`.

References: `[{ title: 'Source name', url: 'https://example.com', note: 'What to take from it' }]`.
Artifacts: `[{ title: 'Type specimen', url: 'assets/style-id/typography.html', note: 'Optional description' }]`.
Optional `cover`: a relative asset path or HTTPS image URL. Put images and style artifacts in `assets/<style-id>/`. Use relative URLs so they work under the GitHub Pages project path. Keep source credit alongside images and identify source observations versus interpretation.

Content changes go through the repository. There is no browser editor or database.

## Astra handoff

Open a card and use **Copy artifact brief**, or supply this request:

> Develop a reusable style kit for [style name] using [source links / image references]. Distinguish observed source details from interpretation. Create CSS and JSON tokens, a typography specimen, components with interaction states, a responsive layout example, and usage/attribution notes. Save artifacts in assets/[style-id]/ and update the matching object in styles.js with reference and artifact links, plus an optional cover image. Preserve the library layout. Do not mark files complete before they exist.

## Preview

Run `python3 -m http.server 8000` here and open http://localhost:8000.

## Hosting

GitHub Pages serves the root of `main`. `.nojekyll` keeps it buildless. Push changes to `main` to update the site. Do not put private references or secrets in this public repository.
