# PCH Website

Modern sweepstakes landing site for **Publisher's Clearing House** — built as a standalone project separate from edwincastro.

## Location

```
c:\Users\Kaelo\pch-website
```

This folder is entirely outside the edwincastro project and can be moved anywhere independently.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Nodemailer** for entry form email delivery (Zoho SMTP)

## Getting Started

```bash
cd c:\Users\Kaelo\pch-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Zoho credentials:

```
ZOHO_USER=your-email@yourdomain.com
ZOHO_PASS=your-zoho-app-password
TO_EMAIL=entries@yourdomain.com
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, prizes, winners, stats, video, FAQ |
| `/enter` | **Main conversion** — individual sweepstakes entry form |
| `/winners` | Winner gallery |
| `/about` | About PCH |
| `/faq` | Full FAQ page |
| `/rules` | Official Rules |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

## Adding Your Own Media

### Videos (local files — no YouTube required)

1. Drop `.mp4` / `.webm` / `.mov` files into `public/videos/`
2. Optional thumbnails → `public/videos/posters/`
3. List them in `src/data/videos.ts`:

```ts
{
  id: '1',
  title: 'Prize Patrol Surprise',
  src: '/videos/my-clip.mp4',           // file in public/videos/
  poster: '/videos/posters/my-clip.jpg' // optional thumbnail
}
```

### Winner photos (two types)

| Folder | Use for |
|--------|---------|
| `public/winners/checks/` | Winners **holding their big checks** |
| `public/winners/testimonials/` | **Thank-you** messages / gratitude photos |

1. Save your images in the matching folder
2. Update `src/data/winners.ts` — `checkWinners` or `testimonialWinners` arrays

```ts
{
  id: 'check-4',
  type: 'check',
  name: 'Jane D.',
  location: 'Austin, TX',
  prize: '$100,000',
  date: 'March 2026',
  quote: '...',
  image: '/winners/checks/check-04.jpg',
}
```

### Other content

- **Prizes**: Edit `src/data/prizes.ts`
- **FAQ**: Edit `src/data/faq.ts`
- **Brand colors**: Adjust CSS variables in `src/app/globals.css`

## Build

```bash
npm run build
npm start
```
