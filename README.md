# Ideal Factory - Villa Interior Solutions

A modern, responsive website for Ideal Factory, a premium villa interior design company specializing in kitchens, wardrobes, wooden doors, and premium window systems.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## Live Demo

[View Live Site](https://ideal-factory-taskv1.vercel.app/)

## Features

- Responsive design optimized for all devices
- Dark luxurious theme with teal/cyan accent colors
- Smooth scroll animations with Framer Motion
- Interactive design preview with tab navigation
- Contact form with validation
- SEO optimized with proper meta tags
- Accessible with ARIA labels and semantic HTML

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter, Playfair Display (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/AnujaLd/IdealFactory-Taskv1.git
cd IdealFactory-Taskv1
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run the development server**

```bash
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Troubleshooting

If you encounter any workspace-related issues, create or modify `pnpm-workspace.yaml` in the root directory:

```yaml
packages:
  - "."
```

Or try running with the following flags:

```bash
pnpm install --shamefully-hoist
```

## Project Structure

```
ideal-factory/
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Navigation header
│   │   ├── footer.tsx       # Site footer
│   │   └── index.ts         # Barrel export
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── solutions-hero-section.tsx
│   │   ├── solutions-grid-section.tsx
│   │   ├── why-difficult-section.tsx
│   │   ├── approach-section.tsx
│   │   ├── design-preview-section.tsx
│   │   ├── stats-section.tsx
│   │   ├── why-choose-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── contact-section.tsx
│   │   └── index.ts         # Barrel export
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
pnpm build
pnpm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Anuja LD**

- GitHub: https://github.com/AnujaLd/IdealFactory-Taskv1.git

## Acknowledgments

- Design inspiration from modern interior design websites
- Images from [Unsplash](https://unsplash.com)
- UI components from [shadcn/ui](https://ui.shadcn.com)