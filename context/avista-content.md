# Avista Villas — Bellavista Landing Page Content Deck

> Reference template: https://bellavista.framer.media/
> Brand guide: see `avista_style_guide.html` (Volume I) and `avista_assets_templates.html` (Volume II)

---

## How to use this document

This deck is structured **section-by-section in Bellavista's order**. For each section of Bellavista's homepage, you'll find:

1. **What Bellavista does** — the original block as reference
2. **Avista replacement** — the copy and asset specifications you should ship
3. **Notes for the developer** — anything to be careful of (links, conditionals, alt text)

At the bottom of this file, there's a **Codex prompt** ready to paste — it sets the brand context and links to this deck.

---

## Global tokens (apply across all sections)

```
SITE NAME            Avista Villas
TAGLINE              Three quiet houses in the pines of Sithonia
LOCATION             Sithonia, Halkidiki, Greece
COORDINATES          40.1056° N, 23.8642° E
EST.                 (use real founding year — placeholder: 2018)
PRIMARY EMAIL        hello@avistavillas.com   ← swap with real
PRIMARY PHONE        +30 ___ ___ ____         ← swap with real
INSTAGRAM            @avistavillas
SITE URL             avistavillas.com
```

### Color tokens (replace Bellavista's palette)

```css
--bone:      #FAF6EE;   /* page background */
--cream:     #F5EFE4;   /* soft sections */
--stone:     #C7B299;   /* hero accent */
--stone-deep:#8A7759;   /* italics, accents */
--olive:     #6B7A4F;   /* botanical accent */
--cypress:   #4A6B52;   /* depth */
--terracotta:#B5673E;   /* warm accent */
--charcoal:  #2B2A27;   /* text + dark sections */
--ink:       #1A1917;   /* headlines */
--whisper:   #B8B2A7;   /* muted text */
```

### Typography (replace Bellavista's fonts)

```
Display     Cormorant Garamond  (300, 400, 400 italic, 500)
Body        Inter               (300, 400, 500)
Script      Original Avista logo (SVG only — do not recreate)
```

### Voice rules (apply globally to ALL copy)

- **Never** use: luxury, amenities, package, deal, amazing, stunning, unforgettable, paradise, dream, world-class, top-rated, resort-style, property, unit
- **Always** use: quiet, slow mornings, the house, our garden, unhurried, cicadas, pine, olive leaf, stone, Sithonia, private, hand-drawn map, family-run, local
- Sentence case for headlines (not UPPERCASE like Bellavista's "ABOUT")
- Italic is the brand's emphasis — never bold for emotional weight
- Greek allowed sparingly: only `καλώς ορίσατε` in the contact/booking confirmation

---

# Section 1 · Hero

### Bellavista original
- Full-bleed photo of stone villa interior with countryside view
- Tagline above title: *"Creating timeless residences in France"*
- Big serif title: **Bellavista**

### Avista replacement

**Background image:** `images/resort-01.jpg` (the stone villa with pool + waterfall, full bleed)

**Top tagline (small, letter-spaced, uppercase):**
```
A SMALL FAMILY COLLECTION · SITHONIA · GREECE
```

**Big serif title:**
```
Avista
```
*(use the original Avista logo SVG — not retyped. Place it as a script wordmark, not as h1 text. The h1 for SEO can be a hidden semantic heading: "Avista Villas — Three private villas in Sithonia, Halkidiki, Greece")*

**Sub-line below the wordmark (italic serif, max 480px):**
```
Three quiet houses in the pines, kept for families
who want Greece on their own terms.
```

**Notes:**
- Add a subtle gradient overlay (charcoal at 30% opacity, top-down) so white type stays readable
- The Bellavista hero animates the title — keep that, it suits Avista's slow-pace feel
- Add a small "scroll" indicator at the bottom in stone color

---

# Section 2 · About

### Bellavista original
- Section eyebrow: "About"
- Body paragraph about creating boutique residences across France
- "Since 2004"
- Image of woman in suit against terracotta wall

### Avista replacement

**Section eyebrow:**
```
About
```

**Body paragraph (display serif, ~24px, max 720px):**
```
Avista is a small family collection of three private villas in
Sithonia, Halkidiki — set between the pines of the peninsula
and the clearest water in the Aegean. Each house has its own
character. All three share the same promise: a quiet week,
a beautiful garden, and the kind of privacy that lets a
family actually be on holiday.
```

**Date line:**
```
Since 2018
```
*(swap with real founding year)*

**Image:** Ideally a portrait-orientation lifestyle shot of the property — a stone wall with morning light, or the garden at the golden hour. If you don't have a portrait shot yet, use `images/garden-03.webp` (the warm bougainvillea terrace) cropped vertically.

**Caption under image (small italic):**
```
The house at the hour before lunch.
```

**Right-side small label/button (Bellavista uses "Residences" jumping to anchor):**
```
The Collection →
```
*(anchors to #collection)*

---

# Section 3 · Founder / Quote moment

### Bellavista original
- Photo: woman in light suit
- Brand name: "Bellavista"
- Phrase: "Understated luxury."
- Founder name: "Bellavista founder/host"
- "Let's talk" CTA

### Avista replacement

**Image:** A portrait of the founder/host (ideally relaxed, in the villa garden, not a corporate headshot). If no portrait yet, use `images/cypress-01.webp` (the night pool — atmospheric placeholder until a real portrait is shot).

**Brand name (small caps, letter-spaced):**
```
Avista
```

**The phrase (large display italic — this is the brand's tagline):**
```
Beautifully left alone.
```

**Founder name + role:**
```
Michalis Papadopoulos
Founder & host
```
*(swap "Michalis Papadopoulos" with the real name)*

**CTA button text:**
```
Get in touch
```
*(links to /contact)*

**Notes:**
- This whole section is the brand's emotional centerpiece. The phrase "Beautifully left alone" should be set very large — equivalent to ~88px on desktop. Italic, serif, in stone-deep color (#8A7759) on cream background.
- Do not surround the phrase with quotation marks. Let it stand alone.

---

# Section 4 · Marquee strip (the "✺ timeless ✺ french heritage ✺ elegant" scrolling line)

### Bellavista original
- Horizontal scrolling text with star ornaments

### Avista replacement

**Repeating text (separated by ✺ ornament):**
```
✺ quiet ✺ private ✺ family-run ✺ stone & pine ✺ unhurried ✺ Sithonia ✺ since 2018
```

**Notes:**
- Keep the marquee animation
- Use Cormorant Garamond italic, ~22px, in stone-deep color on cream background
- Speed: slow (Bellavista's is good — match it)

---

# Section 5 · Residences (the collection grid)

### Bellavista original
- Section title: "Residences"
- Eyebrow: "COLLECTION I — FRANCE"
- Intro paragraph
- Three villa cards stacked vertically, each with:
  - Large photo
  - GPS coordinates
  - Location & year
  - Villa name (large)
  - Designer credit + small portrait
  - One-line poetic description

### Avista replacement

**Section title:**
```
The Collection
```

**Eyebrow:**
```
THREE HOUSES — SITHONIA, GREECE
```

**Intro paragraph (italic display serif, max 680px):**
```
Each Avista villa has its own architectural mood. The first
is contemporary stone, set in a private clearing. The second
is a warmer Greek family home, full of bougainvillea and
terracotta. The third is the most design-led — a sleek pool
in an olive grove, lit beautifully for the evenings. One
collection. Three distinct ways to spend a week.
```

---

### Villa Card 1 — The Private Resort

**Image:** `images/resort-01.jpg` (or the aerial `images/resort-02.jpg` — pick whichever is more striking on the homepage; reserve the other for the villa detail page)

**GPS coordinates (small label, top of card):**
```
40.1056° N, 23.8642° E
```

**Location and year:**
```
Sithonia · Built 2018
```

**Villa name (large display serif):**
```
The Private Resort
```

**"Designed by" credit (replace with style label):**
```
Style — Contemporary stone
```
*(no portrait needed — leave the slot empty or use a small architectural detail crop)*

**One-line description (italic, ~20px):**
```
Set in its own clearing of 2,500 square metres. Stone walls,
a long pergola, a pool with a quiet waterfall — and the
distant blue of the Aegean.
```

**Card link:** `/villas/private-resort`

---

### Villa Card 2 — The Garden Residence

**Image:** `images/garden-02.webp` (the living room with bougainvillea view) or `images/garden-03.webp` (terrace)

**GPS coordinates:**
```
40.1056° N, 23.8642° E
```

**Location and year:**
```
Sithonia · Reimagined 2020
```
*(adjust years — these are placeholders)*

**Villa name:**
```
The Garden Residence
```

**Style label:**
```
Style — Traditional Greek
```

**One-line description:**
```
Double-height ceilings, terracotta floors, wicker and dark
wood. In July, the bougainvillea spills across the terrace
and the house feels like family you didn't know you had.
```

**Card link:** `/villas/garden-residence`

---

### Villa Card 3 — The Cypress House

**Image:** `images/cypress-01.webp` (the pool at dusk — this is the strongest shot)

**GPS coordinates:**
```
40.1056° N, 23.8642° E
```

**Location and year:**
```
Sithonia · Built 2022
```

**Villa name:**
```
The Cypress House
```

**Style label:**
```
Style — Design-led modern
```

**One-line description:**
```
A sleek rectangular pool wrapped in an olive grove, with
tall cypresses standing watch at dusk. The house lit gently
for evenings that begin late and end later.
```

**Card link:** `/villas/cypress-house`

---

**"See more" link below the cards:**
```
See all three →
```
*(or just remove if all three are already shown)*

---

# Section 6 · Heritage / Editorial moments grid

### Bellavista original
- Section title: "Heritage"
- Repeated intro paragraph (probably a CMS oversight on their side)
- A grid of small lifestyle/cultural photos with single-word labels:
  - "culture" — three women at a table
  - "heritage" — clay vase
  - "MOMENT" — wine glass
  - "Bellavista Residence" — text-only
  - "presence" — woman by sea

### Avista replacement

**Section title:**
```
The Land
```

**Intro paragraph (italic display serif):**
```
Sithonia is the quieter middle leg of Halkidiki. Forested,
unhurried, closer to how Greece felt twenty years ago than
how it looks on Instagram today. These are the moments we
hand our guests when they arrive.
```

**Grid items (image + single-word label):**

| Image source | Label (italic, lowercase) | Notes |
|---|---|---|
| Olive tree close-up (or `images/garden-01.webp` for warm interior) | `morning` | Use a warm-light interior or olive leaf detail |
| Bougainvillea / terrace shot (`images/garden-03.webp`) | `bougainvillea` | The terrace with red flowers |
| A simple object — coffee cup, wine glass, fig (use stock or own photo) | `slow` | Quiet detail shot |
| Text-only tile (cream background, italic serif) | `Avista · Sithonia` | Brand pause, text only |
| Pool at night (`images/cypress-01.webp`) or sea (`images/resort-02.jpg` aerial) | `the hour after sunset` | Atmospheric closer |

**Notes:**
- Keep the editorial single-word labels. Avoid sentences in this grid — it's about visual rhythm.
- The text-only "Avista · Sithonia" tile is the quiet pause Bellavista uses. Keep it.

---

# Section 7 · Footer / Final CTA

### Bellavista original
- "Projects · 4" + "About" + "Buy template" links
- Brand name large
- Tagline
- Address + coordinates
- Email
- Sitemap links
- Social
- Copyright

### Avista replacement

**Top section — large brand mark:**
- Use the original Avista SVG logo at large size (~120px tall)

**Tagline below logo (italic serif, stone-deep color):**
```
boutique villas in Sithonia — quiet, private, family-run
```

**Two-column section:**

**Left column (contact):**
```
Avista Villas · Sithonia, Greece
40.1056° N, 23.8642° E

hello@avistavillas.com
+30 ___ ___ ____
```

**Right column (sitemap):**
```
The Collection
The Private Resort
The Garden Residence
The Cypress House

About
Journal
Contact
```

**Social row:**
```
Instagram   @avistavillas
```
*(only Instagram for now — add others when accounts exist)*

**Final CTA above the footer divider (large display italic, centered):**
```
Plan a quiet week.
```
**Below it, a single button:**
```
Reach out →
```
*(links to /contact)*

**Bottom strip:**
```
✺ Avista                                    © 2026 Avista Villas
```

---

# Section 8 · The Contact Page (since you mentioned starting with a form)

Even though Bellavista doesn't show a contact page on the homepage, you'll need one for "Reach out" to land somewhere meaningful.

### Suggested layout

**Hero:**
```
EYEBROW:  Reach out

HEADLINE: Tell us when you're hoping to come.

SUB:      We'll write back personally — usually the same day,
          always within twenty-four hours. No automated quotes,
          no booking widgets. Just a conversation.
```

**Form fields (in this order):**
1. `Your name` (text)
2. `Email` (email)
3. `Approximate dates` (text — keep it loose, e.g. "First two weeks of July")
4. `Number of guests — adults / children` (text)
5. `Which villa interests you most?` (select: The Private Resort / The Garden Residence / The Cypress House / Not sure yet)
6. `Anything else we should know?` (textarea)

**Submit button:**
```
Send →
```

**Below the form (small italic):**
```
καλώς ορίσατε.
```

**Sidebar / right column:**
```
Or call us directly:
+30 ___ ___ ____

Or email:
hello@avistavillas.com
```

---

# Section 9 · Page <head> SEO content

```html
<title>Avista Villas — Three private villas in Sithonia, Halkidiki, Greece</title>

<meta name="description" content="A small family collection of three private villas in the pines of Sithonia, Halkidiki. Quiet, family-run, designed for guests who want Greece on their own terms.">

<meta property="og:title" content="Avista Villas — Sithonia, Halkidiki">
<meta property="og:description" content="Three quiet houses in the pines, kept for families who want Greece on their own terms.">
<meta property="og:image" content="/images/resort-01.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://avistavillas.com">

<link rel="icon" type="image/svg+xml" href="/favicon.svg">
```

**Schema.org JSON-LD (drop in head):**

```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Avista Villas",
  "description": "A small family collection of three private villas in Sithonia, Halkidiki, Greece.",
  "url": "https://avistavillas.com",
  "image": "https://avistavillas.com/images/resort-01.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sithonia",
    "addressRegion": "Halkidiki",
    "addressCountry": "GR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.1056,
    "longitude": 23.8642
  }
}
```

---

# Animation & micro-interaction notes

These are the small details Bellavista does well that Avista should preserve:

- **Hero title fade-in** on page load (slow, 1.2s)
- **Image scale-on-scroll** for villa cards (subtle — 1.0 to 1.05 over scroll)
- **Marquee** scrolls slowly (~20s loop)
- **Cursor**: keep default. Custom cursors fight the quiet aesthetic.
- **Hover on villa cards**: image lightens slightly + arrow animates 4px to the right. No card-tilt 3D effects.
- **No parallax**. No video backgrounds. No autoplaying audio. Quiet means quiet.

---

# Image checklist

You'll need these images at minimum for the homepage to look complete:

| Slot | File | Need |
|---|---|---|
| Hero | `resort-01.jpg` | ✓ have |
| About-side image | A portrait-orientation lifestyle shot | **need to shoot** (or crop existing landscape) |
| Founder portrait | A relaxed shot of the host | **need to shoot** |
| Villa 1 card | `resort-01.jpg` or `resort-02.jpg` | ✓ have |
| Villa 2 card | `garden-02.webp` or `garden-03.webp` | ✓ have |
| Villa 3 card | `cypress-01.webp` | ✓ have |
| Heritage grid (5 tiles) | Mix of details, lifestyle, atmospheric | **need 2–3 more detail shots** |
| Open Graph image | `resort-01.jpg` cropped 1200×630 | ✓ have, needs crop |

The two **must-shoot** items before launching publicly: a real founder portrait and a portrait-orientation lifestyle/architecture shot. Everything else can ship with what you have.

---

---

# THE CODEX PROMPT

Paste the block below into Codex. It assumes you have already cloned/copied the Bellavista template into your project, and that this content deck (`avista-content-deck.md`) and your brand guides are accessible.

---

```
You are converting the Bellavista Framer template (https://bellavista.framer.media/)
into the homepage and contact page for Avista Villas — a small family collection
of three private villas in Sithonia, Halkidiki, Greece.

CONTEXT FILES:
- avista-content-deck.md          ← the section-by-section content deck (PRIMARY)
- avista_style_guide.html         ← Volume I — brand foundation, palette, typography, voice
- avista_assets_templates.html    ← Volume II — templates, monogram, icon set, patterns

YOUR TASK:
Modify the Bellavista template's homepage and add a contact page so it becomes
Avista Villas. Keep the structure, layout, animation patterns, and overall
editorial feel. Replace ALL content (text, images, colors, fonts, links)
according to avista-content-deck.md.

CRITICAL RULES:

1. STRUCTURE — Match Bellavista 1:1. Same section order (Hero → About → Founder
   quote → Marquee → Collection (3 villas) → Heritage grid → Footer). Do NOT
   add or remove sections.

2. COPY — Use the EXACT text from avista-content-deck.md. Do not paraphrase,
   do not embellish, do not invent. If a section asks for an italic phrase,
   set it in italic.

3. VOICE — Never use the words: luxury, amenities, package, deal, amazing,
   stunning, unforgettable, paradise, dream, world-class, top-rated,
   resort-style, property, unit, BOOK NOW. If you would naturally write any
   of these, stop and find the Avista alternative in the brand guide.

4. TYPOGRAPHY — Replace ALL fonts:
   - Display: Cormorant Garamond (300, 400, 400i, 500)
   - Body:    Inter (300, 400, 500)
   Load from Google Fonts. Use sentence case for headlines (NOT UPPERCASE).
   Italic is the brand's emphasis — never use bold for emotional weight.

5. COLOR — Replace Bellavista's palette with the tokens at the top of
   avista-content-deck.md. The hero color is honey stone (#C7B299). Cream
   (#F5EFE4) and bone (#FAF6EE) carry the backgrounds. Charcoal (#2B2A27)
   for primary text. Accents (olive, terracotta, aegean, cypress) used
   sparingly per the 40/28/15/8/5/4 ratio in Volume I.

6. LOGO — The Avista logo (script "Avista" over "VILLAS") is provided as SVG.
   Use the SVG file directly. Do NOT recreate it with Dancing Script or any
   web font. Apply the clear-space and minimum-size rules from Volume I §05.

7. IMAGES — All currently in /images/. File names match avista-content-deck.md.
   Apply CSS filter: saturate(0.92) contrast(1.02) to all photography for
   the editorial desaturation specified in Volume I §06.

8. ANIMATION — Keep Bellavista's animation patterns (slow fade-in hero, scroll-
   triggered image scale, slow marquee). Do NOT add: parallax, video
   backgrounds, custom cursors, autoplay audio, lens flares, HDR effects.

9. CONTACT FORM — Build the contact page per §8 of avista-content-deck.md.
   The form should POST to /api/contact for now (placeholder endpoint).
   Server-side: send the submission as a plain-text email to
   hello@avistavillas.com. No CRM, no Calendly, no booking widget.

10. SEO — Insert the <head> tags and JSON-LD from §9 of the deck.

11. ACCESSIBILITY — Every image gets alt text describing what's IN the image,
    not the brand ("Stone villa with pergola at golden hour" not "Avista
    villa exterior"). Color contrast must pass AA. The hero h1 should be
    semantically present even if visually replaced by the SVG logo.

12. RESPONSIVE — Mobile-first. On mobile, the villa collection cards should
    stack vertically and lose the side-by-side designer-credit slot. The
    marquee should keep moving at the same speed. The hero sub-line should
    not exceed 75% viewport width.

DELIVERABLES:
- /index.html (or /pages/index.tsx if Next.js)
- /contact.html (or /pages/contact.tsx)
- /styles/avista.css (or equivalent — all token overrides in one place)
- Updated /public/images/ (already populated)
- Updated <head> with proper SEO tags

DO NOT TOUCH:
- The Bellavista template's underlying component structure unless the swap
  requires it
- Any third-party scripts (analytics, etc.) — note them and ask before
  removing

When finished, output a summary of:
1. Files modified
2. Files created
3. Anything in the deck you couldn't implement and why
4. Any brand-rule conflicts you noticed and how you resolved them
```

---

## A note before you run this

The Codex prompt is intentionally **strict** — Bellavista's template will tempt the model toward decoration, and Avista's brand wins through restraint. Lean into the strictness. If Codex pushes back or asks to "enhance" something, say no.

After the first build pass, the most common things to manually check:
1. **Headline case** — Codex might quietly UPPERCASE things to "match the template"
2. **The phrase "Beautifully left alone."** — make sure it sits *huge* and italic, not buried
3. **Star ornaments (✺)** — Bellavista uses these. Keep them. They're the only "decoration" allowed in the brand.
4. **The marquee word list** — easy to drift. Verify it matches §4 exactly.
5. **No "Book Now"** — if you see it anywhere, replace with "Reach out" or "Get in touch"

You've got everything you need. Run the prompt, review the first pass, iterate from there.
