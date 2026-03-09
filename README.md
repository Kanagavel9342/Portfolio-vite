# Kanagavel S — Portfolio Website

A modern, professional portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🛠 Tech Stack

- **React 18** + **Vite 4**
- **Tailwind CSS 3** (utility-first styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## 📁 Folder Structure

```
src/
├── components/
│   ├── Loader.jsx         # Page loading animation
│   ├── Navbar.jsx         # Sticky nav with dark mode toggle + mobile menu
│   ├── Hero.jsx           # Hero section with animated background
│   ├── About.jsx          # About + stats + bio
│   ├── Skills.jsx         # Tech skills with progress bars + badges
│   ├── Projects.jsx       # Project cards with hover overlay
│   ├── Services.jsx       # Service offerings
│   ├── Contact.jsx        # Contact form (Web3Forms)
│   ├── Footer.jsx         # Footer with social links
│   └── ScrollProgress.jsx # Top progress bar
├── hooks/
│   ├── useTheme.js        # Dark/light mode toggle
│   ├── useInView.js       # Scroll-triggered animations
│   └── useScrollProgress.js
├── styles/
│   └── index.css          # Global styles + Tailwind
├── App.jsx
└── main.jsx
```

## ✉️ Contact Form Setup (Web3Forms)

1. Visit https://web3forms.com/
2. Enter your email to get a free Access Key
3. Open `src/components/Contact.jsx`
4. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual key

## 🎨 Features

- ✅ Dark / Light mode toggle
- ✅ Scroll progress indicator
- ✅ Loading animation on page start
- ✅ Sticky navbar with blur effect
- ✅ Mobile hamburger menu
- ✅ Framer Motion scroll animations
- ✅ Glassmorphism + soft shadow cards
- ✅ White + Black + Yellow color theme
- ✅ Web3Forms contact form integration
- ✅ SEO meta tags
- ✅ Fully responsive (mobile, tablet, desktop)

## 🌐 Deployment

```bash
npm run build
# Output in /dist - deploy to Vercel, Netlify, or any static host
```
