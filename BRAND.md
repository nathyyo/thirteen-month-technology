# Thirteen Month Technology — Brand Guidelines

Derived from the official 13 Month mark and brand guidelines (v1). Use this file when extending the website, presentations, or partner materials.

## Brand idea

A brand built around the extra month — the bonus payout, and the way Ethiopia's own calendar counts to thirteen. Twelve months counted plainly. One measured differently.

**"Thirteenth month"** is the international term for a bonus month's pay — an extra payout beyond the regular twelve, common across HR and finance globally. It's the plain-language promise of a growth product: more than what was counted.

**Pagumē** is the short thirteenth month (five or six days) that closes out the Ethiopian calendar's twelve months of thirty days. It's a genuine local structure, not a metaphor borrowed from elsewhere. The mark's twelve rays plus one arc follows this logic exactly.

**Proof line:** Finance · Government · Aviation · Cross-Border Verification

**Operating idea:** Verify. Connect. Manage. Audit.

## Logo

The mark is twelve rays struck evenly from a center point — one weight, one length pattern — plus a thirteenth element that breaks the pattern on purpose: a terracotta arc that sweeps past the count, ending in a small dot. It is the only color anywhere in the mark.

The wordmark lockup pairs the mark with **13** (Fraunces bold) and **Month** (Fraunces regular), with a tracked **TECHNOLOGY** line underneath — the company's full name is Thirteen Month Technology; "13" is the mark's typographic shorthand, matching the rule that the numeral is never used alone.

### Clear space and minimum size

- Clear space equal to the mark's own radius on every side. Nothing enters that ring.
- 24px minimum for the mark alone, 120px wide minimum for the full horizontal lockup. Below that, use the mark-only version.
- Never recolor the arc. Terracotta is the only accent the mark carries, in every context including single-color print.
- Don't rotate the mark or recolor it to match a secondary palette.

### Animation

Motion should feel precise, not decorative:

- The arc may draw in once on load, then settle.
- A gentle float on hero placements is acceptable.
- Honour `prefers-reduced-motion`.

## Colour

| Token | Hex (light) | Hex (dark) | Use |
| --- | --- | --- | --- |
| Parchment / Ink | `#F6F1E7` | `#1A1614` | Page background |
| Ink / Parchment | `#1A1614` | `#F6F1E7` | Text |
| Clay grey | `#B9AFA0` | `#8A8175` | Muted text, borders |
| Terracotta (accent) | `#C1622D` | `#D97A46` | The only accent — arc, CTAs, links |
| Indigo | `#232B4D` | `#6672A3` | Reserved, data/charts only |

Terracotta is spent in exactly one place per view — usually the primary button or a single link. Never introduce a second accent color.

### Light mode

Parchment or white ground. Ink text. Terracotta for actions. Hairline clay-grey borders.

### Dark mode

Ink ground. Parchment and clay text. Terracotta glows slightly brighter to hold contrast. Never pure black or pure white anywhere in the system.

## Typography

- **Display:** Fraunces — variable, weights 300–700, optical size 9–144. Use 600–700 for headlines and the numeral "13", 400 for supporting words.
- **Body / UI:** Inter — weights 400 and 500 only. Never bold Inter for emphasis; use Fraunces or color instead.
- Labels use wide tracking and uppercase.
- "13" is always Fraunces bold, always paired with a lighter-weight word beside it — never alone as a standalone numeral ("13 Month", "13 days left").

## UI language

- Generous space, hairline borders, flat surfaces — no heavy blur or glassmorphism.
- Buttons: flat terracotta primary, outline secondary. No gradients, no glow.
- Icons: thin linear strokes in a single ink or terracotta tone — no gradient fills.
- Photography: banking architecture, civic buildings, aviation, African and international cities, global connectivity. Always overlaid with an ink scrim so the brand stays in control.
- Avoid neon grids, coin imagery, and loud decoration generally — this is a calm, editorial system, not a sci-fi one.

## Voice

Calm, specific, and confident. Write for institutions. Do not over-claim. Do not explain confidential implementation.

## Assets

Vector source lives in `public/brand/`:

- `logo-primary-ink.svg` / `logo-primary-reversed.svg` — horizontal lockup
- `logo-stacked-ink.svg` — vertical/square placements
- `mark-ink.svg` / `mark-reversed.svg` / `mark-mono.svg` (uses `currentColor`) — mark only
- `app-icon.svg` — 512×512 app icon source

Before production print: convert wordmark text to outlines once Fraunces is licensed for the target use, so the file has no font dependency.
