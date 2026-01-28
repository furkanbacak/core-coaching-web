# Core Coaching & Training Solutions Website

A modern, minimal, professional coaching website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal, and conversion-oriented design with premium aesthetics
- **Bilingual Support**: Turkish (default) and English with easy language toggle
- **Single-Page Landing**: Smooth scroll navigation with hero section and key sections
- **Blog System**: Clean blog listing and individual article pages with SEO optimization
- **Responsive**: Fully mobile-responsive design
- **Fast Performance**: Optimized for speed and performance
- **Future-Proof**: Easy to update and maintain

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Internationalization
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
core-coaching-web/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Landing page
│   │   └── blog/          # Blog pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── CoachingFocus.tsx
│   ├── References.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── messages/              # Translation files
│   ├── tr.json           # Turkish translations
│   └── en.json           # English translations
├── images/                # Image assets
└── public/                # Static files
```

## Customization

### Adding Content

- **Translations**: Edit files in `messages/` directory
- **Blog Posts**: Update the `blogPosts` array in `app/[locale]/blog/page.tsx`
- **References**: Update the `references` array in `components/References.tsx`

### Styling

- Colors and design tokens are configured in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Social Media Links

Update social media links in `components/Contact.tsx`:

```tsx
const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'your-linkedin-url',
    // ...
  },
  // ...
];
```

## Deployment

This website can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**

For Vercel deployment:

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

## License

All rights reserved. © Core Coaching & Training Solutions
