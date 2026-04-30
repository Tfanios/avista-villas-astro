# Avista Villas — Bellavista Landing Page Content Deck

> Reference template: https://bellavista.framer.media/
> Brand guide: see `avista_style_guide.html` (Volume I) and `avista_assets_templates.html` (Volume II)
> This deck supersedes the previous Ardène deck.

---

## How to use this document

Bellavista is a hotel template. Avista is **not a hotel** — it's a small collection of three private villas. So while we're using Bellavista's *structure* and *layout patterns*, we're rewriting almost everything inside them. The structural fit is good (full-bleed hero, room/suite cards, dining, gallery, story sections); the *voice* and *visual treatment* of Bellavista are exactly what we need to avoid.

This deck:
1. Maps each Bellavista section to its Avista equivalent (some get repurposed, some get removed)
2. Provides the exact copy for each block
3. Specifies which photo goes where (using your Drive library)
4. Ends with a Codex prompt calibrated for this specific build

At the bottom, there's a **ready-to-paste Codex prompt**.

---

## Global tokens

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

### Color tokens (replace Bellavista's gold/yellow palette)

```css
--bone:       #FAF6EE;   /* page background */
--cream:      #F5EFE4;   /* soft sections */
--stone:      #C7B299;   /* hero accent */
--stone-deep: #8A7759;   /* italics, accents */
--olive:      #6B7A4F;   /* botanical accent */
--cypress:    #4A6B52;   /* depth */
--terracotta: #B5673E;   /* warm accent */
--charcoal:   #2B2A27;   /* text + dark sections */
--ink:        #1A1917;   /* headlines */
--whisper:    #B8B2A7;   /* muted text */
```

**Critical:** Remove every trace of Bellavista's gold/yellow accent color. It has no place in the Avista palette and will destroy the brand.

### Typography

```
Display     Cormorant Garamond  (300, 400, 400 italic, 500)
Body        Inter               (300, 400, 500)
Logo        Original Avista SVG  (do not recreate with Dancing Script in production)
```

### Voice rules (apply globally to ALL copy)

- **Use:** quiet, slow mornings, the house, our garden, **we / our** (the team), unhurried, cicadas, pine, olive leaf, stone, Sithonia, private, hand-drawn map, local
- **Never:** luxury, amenities, package, deal, amazing, stunning, unforgettable, paradise, dream, world-class, top-rated, resort-style, property, unit, BOOK NOW, founder
- **Sentence case** for headlines (NOT Bellavista's UPPERCASE)
- **No star ratings.** No "4.9 ★★★★★" widgets anywhere. Reviews appear as quoted prose.
- Italic is the brand's emphasis — never bold for emotional weight

### "We" in copy

The Avista voice uses "we" and "our" — meaning the small team behind Avista, not a single founder. Examples:
- ✅ "We look after the houses ourselves."
- ✅ "Our hand-drawn map of Sithonia."
- ✅ "Reach out — we'll write back the same day."
- ❌ "Michalis built the houses..."
- ❌ "Founder & host..."

---

# Section-by-section: Bellavista → Avista

## Section 1 · Hero

### Bellavista original
- Full-bleed video/photo hero
- Top tagline + main title "BELLAVISTA"
- 4.9 ★★★★★ | 25K+ Reviews badge
- "DISCOVER BELLAVISTA" CTA

### Avista replacement

**Background image:** `images/resort-01.jpg` (the stone villa with pool + waterfall, full bleed)

**Top tagline (small, uppercase, letter-spaced, in stone color):**
```
A SMALL FAMILY COLLECTION · SITHONIA · GREECE
```

**Main title:**
Use the original **Avista logo SVG** at large size (~200px tall on desktop). For SEO, an `<h1>` should still exist semantically but visually replaced by the SVG:
```html
<h1 class="sr-only">Avista Villas — Three private villas in Sithonia, Halkidiki, Greece</h1>
```

**Sub-line below logo (italic serif, max 520px, cream color):**
```
Three quiet houses in the pines, kept by us
for families who want Greece on their own terms.
```

**CTA button:**
```
Discover the collection →
```
*(anchors to #collection)*

**Remove entirely:** the star rating badge, the review count, any "4.9" or stars anywhere.

**Notes for the developer:**
- Add a charcoal gradient overlay (top-down, 0% to 50% opacity) for type readability
- Slow Ken Burns zoom on the hero image (subtle — 5% over 20s) is appropriate; *no* video background, *no* motion-blur
- Below the hero, a small scroll-down indicator in stone color

---

## Section 2 · About / Welcome

### Bellavista original
- "ABOUT" eyebrow
- "Welcome to Bellavista" title
- Body about gardens and luxury
- A vertical photo + a stat block

### Avista replacement

**Eyebrow:**
```
About
```

**Title:**
```
Welcome to Avista.
```

**Body (1–2 paragraphs in display serif, max 720px):**
```
Avista is a small collection of three private villas in
Sithonia, Halkidiki — set between the pines of the peninsula
and the clearest water in the Aegean. One contemporary stone
flagship, two warmer sister villas. Each house has its own
character. All three share the same promise: a quiet week,
a beautiful garden, and the kind of privacy that lets a
family actually be on holiday.

We look after the houses ourselves, because that's how
they stay this way.
```

**Right-side image:** Portrait orientation. Use `images/villa-terrace.webp` cropped vertically (the bougainvillea terrace) — it's our warmest, most "welcome" feeling photo.

**Stat block (replaces Bellavista's "5 Luxury Suites · 25 Years"):**

```
3            2018
THREE        FOUNDED
PRIVATE      IN
VILLAS       SITHONIA
```

*(Two stats only — keep it minimal. Numbers in display serif, labels in tiny letter-spaced uppercase.)*

**CTA button below the body:**
```
Read our story →
```
*(can link to the Sithonia Guide or About page later)*

---

## Section 3 · The Collection (replaces "Rooms / Suites")

### Bellavista original
- "STAY" eyebrow
- "Rooms & Suites" or "Our Rooms"
- Grid of 3–5 room cards (with names, descriptions, "From €X")
- Each room card has a photo, name, capacity icons, "View Details"

### Avista replacement

**Eyebrow:**
```
The Collection
```

**Title:**
```
One flagship, <em>two sisters.</em>
```

**Intro paragraph (italic display serif, max 680px):**
```
Three villas in two architectural styles. The Avista Private
Resort is our contemporary stone flagship — a statement house
in its own clearing. The Avista Villa and the Avista Superb
Villa are sister properties — same warm Greek architecture,
one with a pool, one without.
```

---

### Villa Card 1 — Avista Private Resort

**Image:** `images/resort-01.jpg` (or `images/resort-02.jpg` aerial — pick whichever feels stronger. Reserve the other for the villa detail page.)

**Eyebrow:**
```
THE FLAGSHIP · CONTEMPORARY STONE
```

**Villa name (large display serif):**
```
Avista Private Resort
```

**One-line tagline (italic):**
```
Architectural, secluded, the statement house.
```

**Short description (~50 words):**
```
Set in its own clearing of 2,500 square metres. Stone walls,
a long pergola, a pool with a quiet waterfall. Designed for
larger families who want space, polish, and a view toward
the distant Aegean.
```

**Amenity icons (use the Volume II icon set):**
- 🛏 Beds: 4 bedrooms
- 👥 Guests: Up to 8
- 🌊 Pool: Private
- 🌿 Grounds: 2,500 sqm

**CTA:**
```
Discover the Resort →
```
**Link:** `/villas/avista-private-resort`

---

### Villa Card 2 — Avista Villa

**Image:** `images/villa-living.webp` (the high-ceilinged living room with bougainvillea view) — or use `images/villa-pool-night.webp` if you want to lead with the atmospheric night pool. I'd recommend the living room shot for the homepage card; reserve the night pool for the detail page hero.

**Eyebrow:**
```
THE SISTER · TRADITIONAL GREEK · WITH POOL
```

**Villa name:**
```
Avista Villa
```

**Tagline:**
```
Warm, traditional, full of character.
```

**Short description:**
```
Double-height ceilings, terracotta floors, wicker and dark
wood. A private pool wrapped in olive trees, lit beautifully
for the evenings. The villa that feels like visiting Greek
family you didn't know you had.
```

**Amenity icons:**
- 🛏 Beds: 3 bedrooms
- 👥 Guests: Up to 6
- 🌊 Pool: Private
- 🌿 Garden: Olive grove

*(Verify exact bedroom counts and capacity with the OTA listings before launch.)*

**CTA:**
```
Discover the Villa →
```
**Link:** `/villas/avista-villa`

---

### Villa Card 3 — Avista Superb Villa

**Image:** `images/villa-terrace.webp` (the bougainvillea terrace) — and treat this card with a small "more photographs · summer 2026" note in the corner if you want to be transparent about the lighter photo coverage. Optional, but on-brand.

**Eyebrow:**
```
THE SISTER · TRADITIONAL GREEK · NO POOL
```

**Villa name:**
```
Avista Superb Villa
```

**Tagline:**
```
The quieter sister.
```

**Short description:**
```
Same warm Greek architecture as the Avista Villa, same garden
quality. Without a private pool — a more accessible choice
for families who'd rather walk to the beach, or for couples
and smaller groups who don't need a pool to make the week
feel like Greece.
```

**Amenity icons:**
- 🛏 Beds: 3 bedrooms
- 👥 Guests: Up to 6
- 🌿 Garden: Shared
- 🏖 Beach: Walking distance

**CTA:**
```
Discover the Superb Villa →
```
**Link:** `/villas/avista-superb-villa`

---

## Section 4 · Why Sithonia (replaces "Dining" — see note)

### Bellavista original
- "DINING" eyebrow
- A description of the on-site restaurant
- Photos of food/restaurant interior

### Avista replacement

We don't have a restaurant, so this section gets **completely repurposed** as a "Why Sithonia" section that previews the Sithonia Guide. This is a high-value section because Sithonia is the differentiator vs. competing villas in Mykonos / Crete / Cyclades.

**Eyebrow:**
```
Why Sithonia
```

**Title:**
```
The quieter middle leg <em>of Halkidiki.</em>
```

**Body (in two paragraphs, display serif 18–20px):**
```
Sithonia is the middle of three peninsulas that make up Halkidiki
— forested, unhurried, closer to how Greece felt twenty years ago
than how it looks on Instagram today. The water is the clearest
in the country. The beaches are mostly empty. The tavernas serve
fish that arrived at six in the morning.

It's a deliberate place to come. Most of our guests find us once
and then come back.
```

**Layout:** Three small "preview" cards linking to the Sithonia Guide subpages:

| Image suggestion | Card title | One-line note |
|---|---|---|
| Beach photo (use a stock-style sea image temporarily, or the aerial cropped) | **Beaches** | "Our top eight, ranked honestly — including the three our guests rarely find without us." |
| Taverna / food shot | **Tavernas** | "Five worth the drive. With approximate prices, what to order, whether to book." |
| Map / map illustration | **The Map** | "Hand-drawn, given to every guest. Beaches, tavernas, the baker, the back roads everyone misses." |

**CTA below the cards:**
```
Read the full Sithonia Guide →
```
**Link:** `/sithonia`

---

## Section 5 · Gallery

### Bellavista original
- A multi-image gallery, often masonry or grid layout
- Shows lifestyle / facility photos

### Avista replacement

**Eyebrow:**
```
The Houses · in Frame
```

**Title:**
```
A few quiet moments.
```

**Intro line (italic):**
```
Photographs from the gardens, the kitchens,
and the hour after sunset.
```

**Gallery layout:** Use a **6-image asymmetric grid** — varying sizes, editorial feel. NOT a uniform thumbnail grid.

**Image selection** (using current files; will expand once Drive sync happens):

| Slot | Image | Why |
|---|---|---|
| 1 (large, hero of grid) | `images/resort-02.jpg` | The aerial — most striking establishing shot |
| 2 (vertical) | `images/resort-04.jpg` | Stone bedroom interior |
| 3 (square) | `images/villa-living.webp` | Warm living room |
| 4 (square) | `images/villa-pool-night.webp` | Night pool, atmospheric |
| 5 (vertical) | `images/villa-terrace.webp` | Bougainvillea terrace |
| 6 (large) | `images/villa-garden-day.webp` | Garden detail |

**CTA below the grid:**
```
See all photographs →
```
*(Link to a `/gallery` page or to the individual villa pages)*

**Important:** Apply `filter: saturate(0.92) contrast(1.02)` to all gallery images via CSS, per Volume I §07 photography rules.

---

## Section 6 · Reviews / Words from guests (replaces "Testimonials")

### Bellavista original
- "TESTIMONIALS" eyebrow
- 3–4 customer review cards with star ratings, names, and quote text
- Carousel/slider

### Avista replacement

**Eyebrow:**
```
Words from guests
```

**Title:**
```
What our families say.
```

**Layout:** Three quoted reviews in a row, **NO star ratings, NO photos of guests, NO "4.9 ★★★★★"**. Each review is a pull-quote in display serif italic, with the guest's first name + month/year at the bottom.

**Review 1 (placeholder — replace with a real review from your OTA listings):**
```
"The kind of holiday we forgot existed. The garden, the
cicadas, and a phone number that always answered when we
needed something. We're already planning to come back."

— Sophie, July 2025
```

**Review 2:**
```
"We've stayed in many villas in Greece. The Private Resort
at Avista is the only one that felt like an actual home,
not a rental. The team thought of every detail without
being intrusive."

— Marcus, August 2024
```

**Review 3:**
```
"My children were barefoot for a week. They ate tomatoes
from the garden. They didn't ask for the iPad once. That
should tell you everything you need to know about
this place."

— Camille, June 2025
```

**Notes:**
- These are placeholder reviews in the right voice. Replace with **real, verified guest reviews** from your Booking.com / Airbnb / Vrbo listings.
- Each review should ideally be 2–3 sentences max. If a real review is longer, edit down (with the reviewer's permission if needed) — short pulls always read better than long ones.
- **No stars.** The brand voice doesn't use them.

**CTA (optional, small text below):**
```
Read more reviews on Booking.com →
```

---

## Section 7 · Story / Journal (replaces "Stories" or news section)

### Bellavista original
- "STORIES" or "JOURNAL" section
- A grid of 3 article cards with thumbnails, dates, titles

### Avista replacement

This becomes a **preview of the Sithonia Guide** — three article cards from the guide section, designed to drive SEO traffic and give returning visitors something to read.

**Eyebrow:**
```
The Sithonia Journal
```

**Title:**
```
Notes from <em>the peninsula.</em>
```

**Three article cards:**

**Card 1**
- Image: a beach photo
- Date: a recent month (e.g. `April 2026`)
- Title: `The eight beaches of Sithonia, ranked honestly`
- Excerpt: `Kavourotrypes is the famous one. It earns the reputation, but only before mid-July. Here's how we think about the rest...`
- Link: `/journal/best-beaches-sithonia`

**Card 2**
- Image: a taverna / food shot
- Date: `March 2026`
- Title: `Where we actually eat in Sithonia`
- Excerpt: `Five tavernas worth the drive — from the seafood shack in Sárti to the family taverna up the hill in Neos Marmaras...`
- Link: `/journal/sithonia-tavernas`

**Card 3**
- Image: a quieter, atmospheric shot
- Date: `February 2026`
- Title: `Why September is the best month to come`
- Excerpt: `The sea is still warm, the crowds have gone, the figs are at their best. A quiet case for shoulder-season Sithonia...`
- Link: `/journal/september-sithonia`

**CTA below the cards:**
```
All journal entries →
```

---

## Section 8 · Reach out / Final CTA (replaces "Reservations / Book Now")

### Bellavista original
- "RESERVATIONS" section
- Booking widget (date pickers, guest count, "BOOK NOW")
- Phone number / contact info

### Avista replacement

**This is the most important section to change.** Bellavista funnels users into an instant-book widget. Avista funnels them into a **conversation**.

**Eyebrow:**
```
Reach out
```

**Title:**
```
Plan a quiet week.
```

**Body (in display serif italic, max 580px, centered):**
```
Tell us when you're hoping to come. We'll write back personally
— usually the same day, always within twenty-four hours. No
automated quotes, no booking widgets. Just a conversation.
```

**Two-column layout below:**

**Left column — the form:**

```
Your name             [text]
Email                 [email]
Approximate dates     [text — e.g. "First two weeks of July"]
Number of guests      [text — adults / children]
Which villa?          [select: Avista Private Resort /
                       Avista Villa / Avista Superb Villa /
                       Not sure yet]
Anything else?        [textarea]

[ Send → ]
```

**Right column — direct contact:**

```
Or, more directly:

Email:    hello@avistavillas.com
Phone:    +30 ___ ___ ____
WhatsApp: +30 ___ ___ ____

Hours: We answer 9am–9pm Athens time,
seven days a week in season.
```

**Below both columns (small italic, centered):**
```
welcome.
```

**Form behavior:**
- POST to `/api/contact` (placeholder endpoint)
- Server sends submission as plain-text email to `hello@avistavillas.com`
- After submit, show a quiet success state: *"Got it. We'll write back shortly."* — no auto-confirmation email needed for the first version
- Optional: forward to a CRM or a tool like Plumb / Beehiiv later

---

## Section 9 · Footer

### Bellavista original
- 4-column layout: brand info, sitemap, contact, social
- Newsletter signup
- Legal links

### Avista replacement

**Top row (large brand mark, centered):**
- Use the Avista logo SVG at large size (~80px tall)

**Tagline below logo (italic serif, stone-deep color):**
```
Three quiet houses in the pines of Sithonia.
```

**Three-column section below:**

**Column 1 — Contact:**
```
Avista Villas
Sithonia, Halkidiki · Greece
40.1056° N, 23.8642° E

hello@avistavillas.com
+30 ___ ___ ____
```

**Column 2 — Sitemap:**
```
The Collection
  Avista Private Resort
  Avista Villa
  Avista Superb Villa

Sithonia Guide
  Beaches
  Tavernas
  The Map

About
Journal
Reach out
```

**Column 3 — Stay in touch:**
```
Instagram   @avistavillas

Newsletter
[ email field ]   [ Sign up → ]

We send one quiet email per season —
when bookings open, when something
new is worth telling you about.
That's all.
```

**Bottom strip (thin, between rules):**
```
© 2026 Avista Villas       Privacy · Terms · Cookies
```

**Notes:**
- **Remove Bellavista's gold/yellow icon styling** — all footer elements in charcoal or stone-deep
- Newsletter signup is on-brand for Avista *only* if you commit to the "one email per season" promise. If you can't, remove this whole column and put just the social link there.

---

## Section 10 · Page `<head>` SEO

```html
<title>Avista Villas — Three private villas in Sithonia, Halkidiki, Greece</title>

<meta name="description" content="A small collection of three private villas in the pines of Sithonia, Halkidiki. Quiet, family-run, designed for guests who want Greece on their own terms.">

<meta property="og:title" content="Avista Villas — Sithonia, Halkidiki">
<meta property="og:description" content="Three quiet houses in the pines, kept by us for families who want Greece on their own terms.">
<meta property="og:image" content="/images/resort-01.jpg">
<meta property="og:type" content="website">
<meta property="og:url" content="https://avistavillas.com">

<meta name="twitter:card" content="summary_large_image">

<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="canonical" href="https://avistavillas.com">
```

**Schema.org JSON-LD (Site + each villa as separate entity):**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://avistavillas.com/#org",
      "name": "Avista Villas",
      "description": "A small collection of three private villas in Sithonia, Halkidiki, Greece.",
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
      },
      "containsPlace": [
        { "@type": "Accommodation", "name": "Avista Private Resort" },
        { "@type": "Accommodation", "name": "Avista Villa" },
        { "@type": "Accommodation", "name": "Avista Superb Villa" }
      ]
    }
  ]
}
```

---

# Animation & micro-interactions

Bellavista does some of these well; some it does too much. Keep:
- **Hero fade-in** on page load (slow, 1.2s)
- **Scroll-triggered fade-ups** on section entries (subtle — 20px translation)
- **Image hover lightening** on villa and journal cards
- **Marquee** if Bellavista has one (slow, words from the brand vocab list)

Remove or reduce:
- **No video backgrounds**
- **No parallax** (Bellavista uses it; it doesn't suit Avista)
- **No custom cursors**
- **No autoplay sound** (Bellavista occasionally does)
- **No motion-blur effects**

---

# Image asset mapping (current state)

| Section | Image used | File path | Status |
|---|---|---|---|
| Hero | The Resort pool with waterfall | `images/resort-01.jpg` | ✓ Have |
| About sidebar | Bougainvillea terrace (vertical crop) | `images/villa-terrace.webp` | ✓ Have |
| Collection · Resort card | Aerial of the Resort | `images/resort-02.jpg` | ✓ Have |
| Collection · Villa card | Living room | `images/villa-living.webp` | ✓ Have |
| Collection · Superb Villa card | Terrace | `images/villa-terrace.webp` | ⚠ Reused — needs unique shot |
| Why Sithonia · 3 cards | Beach / taverna / map mockup | All three | **Need to source** |
| Gallery (6 slots) | Mixed | All current | ✓ Have for 6 slots |
| Reviews | None (text-only) | — | ✓ |
| Journal cards (3) | Beach / taverna / atmospheric | All three | **Need to source** |

**Photo gaps to fill before launch:**
1. A unique exterior shot of the Avista Superb Villa (for its card)
2. 3 Sithonia images: a beach shot, a taverna shot, a hand-drawn map photographed flat-lay
3. A founder portrait — *removed from this version, no longer needed*

The Drive has 50+ Avista Private Resort photos available for the gallery and detail pages. We can source from there once they're synced into the project.

---

---

# THE CODEX PROMPT

Paste the block below into Codex / Claude Code / Cursor. Assumes you've cloned the Bellavista template and have this content deck + the brand guides accessible in the project.

---

```
You are converting the Bellavista Framer template
(https://bellavista.framer.media/) into the homepage and contact page
for Avista Villas — a small collection of three private villas in
Sithonia, Halkidiki, Greece.

Bellavista is a hotel template. Avista is NOT a hotel — it is a
small collection of three private villas, run by a small team. This
distinction must show through in every word and every image. The
Bellavista template's structure is useful; its voice and styling
must be heavily rewritten to match the Avista brand.

CONTEXT FILES (read these in order):
1. avista-bellavista-deck.md       — section-by-section content (PRIMARY)
2. avista_style_guide.html         — Volume I — brand foundation
3. avista_assets_templates.html    — Volume II — templates & icons

YOUR TASK:
Transform the Bellavista homepage into the Avista homepage and add
a separate contact page. Keep Bellavista's structural patterns
(hero, about, room cards, gallery, reviews, stories, footer). Replace
all content (text, images, colors, fonts, links) per the deck.

CRITICAL RULES — read carefully:

1. STRUCTURE — Use Bellavista's section order, but apply the deck's
   section mappings. Specifically:
   - "Rooms / Suites" → "The Collection" (3 villa cards)
   - "Dining" → "Why Sithonia" (3 preview cards linking to guide)
   - "Testimonials" → "Words from guests" (NO star ratings)
   - "Reservations / Book Now" → "Reach out" (contact form, no widget)

2. COPY — Use the EXACT text from avista-bellavista-deck.md. Do not
   paraphrase, do not embellish, do not invent. Every section in the
   deck has its copy spelled out.

3. VOICE — Never use any of these words: luxury, amenities, package,
   deal, amazing, stunning, unforgettable, paradise, dream,
   world-class, top-rated, resort-style, property, unit, BOOK NOW,
   founder. If Bellavista's source has any of these, replace them.

4. STAR RATINGS — Bellavista has "4.9 ★★★★★" with 25K+ reviews.
   REMOVE EVERY STAR. Reviews appear as quoted prose with first name
   + month/year. No numerical ratings anywhere.

5. TYPOGRAPHY — Replace all fonts:
   - Display: Cormorant Garamond (300, 400, 400i, 500)
   - Body:    Inter (300, 400, 500)
   Load from Google Fonts. Use SENTENCE CASE for headlines, NOT
   Bellavista's UPPERCASE. Italic = emphasis (never bold).

6. COLOR — Replace Bellavista's gold/yellow palette entirely. Use
   only the tokens at the top of avista-bellavista-deck.md. Hero
   accent is honey stone (#C7B299). Backgrounds: cream (#F5EFE4),
   bone (#FAF6EE). Text: charcoal (#2B2A27). Accents (olive,
   terracotta, aegean) used sparingly per Volume I §04 (40/28/15/8/5/4).

7. LOGO — Use the Avista SVG logo as provided. Do NOT recreate it
   with Dancing Script or any web font. Apply Volume I §06 clear-space
   and minimum-size rules.

8. IMAGES — All currently in /images/. Apply
   filter: saturate(0.92) contrast(1.02) to all photography per
   Volume I §07.

9. ANIMATION — Keep Bellavista's slow fade-ins, scroll-triggered
   fade-ups, and image-hover lightening. REMOVE: video backgrounds,
   parallax, custom cursors, autoplay audio, motion-blur, lens flares.

10. CONTACT FORM — Build the contact section per §8 of the deck.
    POST to /api/contact. Server-side: send the submission as
    plain-text email to hello@avistavillas.com. No CRM, no booking
    widget, no calendar integration in v1.

11. SEO — Insert the <head> tags and JSON-LD from §10 of the deck.

12. ACCESSIBILITY — Every image gets descriptive alt text. Color
    contrast must pass AA. h1 must be present semantically even if
    visually replaced by the SVG logo (use sr-only class).

13. RESPONSIVE — Mobile-first. Villa cards stack vertically on
    mobile. Hero typography scales down via clamp(). Form remains
    usable.

14. "WE" VOICE — Throughout, the brand uses "we" and "our" — a
    small team, not a single founder. There is NO founder portrait,
    NO "Founder & Host" label, NO individual name in the brand voice
    sections. If Bellavista has a "Meet the chef" or "Our team"
    section with portraits, repurpose as a textual "About us" or
    remove entirely.

DELIVERABLES:
- /index.html (or /pages/index.tsx)
- /contact.html (or /pages/contact.tsx)
- /styles/avista.css (token overrides in one place)
- Updated /public/images/
- Updated <head> with proper SEO

WHEN FINISHED, output a summary of:
1. Files modified
2. Files created
3. Anything in the deck you couldn't implement and why
4. Any brand-rule conflicts with Bellavista's source and how you
   resolved them
5. Photo gaps that prevent the page from looking complete
```

---

## Manual checklist after the first Codex run

The most common things to verify yourself before pushing live:

1. **No gold or yellow anywhere** — Bellavista's palette will leak through CSS variables. Search the codebase for `#FFD` `#FBC` `gold` `yellow` and replace.
2. **No "BOOK NOW" buttons** — search for `BOOK NOW`, `Book Now`, `Reserve Now`, replace with `Reach out` or `Get in touch`.
3. **No stars** — search for `★`, `stars`, `rating`, `4.9`, `4.8`, remove all instances.
4. **Headlines in sentence case** — Codex will quietly UPPERCASE things to match Bellavista. Spot-check every section title.
5. **The Avista logo is SVG, not Dancing Script** — Bellavista uses uppercase wordmarks; the Avista logo is its handwritten script. Make sure the actual SVG file is being served, not a font fallback.
6. **The "we / our" voice survives** — Codex may slip into "the property" or "the resort". Find-replace once.
7. **Form submits correctly** — test with a dummy entry. Make sure the email reaches `hello@avistavillas.com`.
8. **Reviews have no ratings** — verify each review block. No "★★★★★" hiding anywhere.
9. **Footer newsletter signup** — only if you commit to actually sending one. Otherwise remove.
10. **Mobile typography** — open on a real phone. The hero italic sub-line tends to look cramped — adjust max-width if so.

You've got the deck and the prompt. Run it, review against the checklist, iterate.
