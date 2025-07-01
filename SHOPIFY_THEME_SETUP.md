# Premium Shopify Theme 2.0 - Setup Guide

## 🎨 Overview

This is a premium Shopify Theme 2.0 built with modern technologies:
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and optimized builds
- **Alpine.js** for lightweight reactivity
- **Swiper.js** for premium carousels
- **Premium design system** with custom components

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Shopify CLI installed
- Access to a Shopify development store

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build assets**
   ```bash
   npm run build
   ```

3. **Development mode (watch files)**
   ```bash
   npm run dev
   ```

## 🔧 Commands Reference

### Development Commands
```bash
# Watch files and build automatically
npm run dev

# Build for production
npm run build

# Preview built assets
npm run preview

# Test theme and build
npm run test
```

### Shopify Commands
```bash
# Push to development theme
npm run deploy:dev

# Push to live theme (be careful!)
npm run deploy:live

# Run Shopify theme check
shopify theme check
```

## 📁 Project Structure

```
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── src/                      # Source files
│   ├── main.js              # Main JavaScript entry
│   ├── styles/
│   │   └── main.css         # Main CSS with Tailwind
│   ├── scripts/             # Additional JS modules
│   └── components/          # Reusable components
├── theme-template/          # Shopify theme files
│   ├── layout/
│   │   └── theme.liquid     # Main layout
│   ├── templates/
│   │   └── index.liquid     # Homepage template
│   ├── snippets/
│   │   ├── cart-drawer.liquid
│   │   ├── search-modal.liquid
│   │   ├── cart-scripts.liquid
│   │   └── meta-tags.liquid
│   ├── assets/              # Built assets (auto-generated)
│   ├── config/              # Theme settings
│   └── locales/             # Translations
```

## 🎨 Design System

### Colors
- **Primary**: Blue scale (50-900)
- **Secondary**: Purple scale (50-900)
- **Gray**: Neutral scale (50-900)

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family

### Components
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.btn-ghost` - Ghost button
- `.card` - Basic card
- `.card-premium` - Premium card with gradient
- `.form-input` - Form input styling

### Animations
- `.animate-fade-in` - Fade in animation
- `.animate-fade-in-up` - Fade in from bottom
- `.animate-on-scroll` - Trigger animation on scroll

## 🔌 Features

### Modern JavaScript
- **Alpine.js** for reactive components
- **ES6+ syntax** with Vite transpilation
- **Modular architecture** for maintainability

### Premium UI Components
- **Responsive navigation** with mobile menu
- **Cart drawer** with real-time updates
- **Search modal** with suggestions
- **Product cards** with hover effects
- **Hero sections** with animations

### Performance Optimizations
- **Lazy loading** for images
- **Intersection Observer** for animations
- **Optimized bundles** with Vite
- **Critical CSS** inlining

### SEO & Accessibility
- **Schema.org** structured data
- **Open Graph** meta tags
- **ARIA labels** and semantics
- **Skip to content** links

## 🛠 Customization

### Adding New Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'custom': {
        500: '#your-color'
      }
    }
  }
}
```

### Creating New Components
Add to `src/styles/main.css`:
```css
@layer components {
  .your-component {
    @apply px-4 py-2 bg-primary-500 text-white;
  }
}
```

### Adding JavaScript Modules
1. Create file in `src/scripts/`
2. Import in `src/main.js`
3. Use in Liquid templates

## 📱 Responsive Design

The theme is fully responsive with breakpoints:
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

## 🧪 Testing

### Theme Check
```bash
npm run test
```

This runs:
1. Vite build process
2. Shopify theme check for liquid validation
3. Accessibility checks

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works on mobile/desktop
- [ ] Cart functionality works
- [ ] Search modal functions
- [ ] Product pages display properly
- [ ] Forms submit correctly
- [ ] Images load with lazy loading
- [ ] Animations trigger on scroll

## 🚀 Deployment

### Development Theme
```bash
npm run deploy:dev
```

### Production Theme
```bash
npm run deploy:live
```

**⚠️ Warning**: Always test on development theme first!

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 16+
- Clear node_modules and reinstall
- Check for syntax errors in CSS/JS

### Shopify CLI Issues
- Update Shopify CLI: `npm install -g @shopify/cli`
- Re-authenticate: `shopify auth logout && shopify auth login`

### Style Issues
- Run `npm run build` to regenerate CSS
- Check Tailwind classes are correct
- Verify PostCSS is processing correctly

## 📚 Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Alpine.js Documentation](https://alpinejs.dev)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for premium Shopify experiences**