# Windswept

An expansive, sunlit, painterly style: deep cobalt sky, sculpted cumulus, a pale luminous meadow, and dark grasses bending across the foreground. Best suited to reflective editorial pages, nature journals, travel stories, and calm discovery experiences.

## Source and evidence

- Source: [user-supplied landscape illustration](./reference.png), attached in chat and inspected November 4, 2026. Artist, title, license, and original publication were not provided; do not imply ownership or a known creator. Retained locally as a reference, not a cleared production asset.
- Visible image: 564 × 1002px portrait illustration. It contains no text, interface, navigation, interactive states, or animation.
- **Observed:** composition, color relationships, painterly edges, atmospheric depth, directional grasses, bright midday illumination.
- **Estimated:** colors and proportional bands below, read visually rather than sampled. Pixel precision is not claimed.
- **Proposed:** every typeface, component, spacing token, breakpoint, radius, shadow, accessibility adaptation, and motion rule. The specimen is an interface interpretation, not a reconstruction of an unseen website.

## Signature composition

The upper roughly 20–25% is uninterrupted deep blue. A cloud tower rises near x=60%, beginning around y=24%; it blooms into a cloud mass through the middle. Distant blue-green vegetation occupies roughly y=54–68%. A nearly white sunlit meadow sits near y=67–79%, and overlapping dark, sharp grasses dominate the bottom quarter. These bands overlap, rather than forming hard stripes.

Preserve the contrast between massive soft clouds and fine directional foreground strokes. Light strikes upper/right cloud edges; cloud interiors use cyan, with blue shadows lower/left. Trees lose contrast and detail with distance. Grass blades lean in differing arcs, suggesting wind without requiring actual animation. A CSS gradient alone will not reproduce the image's cloud structure or brushwork.

## Palette

All hex values are visual estimates. Relative area guidance applies to an illustrated hero, not to the text-heavy specimen sections.

| Token | Value | Role and distribution | Evidence |
| --- | --- | --- | --- |
| Sky deep | `#0753aa` | Dominant upper field, about 35%; primary action adaptation | Estimated |
| Sky light | `#52a3ed` | Horizon transition and bright blue atmosphere | Estimated |
| Cloud | `#f5fcf3` | Cloud highlights, pale reading areas; about 20% | Estimated |
| Cloud shade | `#75c4da` | Soft cloud modeling and atmospheric middle distance | Estimated |
| Meadow | `#d9f58b` | Bleached yellow-green light, about 15% with highlights | Estimated |
| Grass | `#91bd45` | Mid-tone grass accents, about 10% | Estimated |
| Forest | `#183e42` | Foreground depth and text; about 10% | Estimated / text role proposed |
| Canvas | `#f4f8ee` | Quiet reading background | Proposed |
| Surface | `#ffffff` | Functional cards and inputs | Proposed |
| Muted ink | `#49655c` | Secondary text on pale canvas | Proposed |
| Border | `#cad9c8` | Low emphasis boundaries | Proposed |

Use forest ink on pale canvas and white on deep sky. Never place small white text directly on meadow green or bright cloud edges. Use a separate solid panel for long-form text. Soft borders are decorative; inputs receive a darker functional border. Focus uses a 3px deep-blue ring with 3px offset. Bright green is a visual accent, not a body-text color.

## Typography — proposed

No type appears in the source. The specimen chooses a broad, literary Georgia serif to suggest the open landscape and a friendly Trebuchet MS for utility text. These are implementation choices, not font identifications.

| Role | Specification |
| --- | --- |
| Display | `Georgia, "Times New Roman", serif`; 52–104px via `clamp`; weight 400; line height 1.02; tracking -0.045em |
| Section title | Same serif; 32–48px; line height 1.12 |
| Body | `"Trebuchet MS", Arial, sans-serif`; 16px; weight 400; line height 1.7; 55–65 character measure |
| Label | 12px; 0.15em tracking; uppercase; minimum 1.5 line height |
| Control | 14–16px; weight 600; normal tracking; sentence case |

## Layout — proposed

- Centered 1120px maximum width; fluid page gutter from 20px to 64px. Base spacing scale: 4, 8, 12, 16, 24, 32, 48, 80, 112px.
- Hero: two columns, 1.05fr text / 0.95fr image, 48px gap, generous 80px vertical breathing room. Image is a portrait window, 4:5 crop, focal position 50% 48%; link the original uncropped reference separately.
- Use one oversized headline and one scenic focal point. Keep labels and navigation visually secondary.
- Below hero: palette strip and two-column specimen panels with 24px gaps; component padding 24–32px. Reading section whitespace 80px, mobile 48px.
- At 760px and below, stack hero and panels, reduce hero gap to 32px, and keep the image visible without forcing landscape stretching. Labels wrap. Page must fit 360px without horizontal scrolling.
- In the existing Design collection, preserve three desktop columns and existing tablet/mobile breakpoints. Only the Windswept card uses this image treatment.

## Surfaces, depth, and imagery — proposed translation

- Quiet, solid cloud-white surfaces. 20px card radius; 10px input radius; pill-shaped action. Borders 1px, neutral green-gray. Avoid translucent glass and plastic highlights.
- Shadow: `0 16px 48px -20px rgb(24 62 66 / 22%)`, reserved for an elevated scenic card. Let image layering provide most depth.
- Use large painterly landscapes with sculptural clouds, daylight blue shadows, chalky highlights, atmospheric distant foliage, and fine foreground grasses. Avoid flat clip-art clouds or uniform green fill.
- Preserve the blue-to-cyan atmospheric transition and sunlight rather than applying a beige or desaturated filter. Do not tile the reference as a background texture.
- If new art is commissioned or generated, request an original composition with these visual traits; do not claim the result is the attached artwork or a known artist's work.
- Icons, if needed, should be 20–24px, simple 1.5px rounded strokes; no icon geometry can be inferred from the image.

## Component grammar — proposed

- **Navigation:** small forest-green wordmark, plain underlined text links, ample horizontal space; wrap on narrow screens. No opaque bar over cloud details.
- **Primary action:** white text on deep blue, 12px × 20px padding, at least 44px tall, pill shape. Hover uses `#064589`; keyboard focus uses visible blue outline. Disabled is pale neutral with explicit disabled semantics.
- **Secondary action:** forest ink, 1px forest border, transparent pale background; underline ordinary text links.
- **Card:** cloud-white, 20px radius, 24–32px padding, thin soft border. Title 28px Georgia and body 16px. Small meadow-green label can supply a warm accent with forest ink.
- **Input:** persistent label above, 12px × 14px padding, minimum 44px height, 10px radius, forest-muted border. Focus outline 3px; disabled is visibly muted. Error state needs text plus a darker error color chosen for the application, not invented as source evidence.
- **Interaction:** labels in the specimen explicitly identify examples. Working anchor links navigate to artifacts; button/input examples are component demonstrations, not subscription or checkout forms.

## Motion — proposed, optional

The illustration is static. Start with no continuous animation. A hover color transition may use 180ms `cubic-bezier(0.2, 0.6, 0.3, 1)`. Disable it under `prefers-reduced-motion`. If a future application adds wind, confine a very small slow displacement to decorative foreground elements; never animate text, entire clouds, or the page background by default.

## Reproduction recipe

1. Establish a pale green-white canvas and deep forest text; define semantic tokens before styling components.
2. Compose the scenic area from spacious deep blue, a luminous vertically developed cloud, softened middle-distance trees, a pale meadow band, and darker directional foreground detail.
3. Place generous serif display text beside the image on a quiet solid background. Keep long text out of the high-frequency grass.
4. Build restrained rounded cards and a small deep-blue action; use green sparingly for emphasis.
5. Stack the composition for narrow screens, preserve a meaningful portrait crop, and verify contrast/focus states.
6. Compare the atmosphere against the actual source: strong noon light, saturated sky, airy scale, and painterly layered depth are the signature. Font choice and UI radii are flexible adaptations.

Avoid gray mist, sepia filters, neon gradients, black dashboards, heavy hard shadows, flat geometric cloud symbols, dense widget grids, and claiming the image establishes a particular font or interaction.

## Implementation prompt

> Build a responsive interface in the Windswept direction using the attached landscape as visual evidence. Preserve deep cobalt sky, luminous sculptural cumulus with cyan shadow, softened blue-green distance, a pale yellow-green meadow band, and darker wind-combed foreground grasses. Keep the composition spacious and sunlit. Use the semantic values in tokens.css/tokens.json. Proposed UI: Georgia display at 52–104px / 1.02 with -0.045em tracking, Trebuchet MS body at 16px / 1.7, a 1120px content width, 24px grid gaps, 20px rounded cloud-white cards, forest ink, and deep-blue pill actions. Stack below 760px. Do not mistake these interface choices for measured source features. Keep text on solid surfaces, keyboard focus visible, and motion optional with reduced-motion support. Create original or licensed production imagery; the supplied image's artist and reuse rights are unknown. Preserve the Design library shell if integrating a card. Attribute supplied references and list material deviations.
