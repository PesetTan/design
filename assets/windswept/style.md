# Windswept

A living painterly landscape: fixed low hills and marsh, sculptural drifting clouds, small wildlife softened by distance, and a complete interface palette that follows the season. Friendly regular sans-serif type, dark earth-colored cards, pale text, and seasonal pill actions sit within the scene. Suitable for personal sites, nature journals, local stories, and calm introductions with a small amount of content.

## Sources and evidence

Updated November 5, 2026. The primary interface reference is [The Tan Family](https://www.thetanfamily.net/), implemented in `sites/family-domain/family/`, deployed at commit `95e5db863fd0f0cba6a950468b413ce5620d8628`. Desktop Safari views in this chat establish the hero and the bottom-of-page composition; the final spacing was checked at maximum scroll. CSS and animation source supply the exact rules below. Responsive code and automated animation checks establish behavior across screen shapes. The adapted specimen was also inspected at desktop width and 390px mobile width, with no horizontal overflow; its winter season switch was exercised. Every season/bird combination has not been visually inspected.

The [original supplied illustration](reference.png) remains visual inspiration. Its creator, original publication, and reuse rights were not supplied. It establishes painterly light, clouds, layered distance, and directional grasses; it contains no interface. Its old estimated palette and proposed Georgia/light-card interface are superseded here by the working site's verified values.

The seasonal Coyote Hills paintings and transparent cloud layers were generated for the family project. [Artwork prompts](artwork-prompts.md) record their production and shared registration requirements. Their contours are illustrative, not surveyed geographic data. The specimen includes local WebP delivery copies, scene code, and adapted sample copy. Its cover is an original SVG interpretation. Family names, biographies, the Shared Roots family logo, and their meanings are site-specific identity, not reusable Windswept assets.

Evidence vocabulary: **verified** means present in the source at the named commit; **observed** means visible in the supplied/inspected desktop states; **adaptation** means specimen-only additions. Measurements below are CSS pixels unless stated otherwise.

## Composition and layering — verified

1. Use one broad, full-bleed scenic hero, with a left-aligned text column and a simple wordmark over the sky. One short uppercase eyebrow, a two-line regular-weight headline, and one pill action are enough. The current source intentionally omits a supporting hero paragraph and extra navigation clutter.
2. Keep the same terrain, hill silhouettes, shoreline, foreground grasses, and image registration across all four paintings. Scene colors change; terrain never pans, zooms, or sways. No baked-in clouds or birds in the seasonal terrain layers.
3. Stack painting → soft-light seasonal color layer → transparent cloud canvas → bird canvas → atmospheric readability overlays → content and scenic label. The overlaid gradients darken the left text field and blend the ground into the next section. Both canvases are decorative and ignore pointer input.
4. Follow with four compact cards on the ground canvas, then a rounded ground-colored closing panel inside a sky-colored court. The footer uses sky too. `html` and `body` use the seasonal sky so Safari's browser tint follows it; ground surfaces stay inside this canvas.
5. The family implementation's compact spacing lets its heading, cards, closing panel, and footer remain visible at maximum scroll in the inspected desktop viewport. This is a composition target, not a guarantee for every viewport height, zoom level, or longer content. Reduce gaps before shrinking readable type; allow natural scrolling on narrow or short screens.

## Seasonal color system — CSS/runtime verified

| Role | Spring | Summer | Autumn | Winter |
| --- | --- | --- | --- | --- |
| Sky / browser canvas | `#0753aa` | `#0753aa` | `#24261f` | `#436378` |
| Ground canvas | `#103e3c` | `#343d2b` | `#24261f` | `#233e43` |
| Main ink | `#f1f5dc` | `#fcf4dc` | `#f3eddf` | `#eff4f1` |
| Secondary ink | `#bfcebc` | `#d3cdb4` | `#c9c4ae` | `#c0d1d3` |
| Accent | `#e1f5a5` | `#f6d78e` | `#efc28c` | `#c5dfe0` |
| Primary card | `#194b47` | `#434d33` | `#303329` | `#2d4b52` |
| Hover card | `#245a51` | `#51583b` | `#3c4034` | `#37545a` |
| Detail ink | `#d2dfce` | `#e6dfc9` | `#f3eddf` | `#d4e1df` |

Full card alternates, hover accents, and Display-P3 values are in [tokens.json](tokens.json). Autumn matches the résumé’s warm charcoal, olive surfaces, cream text, and amber accent. Its border is `#505442`; the other seasons use `#ffffff29`. The painted autumn sky retains its blue. Hero title is white, footer text `#f0f5f2`. Reserve accents for the emphasized headline word, action, icons, and small labels. Let scenery dominate the hero; let solid surfaces carry lower-page reading. Avoid fixed percentage color allocations because landscape crop and season change them.

Use sRGB fallbacks everywhere. Enable coordinated `color(display-p3 …)` values only when both CSS support and `color-gamut: p3` are present. This is wide-gamut enhancement of SDR artwork, not HDR or an increase in peak luminance. Seasonal artwork saturation is spring 1.055, summer 1.045, autumn 1.06, winter 1.035; contrast 1.015. The optional P3 soft-light overlay is .17 opacity. Cloud highlights retain their own light and alpha; render-time cloud desaturation softens cyan edges (autumn .65, others .85).

Keep white hero type over the dark left gradient; use detail ink on cards and ground ink on accent pills. Focus rings use the seasonal accent. Project color checks cover the seasonal source palette; reassess contrast when changing text roles, imagery, or opacity.

## Typography — CSS verified

All roles use `"Trebuchet MS", Arial, sans-serif`. No web-font download and no Georgia heading.

| Role | Size / leading | Weight / tracking |
| --- | --- | --- |
| Wordmark | 24px; mobile 20px | 700 / -.02em |
| Hero title | `clamp(58px, 6.8vw, 104px)` / 1.03 | 400 / -.015em |
| Tablet hero | 76px | Same regular treatment |
| Mobile hero | `clamp(52px, 12.5vw, 78px)` | Same regular treatment |
| Section heading | `clamp(34px, 3.5vw, 52px)` / 1.1; mobile 35px | 400 / -.015em |
| Card name | 35px; mobile 30px | 400 / -.01em |
| Eyebrow | 10px / 1.6; mobile 9px | 700 / .19em |
| Card role | 9px; mobile 8px | 700 / .12em; mobile .04em |
| Card body | 12px / 1.8; mobile 11px | 400 |
| Primary action | 13px | 700 |
| Closing message | 24px / 1.5; mobile 20px | 400 / -.01em |

These small metadata sizes reproduce the compact source; they are not required for content-heavy applications. Enlarge body text for sustained reading rather than stretching this four-card landing-page pattern into a dense document.

## Layout and geometry — CSS verified

| Element | Desktop | Responsive changes |
| --- | --- | --- |
| Hero | 94svh, min 780px, max 1100px; padding 130px 7% 110px | ≤1000px min 740px; ≤650px height 930px, min 850px, no max; padding 140px 7% 390px |
| Hero copy | 64% wide, 30px bottom padding | ≤1000px 65%; ≤650px 100%, no extra padding, top aligned |
| Family/content block | max 1500px; 48px 7% 0 padding | ≤650px 38px 6% 0 |
| Heading row | bottom aligned; 32px gap below; eyebrow margin 14px | Mobile top aligned; secondary right-hand copy hidden |
| Card grid | 4 equal columns, 17px gaps | ≤1000px 2 columns/20px; ≤650px 2 columns/12px |
| Card | min 315px tall; padding 25px 23px 0; radius 18px; top icon row 80px | Tablet min 310px; mobile min 300px, padding 18px 15px 0, radius 15px, top row 78px |
| Card action row | border top; min 50px; pushed to bottom | Mobile min 47px |
| Closing court | top gap 32px; padding 28px 7% 32px | Mobile gap 28px; padding 24px 6% 28px |
| Closing panel | max 1120px; padding 28px 24px 30px; radius 28px | Mobile 26px 20px; radius 24px |
| Footer | margin 0 7%; padding 22px 0 28px; min 80px | Mobile margin 0 6%; padding 22px 0 32px; min 100px; wraps, hides trailing tagline |

The image uses `object-fit: cover`, initially 50% 65% (tablet 65% 65%, mobile 60% bottom). Runtime computes the painting's actual cover transform and adjusts its vertical position to keep the marsh near 87% of the hero. Anchor wildlife to that same transform, not unrelated viewport coordinates. Wide layouts smoothly lift the swallow flight volume by up to 21% of hero height to avoid the ridge. Do not replace this with a fixed background crop.

## Components and surfaces — verified unless labeled

- Cards use a 1px translucent border, subtly different seasonal surfaces, no drop shadow, and flex-column alignment. Hover raises them 5px and changes surface/border to the seasonal hover/accent, over .2s ease. Decorative strokes are thin and large; top icons are 50px (mobile 40px).
- Primary action: 50px minimum height, 13px 23px padding, 30px radius, seasonal accent fill, ground-colored ink, 35px internal gap. Hover lifts 2px and uses accent-hover. Keyboard focus is a 3px accent outline with 6px offset.
- All interface arrows, pluses, and close marks are inline SVG with round caps/joins and inherited color. Use about 1.7px strokes in a 24px viewBox. Avoid Unicode substitutes that become iOS color emoji. Seasonal sprout/sun/leaf/snowflake drawings use 1.6px strokes.
- Scenic label: 65%-canvas translucent pill, 1px `#ffffff33` border, 6px backdrop blur, 10px 15px padding, 11px white text. Blur is localized to this label and dialog backdrop, not spread over every surface.
- The 24px season button contains a 16px SVG. It uses default cursor, no tooltip or hover cue; preserve its accessible label and keyboard focus. Spring → summer → autumn → winter. Manual choice lasts until reload or the next actual calendar season transition. It is not persisted.
- The adjacent Coyote Hills text is a separate official park link. Pointer cursor, underline, and small outward arrow appear on hover/focus only on that link. Preserve these distinct hit targets.
- Source dialogs use native `dialog`, max 530px, width `calc(100% - 40px)`, 48px padding (mobile 40px 27px), 22px radius, seasonal canvas and pale text. Backdrop `#061c2488` with 5px blur; dialog shadow `0 30px 100px #061c2455`. Close control is at least 44px. Clicking the backdrop or native Escape closes it.
- The family header links home; its closing logo links to `/design/`, and the Design mark links back to the family site. That bidirectional connection is site navigation, not a requirement to reuse a personal logo. Quiet logo links use default cursor with visible keyboard focus. Preserve accessible names if adapting them.
- **Adaptation:** the specimen adds labeled 44px-minimum inputs, 12px 14px padding, 10px radius, solid seasonal canvas, a muted border and accent focus. The source has no input/error/disabled form system. Disabled specimen fields are visibly muted and submit nothing.

## Scene, seasons, and wildlife — runtime verified

California meteorological seasons use `America/Los_Angeles`: March 1, June 1, September 1, December 1. Apply the palette before loading CSS and preload the current painting at high priority. Check wall-clock season changes at each next real second, on visibility restoration, and on page restoration, independently of the animation clock. No network weather service, scheduled deployment, or geolocation is needed.

Use matching 1024 × 1536 terrain images and transparent cloud layers. WebP delivery images retain dimensions; PNG originals remain in the family project for editing/registration checks. Load decorative clouds at low priority. Painting, cloud positions, bird anchors and any perspective lift share the actual cover transform. Cap canvas device pixel ratio at 2.

Clouds use two overlapping, feathered periodic layers with spacing .82 of sprite width. Defined near layer: scale 1, 480-second period, .86 opacity. Softer distant layer: scale .82, 1080-second period, phase .43, .22 opacity. Both drift in the same direction and repeat together after 72 minutes. Each season further multiplies cloud opacity (spring/summer 1, autumn .9, winter 1). Use smoothstep edge fades, a vertical dissolve, and a sky-only clip at painting y=.655. Distant blur is clamped to 1–3px; terrain remains still. Prevent rectangular cloud edges, empty gaps, abrupt wrapping, and moving cloud pixels over the hills.

Each full page load alternates the season's eligible pair, separately remembered per season in browser storage: spring/summer egret ↔ tree swallows; autumn egret ↔ flying northern pintails; winter egret ↔ swimming/dabbling pintails. A storage fallback keeps the scene working when storage is unavailable. Routes and behavior are illustrative, not recordings or evidence of actual local wildlife activity.

- **Swallows:** closed C2-continuous paths, sampled by arc length; pointed wings, short notched tails, dark backs and pale underparts. Brief wingbeat bursts alternate with glides. Project size and movement by depth; keep them deeper in the landscape rather than large foreground silhouettes.
- **Egret:** shallow 12-second approach, 120 seconds of patient marsh probing, 10-second departure, 3-second empty gap; repeat. Anchor at painting x=.64/y=.748, scale `imageWidth * .00024`. Tie approach/departure rise to horizontal travel to avoid steep mobile dives. Preserve tucked neck, feet-first landing, gentle turns and banking, probing, and seasonal atmospheric color.
- **Pintails:** updated distant placement uses `depth = 1.3 + index * .15`, perspective `1/(1 + depth*.9)`. Apply perspective to scale; compress swimming circuit width and bobbing too. Swimming birds sit at painting y=.737 plus index*.0003, nearer the far bank than the earlier .751 placement. Flying flock has a 165-second screen crossing. Males retain brown head/pale neck and females warm mottling, but every wing, body, tail, breast, neck, head, bill, eye and water marking receives seasonal haze. Water rings are softer (.3 alpha). Do not leave bright white markings or black eyes at foreground contrast.

Atmospheric color: mix the active season's sRGB sky 60% toward `[210,225,224]`; mix each original bird color toward this air color by `clamp(1-exp(-depth*.22),0,.72)`. This reduces contrast and saturation as depth increases, rather than merely making birds transparent. The swallow and pintail runtime share this helper; the egret has its own source-verified marsh treatment.

Animation automatically runs without a visible pause button. Stop requesting frames when hidden/offscreen; resume without advancing the visible-animation clock. Reduced motion keeps birds/clouds still and removes transitions and smooth scrolling. Season boundary updates continue while motion is paused. Avoid moving headings, floating cards, swaying terrain, and large distracting bird silhouettes.

## Reproduction recipe

1. Define all four semantic palettes, an sRGB baseline and conditional P3 enhancement; choose the California season before first paint.
2. Produce registered seasonal painterly hills/marsh with cloud-free sky; add separate feathered cloud layers and depth-aware wildlife. Keep the ground fixed.
3. Use the regular Trebuchet hierarchy, one emphasized headline word and one accent pill. Build readability with the actual seasonal overlays, rather than putting text over unmodified highlights.
4. Add four bordered seasonal cards and the compact closing court. Keep card footers aligned and maintain the desktop bottom-of-page composition without fixed-height clipping.
5. Use SVG interface marks, separate quiet season cycling from the park link, and visible keyboard focus. Add native dialogs only where actual content needs them.
6. Test narrow and panoramic cover transforms, every season, reduced motion, storage failure, hidden-page pause, and California date boundaries. Keep illustration attribution and site identity distinct.

## Ready-to-use implementation prompt

> Reproduce the implemented Windswept direction documented in this kit, using The Tan Family site at commit 95e5db8 as the interface source. Build a full-bleed, fixed-terrain painterly East Bay landscape with registered seasonal hills and marsh; animate separate feathered cloud layers and small distant wildlife. Use the four seasonal palettes in tokens.json, early California season selection, sRGB fallbacks and conditional Display-P3 enhancement. Use regular Trebuchet MS/Arial throughout: 58–104px hero at 1.03 leading, 34–52px section headings, compact tracked labels, 35px card names. Give the scene one short eyebrow, one two-line heading and one seasonal accent pill. Follow it with four compact subtly varied dark cards, an earth-colored rounded closing panel within a sky-colored court, and a sky footer. Apply the documented tight spacing and responsive 4→2-column grid; let small screens scroll naturally. Keep terrain static; clouds overlap smoothly; wildlife shares crop/perspective and seasonal haze on every surface. Include SVG controls, keyboard focus, reduced-motion and hidden/offscreen pause. Use generic identity and original copy, not the family's personal logo or biographies. Form components, if needed, are explicitly new adaptations. Preserve the Design collection's three-column shell when integrating the card. Refer to style.md for exact geometry, source attribution, timings and implementation limits.
