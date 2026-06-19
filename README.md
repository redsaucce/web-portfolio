# Alex Chen — Web Portfolio

A modern, responsive, light-themed personal portfolio built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

---

## Tech Stack

| Tool            | Version / Notes                       |
| --------------- | ------------------------------------- |
| React           | 19.x                                  |
| Vite            | 7.x                                   |
| TypeScript      | 5.x                                   |
| Tailwind CSS    | 4.x (using `@theme` token system)     |
| Lucide React    | Icon library                          |
| Fonts           | Inter (sans), JetBrains Mono (mono)   |

---

## Color System

### Primary — Purple

| Token              | Hex       | Usage                                      |
| ------------------- | --------- | ------------------------------------------ |
| `primary-50`        | `#faf5ff` | Lightest tint, soft backgrounds             |
| `primary-100`       | `#f3e8ff` | Card backgrounds, gradient wash, fallbacks  |
| `primary-200`       | `#e9d5ff` | Borders, icon backgrounds, decorative blurs |
| `primary-300`       | `#d8b4fe` | —                                          |
| `primary-400`       | `#c084fc` | —                                          |
| `primary-500`       | `#a855f7` | Accent highlights, gradient stops           |
| `primary-600`       | `#9333ea` | CTAs, buttons, active states, icon fills    |
| `primary-700`       | `#7e22ce` | Gradient text, navbar brand                 |
| `primary-800`       | `#6b21a8` | Navbar brand gradient start                 |
| `primary-900`       | `#581c87` | —                                          |

### Accent — Violet / Lavender

| Token          | Hex       | Usage                            |
| -------------- | --------- | -------------------------------- |
| `accent-400`   | `#c4b5fd` | Decorative blurs, gradients      |
| `accent-500`   | `#a78bfa` | Gradient text stops, highlights  |
| `accent-600`   | `#8b5cf6` | Navbar brand gradient end, text  |

### Supporting Tailwind Colors Used

| Color Family   | Usage                                                         |
| -------------- | ------------------------------------------------------------- |
| `slate-*`      | Body text, labels, borders, muted UI, separators              |
| `violet-*`     | Card borders, icon backgrounds, hero card accents             |
| `purple-*`     | Skills card icon backgrounds                                  |
| `fuchsia-*`    | Hero card icon backgrounds, metric icon backgrounds           |
| `green-500`    | Achievement checkmarks, success states                        |
| `yellow-500`   | Certification award icon                                      |
| `white`        | Card backgrounds, inputs, page base                           |

---

## Typography

### Fonts

| Font           | Usage                         |
| -------------- | ----------------------------- |
| Inter          | All body, headings, UI        |
| JetBrains Mono | Period badges in Experience   |

### Gradient Text Styles

| Class               | Gradient                                              | Usage                          |
| -------------------- | ----------------------------------------------------- | ------------------------------ |
| `.gradient-text`     | `primary-700 → accent-500`                            | Navbar brand, footer brand     |
| `.gradient-text-warm`| `primary-700 → #c026d3 → accent-500` (animated)      | Hero headline accent, eyebrows |

---

## Component Color Usage

### Navbar

| Element              | Default State                                                        | Hover State                            | Active State              |
| -------------------- | -------------------------------------------------------------------- | -------------------------------------- | ------------------------- |
| Brand name           | `bg-gradient-to-r from-primary-800 via-primary-700 to-accent-600`    | —                                      | —                         |
| Nav links            | `text-slate-500`                                                     | `text-slate-900`                       | `text-primary-600`        |
| Nav underline        | hidden                                                               | gradient `primary-500 → accent-500`    | gradient (full width)     |
| CTA button           | `bg-primary-600 text-white`                                          | `bg-primary-500 shadow-primary-600/25` | —                         |
| Scroll background    | `bg-white/0`                                                         | —                                      | `bg-white/78 backdrop-blur-xl shadow-purple` |
| Mobile menu bg       | `bg-white/95 backdrop-blur-lg`                                       | —                                      | —                         |
| Mobile active link   | `text-primary-600 bg-primary-50`                                     | —                                      | —                         |
| Mobile inactive link | `text-slate-600`                                                     | `text-slate-900 bg-slate-50`           | —                         |
| Hamburger icon       | `text-slate-600`                                                     | `text-slate-900`                       | —                         |

### Hero

| Element                | Color / Class                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| Section background     | `bg-gradient-to-br from-slate-50 via-white to-primary-50`        |
| Decorative blobs       | `bg-primary-200/30`, `bg-accent-400/20`, `bg-violet-200/20`     |
| Left gradient wash     | `from-primary-100/80 via-primary-50/60 to-transparent`           |
| Headline text          | `text-slate-900`                                                 |
| Headline accent        | `.gradient-text-warm` (animated purple gradient)                 |
| Lead / subtitle text   | `text-slate-500`                                                 |
| Lead highlighted words | `text-primary-600`, `text-accent-600`, `text-slate-800`          |
| Primary CTA            | `bg-primary-600 text-white` → hover: `bg-primary-500`           |
| Secondary CTA          | `border-slate-300 text-slate-700` → hover: `border-primary-400 text-primary-600 bg-primary-50` |
| Skill card borders     | `border-violet-300` → hover: `border-violet-400`                |
| Skill card backgrounds | `bg-white/80 backdrop-blur-sm`                                   |
| Card icon backgrounds  | `bg-primary-50`, `bg-violet-50`, `bg-purple-50`, `bg-fuchsia-50`|
| Card icon colors       | `text-primary-600`, `text-violet-600`, `text-purple-600`, `text-fuchsia-600` |
| Skill tag badges       | `bg-slate-50 text-slate-600 border-slate-100`                   |
| Metric icon bgs        | `bg-violet-50`, `bg-primary-50`, `bg-fuchsia-50`                |
| Metric icon borders    | `border-violet-200`, `border-primary-200`, `border-fuchsia-200` |
| Metric icon fills      | `text-violet-500`, `text-primary-600`, `text-fuchsia-600`       |
| Metric title text      | `text-slate-800`                                                 |
| Metric subtitle text   | `text-slate-400`                                                 |

### Projects

| Element                | Color / Class                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| Section background     | `bg-white`                                                       |
| Card border            | `border-2 border-violet-300` → hover: `border-violet-400`       |
| Card background        | `bg-white`                                                       |
| Image fallback bg      | `bg-gradient-to-br from-primary-100 via-violet-50 to-white`     |
| Fallback icon circle   | `bg-gradient-to-br from-primary-600 to-accent-500`              |
| Fallback icon          | `text-white` (ImageOff)                                          |
| Fallback text          | `text-slate-800`                                                 |
| Desktop hover overlay  | `bg-slate-900/35 backdrop-blur-sm`                               |
| Live Demo button       | `bg-primary-600 text-white` → hover: `bg-primary-500`           |
| GitHub button          | `bg-white text-slate-700 border-violet-300`                      |
| Card title             | `text-slate-900`                                                 |
| Card description       | `text-slate-500`                                                 |
| Impact text            | `text-slate-600 italic border-l-2 border-primary-400`           |
| Toggle button          | `text-primary-600` → hover: `text-primary-700`                  |
| Tech tags              | `bg-primary-50 text-primary-700 border-primary-200`             |
| Mobile CTA (Live Demo) | `bg-primary-600 text-white`                                     |
| Mobile CTA (GitHub)    | `bg-white border-violet-300 text-slate-700`                     |

### Skills

| Element                | Color / Class                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| Section background     | `bg-gradient-to-br from-primary-50 via-white to-violet-50`      |
| Card border            | `border-2 border-violet-300` → hover: `border-violet-400`       |
| Card background        | `bg-white`                                                       |
| Icon containers        | `bg-primary-50`, `bg-violet-50`, `bg-purple-50`, `bg-fuchsia-50`|
| Icon container borders | `border-primary-200`, `border-violet-200`, `border-purple-200`, `border-fuchsia-200` |
| Icon colors            | `text-primary-600`, `text-violet-600`, `text-purple-600`, `text-fuchsia-600` |
| Card title             | `text-slate-900`                                                 |
| Card summary           | `text-slate-500`                                                 |
| Strength label         | `text-slate-400` (uppercase)                                     |
| Strength bullets       | `bg-primary-500` (dot), `text-slate-700` (text)                  |
| Footer divider         | `border-t border-slate-200`                                      |
| Footer label           | `text-slate-400` (uppercase)                                     |
| Footer badges          | `bg-primary-100 text-primary-700`                                |

### About

| Element                | Color / Class                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| Section background     | `bg-white`                                                       |
| Fallback image bg      | `bg-gradient-to-br from-primary-100 via-violet-50 to-white`     |
| Fallback image border  | `border-2 border-violet-300`                                     |
| Fallback overlay blurs | `bg-primary-200/45`, `bg-accent-400/20`                          |
| Avatar icon circle     | `bg-gradient-to-br from-primary-600 to-accent-500`              |
| Avatar icon            | `text-white` (User)                                              |
| Caption name           | `text-slate-800`                                                 |
| Caption title          | `text-slate-500`                                                 |
| Bio text               | `text-slate-600`                                                 |
| Toggle button          | `text-primary-600` → hover: `text-primary-700`                  |
| Metrics numbers        | `text-primary-600`                                               |
| Metrics labels         | `text-slate-500`                                                 |
| Metrics separators     | `sm:border-r border-slate-200`                                   |

### Experience

| Element                | Color / Class                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| Section background     | `bg-gradient-to-br from-violet-50 via-white to-primary-50`      |
| Card border            | `border-2 border-violet-300` → hover: `border-violet-400`       |
| Card background        | `bg-white`                                                       |
| Work icon container    | `bg-primary-50 text-primary-600 border-primary-200`             |
| Education icon         | `bg-violet-50 text-violet-600 border-violet-200`                |
| Period badge           | `text-slate-400 bg-slate-50 border-slate-200` (mono font)       |
| Card title             | `text-slate-900` → hover: `text-primary-600`                    |
| Organization           | `text-primary-600`                                               |
| Description            | `text-slate-500`                                                 |
| Achievement check      | `text-green-500`                                                 |
| Achievement text       | `text-slate-600`                                                 |
| Cert outer card border | `border-2 border-violet-300`                                     |
| Cert inner card border | `border-2 border-violet-200` → hover: `border-violet-300`       |
| Cert title             | `text-slate-900`                                                 |
| Cert issuer/date       | `text-slate-500`, separator: `text-slate-300`                    |
| Award icon             | `text-yellow-500`                                                |

### Contact

| Element                | Color / Class                                                    |
| ---------------------- | ---------------------------------------------------------------- |
| Section background     | `bg-white`                                                       |
| Email icon container   | `bg-primary-50 border-primary-200 text-primary-600`             |
| Email text             | `text-slate-700` → hover: `text-primary-600`                    |
| Location icon          | `bg-primary-50 border-primary-200 text-primary-600` (MapPin)    |
| Location text          | `text-slate-700`                                                 |
| Social GitHub          | `text-[#181717]` → hover: `text-primary-600 border-primary-300` |
| Social LinkedIn        | `text-[#0A66C2]` → hover: `text-primary-600 border-primary-300` |
| Social Twitter/X       | `text-[#111111]` → hover: `text-primary-600 border-primary-300` |
| Quote card             | `bg-primary-50 border-l-4 border-primary-500`                   |
| Quote text             | `text-slate-600 italic`                                          |
| Form card bg           | `bg-gradient-to-br from-primary-100 via-violet-50 to-white`     |
| Form card border       | `border-2 border-violet-300`                                     |
| Form card shadow       | `shadow purple-tinted`                                           |
| Labels                 | `text-slate-700`                                                 |
| Inputs                 | `bg-white border-slate-300` → focus: `border-primary-500 ring-primary-500` |
| Placeholders           | `text-slate-400`                                                 |
| Submit button          | `bg-primary-600 text-white` → hover: `bg-primary-500`           |
| Success icon           | `text-green-500` (CheckCircle2)                                  |
| Success title          | `text-slate-900`                                                 |
| Success text           | `text-slate-500`                                                 |

### Footer

| Element              | Color / Class                                                    |
| -------------------- | ---------------------------------------------------------------- |
| Footer background    | `bg-gradient-to-b from-primary-50 via-violet-50 to-slate-50`    |
| Top glow             | `from-primary-200/35 via-accent-400/10 to-transparent blur-2xl` |
| Brand initials       | `.gradient-text`                                                 |
| Divider              | `text-slate-300`                                                 |
| Attribution text     | `text-slate-500`                                                 |
| Copyright text       | `text-slate-500`                                                 |

---

## Shared Components

### SectionHeader

Used by: Projects, Skills, About, Experience, Contact

| Part         | Responsive Classes                                              | Style                           |
| ------------ | --------------------------------------------------------------- | ------------------------------- |
| Wrapper      | `text-center mb-12`                                              | centered, 3rem bottom margin    |
| Eyebrow      | `text-sm sm:text-base font-semibold tracking-[0.24em] uppercase gradient-text` | gradient uppercase label |
| Title        | `text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4`| responsive heading              |
| Description  | `text-slate-500 text-sm sm:text-base lg:text-lg leading-relaxed`| responsive supporting text      |

### ImageFallback (`src/components/ui/image-fallback.tsx`)

Used by: Projects, About

Reusable fallback component with two display modes:
- **`mode="project"`** → centered “Image unavailable” placeholder
- **`mode="about"`** → avatar-style fallback with caption support

Supported props:
- `variant?: number`
- `mode?: "project" | "about"`
- `title?: string`
- `subtitle?: string`

| Part                | Style / Behavior                                                   |
| ------------------- | ------------------------------------------------------------------ |
| Base background     | `bg-gradient-to-br from-primary-100 via-violet-50 to-white`        |
| Decorative orbs     | Variant-based purple / violet / fuchsia blurred circles            |
| Project mode icon   | `ImageOff` with `text-white` inside gradient circle                |
| Project mode label  | `Image unavailable` (`text-slate-800`)                             |
| About mode icon     | `User` with `text-white` inside gradient circle                    |
| About mode caption  | bottom-left on desktop, bottom-centered on mobile                  |
| About mode content  | `title` + `subtitle` rendered as caption text                      |

---

## Responsive Design

### Breakpoints

| Breakpoint | Prefix | Min Width |
| ---------- | ------ | --------- |
| Mobile     | (base) | 0px       |
| Tablet     | `sm`   | 640px     |
| Desktop    | `md`   | 768px     |
| Large      | `lg`   | 1024px    |
| XL         | `xl`   | 1280px    |

### Navbar

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | hamburger menu, stacked links, full-width CTA              |
| Desktop (`md`)  | 3-zone layout: brand left, links center, CTA right         |

### Hero

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | single column, text centered, full-width CTAs              |
| Tablet (`sm`)   | text centered, CTAs side by side, metrics 3-col grid       |
| Desktop (`lg`)  | 2-column grid: text left-aligned, staggered cards right    |
| Height          | `min-h-dvh` (dynamic viewport height)                      |

### Projects

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | 1 column, mobile action buttons visible                    |
| Tablet (`md`)   | 2 columns                                                  |
| Desktop (`lg`)  | 3 columns (1×3 grid)                                       |
| Image overlay   | Desktop: hover-only labeled buttons. Mobile: visible CTAs  |

### Skills

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | 1 column                                                   |
| Desktop (`md`)  | 2×2 grid, centered within `max-w-5xl`                      |

### About

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | stacked: fallback image → bio → stats                      |
| Desktop (`lg`)  | 2-column grid (image left, bio right), stats full-width    |
| Fallback caption| Mobile: bottom-centered. Desktop: bottom-left              |
| Grid alignment  | `items-start` (prevents layout shift on toggle)            |

### Experience

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | 1 column stacked                                           |
| Desktop (`md`)  | 2×2 grid                                                   |
| Certifications  | full-width card below grid, stacked items                  |

### Contact

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | stacked: info panel → form                                 |
| Desktop (`lg`)  | 5-column grid: info `col-span-2`, form `col-span-3`       |
| Form width      | Mobile: `w-full`. Desktop: narrowed via `lg:px-16`         |
| Submit button   | Mobile: full-width. Desktop: auto-width                    |

### Footer

| Breakpoint      | Layout                                                     |
| --------------- | ---------------------------------------------------------- |
| Mobile          | stacked, centered                                          |
| Desktop (`md`)  | horizontal row, `justify-between`                          |

---

## Card Hover Behavior

All major cards share the same consistent hover treatment:

```
border-2 border-violet-300
hover:border-violet-400
hover:shadow-lg
transition-all duration-700
```

Applied to:
- Hero staggered skill cards
- Projects cards
- Skills cards
- Experience cards
- Experience certification outer card

**No translate motion** is used on hover.

Certification **inner cards** use a lighter purple border:
```
border-2 border-violet-200
hover:border-violet-300
```

---

## Animations & Transitions

| Animation            | Usage                                    | Duration       |
| -------------------- | ---------------------------------------- | -------------- |
| Scroll fade-in       | All sections via `useScrollAnimation`    | 700ms ease-out |
| Hero entrance        | Text + cards stagger                     | 1000ms         |
| Gradient text shift  | Hero headline accent, section eyebrows   | 4s infinite    |
| Float                | Decorative blobs                         | 3s ease-in-out |
| Nav link underline   | Active/hover state                       | 300ms ease     |
| Collapsible toggle   | About bio, project impact                | 500ms ease     |
| Form success reset   | Contact form                             | 2000ms delay   |
| Navbar scroll bg     | Background + blur + shadow               | 300ms ease-out |

---

## Content Container Widths

| Section     | Container Width |
| ----------- | --------------- |
| Navbar      | `max-w-7xl`     |
| Hero        | `max-w-7xl`     |
| Projects    | `max-w-7xl`     |
| Skills      | `max-w-7xl` (cards grid: `max-w-5xl`) |
| About       | `max-w-7xl`     |
| Experience  | `max-w-7xl`     |
| Contact     | `max-w-7xl`     |
| Footer      | `max-w-7xl`     |

---

## Section Vertical Spacing

All non-hero sections use:
```
py-4 sm:py-12
```

Hero uses viewport-height centering:
```
min-h-dvh flex items-center
```

Global scroll padding:
```css
scroll-padding-top: 5rem;
```
