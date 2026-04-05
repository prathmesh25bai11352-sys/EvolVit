# EvolVIT — Official Website

> Beyond the Syntax. VIT Bhopal's premier tech collective.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/evolvit/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   └── page.tsx            # Main page composition
├── components/
│   ├── effects/
│   │   ├── CustomCursor.tsx      # Cyan dot + trailing ring
│   │   ├── ParticleBackground.tsx # Neural constellation canvas
│   │   ├── ScrollProgress.tsx    # Top progress bar
│   │   ├── MatrixRain.tsx        # Easter egg matrix effect
│   │   └── EasterEgg.tsx         # Keyboard listener ("evolve")
│   ├── ui/
│   │   ├── Navbar.tsx            # Fixed nav + ⌘K trigger
│   │   ├── CommandPalette.tsx    # Retro terminal search
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx       # Full-screen hero
│       ├── AboutSection.tsx      # Two-column + server rack
│       ├── PillarsSection.tsx    # 3 interactive module cards
│       ├── EventsSection.tsx     # Git commit-style events + countdown
│       ├── StatsSection.tsx      # Animated count-up stats
│       ├── TeamSection.tsx       # Team grid with glitch effect
│       ├── GallerySection.tsx    # Bento grid + lightbox
│       └── CTASection.tsx        # Breathing glow CTA
├── lib/
│   └── utils.ts            # Data constants + cn() utility
└── styles/
    └── globals.css          # Global styles + custom animations
```

## Customization

### Update Team Members
Edit `src/lib/utils.ts` → `TEAM` array. Add real photo paths once you have assets.

### Update Events
Edit `src/lib/utils.ts` → `EVENTS` array. Set `targetDate` on the next upcoming event for the countdown.

### Add Real Gallery Photos
Replace the icon placeholders in `GallerySection.tsx` with `<Image>` components pointing to your photos.

### Update Stats
Edit `src/lib/utils.ts` → `STATS` array.

## Secret Features

| Feature | How to trigger |
|---|---|
| Command Palette | `Ctrl+K` / `Cmd+K` or click ⌘K in nav |
| Matrix Rain | Type `evolve` anywhere on the page |
| Matrix via Palette | Open palette → `/evolve` |

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the .next folder or connect your git repo
```

## License

© 2026 EvolVIT. All Rights Reserved.
