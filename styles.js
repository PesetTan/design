// Add one object per style. These starter examples are not sourced references.
// Keep references and artifacts empty until real source links and files exist.
window.designStyles = [
  { id: 'swiss', name: 'Swiss / International', category: 'Minimal', tags: ['Grid-led', 'Typographic'], description: 'Precise grids, confident typography, and a clear hierarchy. Every element has a reason to be there.', colors: ['#e74c32', '#f4f0e7', '#202020'], typography: 'Neutral sans serif. Strong weight contrast, generous spacing, and asymmetric alignment.', principles: ['Build on a consistent grid.', 'Let typography establish hierarchy.', 'Use color with intention.'], references: [], artifacts: [], preview: 'swiss' },
  { id: 'editorial', name: 'Quiet Editorial', category: 'Minimal', tags: ['Refined', 'Serif'], description: 'A little room to breathe. Expressive serif type, warm paper tones, and thoughtful composition.', colors: ['#e7dfcf', '#332d27', '#858b71'], typography: 'An expressive serif paired with a restrained sans serif for labels and navigation.', principles: ['Treat whitespace as part of the composition.', 'Keep the palette warm and restrained.', 'Give text a comfortable reading rhythm.'], references: [], artifacts: [], preview: 'editorial' },
  { id: 'brutalist', name: 'Playful Brutalism', category: 'Expressive', tags: ['Bold', 'Graphic'], description: 'Unfiltered shapes, hard edges, and a deliberate sense of play. Confident, direct, and hard to miss.', colors: ['#d7ec49', '#a991da', '#262626'], typography: 'Heavy display type, compact labels, and deliberate shifts in scale.', principles: ['Use visible borders and hard shadows.', 'Embrace strong contrast.', 'Keep the underlying navigation clear.'], references: [], artifacts: [], preview: 'brutalist' },
  { id: 'organic', name: 'Organic Modern', category: 'Minimal', tags: ['Natural', 'Soft'], description: 'Earthy colors and soft forms, balanced with a clean modern structure. Calm without feeling clinical.', colors: ['#b7b69c', '#f2ede3', '#705444'], typography: 'Soft, approachable letterforms with a clean sans serif for functional text.', principles: ['Borrow colors from natural materials.', 'Balance rounded forms with simple structure.', 'Use texture sparingly.'], references: [], artifacts: [], preview: 'organic' },
  { id: 'glass', name: 'Luminous Glass', category: 'Digital', tags: ['Layered', 'Atmospheric'], description: 'Translucent surfaces over pools of light. Depth, blur, and subtle edges create a floating interface.', colors: ['#b5a4e5', '#a9c8e0', '#25354a'], typography: 'A clean sans serif with readable weights and crisp interface labels.', principles: ['Use translucency to explain layers.', 'Check contrast over every background.', 'Keep blur and glow controlled.'], references: [], artifacts: [], preview: 'glass' },
  { id: 'retro', name: 'Retro Futurism', category: 'Expressive', tags: ['Nostalgic', 'Geometric'], description: 'Yesterday’s idea of tomorrow. Geometric forms, warm color, and optimistic space-age details.', colors: ['#ce5b35', '#e8b869', '#2f4e52'], typography: 'Geometric display faces with compact, functional supporting text.', principles: ['Repeat geometric motifs.', 'Mix warm tones with deep contrasting colors.', 'Use nostalgia to support a clear composition.'], references: [], artifacts: [], preview: 'retro' },
  {
    "id": "windswept",
    "name": "Windswept",
    "category": "Expressive",
    "tags": [
      "Painterly",
      "Seasonal",
      "Atmospheric"
    ],
    "description": "Fixed painterly hills, slowly drifting sculptural clouds, and distant seasonal wildlife. Warm sans-serif type, coordinated dark surfaces, and quiet SVG controls grow from The Tan Family’s living landscape.",
    "colors": [
      "#345b7c",
      "#3d392b",
      "#efc28c"
    ],
    "typography": "Verified implementation: Trebuchet MS, Arial, sans-serif throughout. Regular 58–104px hero at 1.03 leading; 34–52px section headings; compact tracked labels and 35px card names.",
    "principles": [
      "Keep hill and shoreline registration fixed across seasons; animate clouds and wildlife in separate layers.",
      "Let seasonal sky, canvas, card surfaces, text and accents change together, with sRGB fallbacks and optional Display-P3 enhancement.",
      "Make wildlife smaller and less contrasty with distance; apply seasonal haze to every bird surface and marking.",
      "Use a broad scenic hero, four compact cards, and a rounded closing panel on a sky-colored court; reduce empty space before reducing text.",
      "Use inline SVG controls, visible keyboard focus, reduced-motion support, and quiet discoverable season navigation."
    ],
    "references": [
      {
        "title": "The Tan Family — implemented seasonal Windswept site",
        "url": "https://www.thetanfamily.net/",
        "note": "Primary interface reference. Source verified at commit 95e5db8; desktop Safari inspected November 5, 2026. Responsive rules and scene behavior verified from source and animation checks."
      },
      {
        "title": "User-supplied landscape illustration",
        "url": "assets/windswept/reference.png",
        "note": "Original visual inspiration only; creator and reuse rights unverified. Earlier proposed serif/light UI is superseded by the implemented site."
      }
    ],
    "artifacts": [
      {
        "title": "Visual specimen",
        "url": "assets/windswept/specimen.html"
      },
      {
        "title": "Reproduction specification",
        "url": "assets/windswept/style.md"
      },
      {
        "title": "CSS design tokens",
        "url": "assets/windswept/tokens.css"
      },
      {
        "title": "JSON design tokens",
        "url": "assets/windswept/tokens.json"
      }
    ],
    "preview": "windswept",
    "cover": "assets/windswept/cover.svg"
  }
];
