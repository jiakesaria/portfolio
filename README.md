# Portfolio Website

A modern, recruiter-focused personal portfolio website built with Next.js, React, and Tailwind CSS. Features a celestial "Polar Night" theme with dark blue-purple gradients and subtle animations.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Technical skills
│   └── Contact.tsx         # Contact information
├── public/
│   └── resume.pdf          # Resume PDF (add your resume here)
└── package.json
```

## 🎨 Design Features

- **Celestial Theme**: Dark blue-purple gradient backgrounds with starry sky effects
- **Smooth Animations**: Fade-in and scroll-triggered animations using Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Accessible**: High contrast colors and semantic HTML
- **SEO-Friendly**: Proper metadata and semantic structure

## 📝 Customization

### Adding Your Resume

1. Place your resume PDF in the `public/` directory as `resume.pdf`
2. The download button in the Hero section will automatically link to it

### Updating Content

Edit the component files in `components/` to update:
- Personal information
- Experience entries
- Projects
- Skills
- Contact links

### Styling

- Colors: Edit `tailwind.config.js` to customize the color palette
- Animations: Modify `app/globals.css` for custom animations
- Layout: Adjust spacing and sizing in component files

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📄 License

Personal portfolio - feel free to use as a template for your own portfolio.
