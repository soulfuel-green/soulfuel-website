# Soulfuel Green Energy Website

A modern, responsive Next.js website for Soulfuel Green Energy, featuring biomass products and services.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Copy environment variables (optional for static hosting)
cp env.example .env.local
```

### Development
```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
# Build and export static files
npm run build

# Static files will be in the 'out' directory
```

## 🌐 Hosting Options

### Option 1: GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `gh-pages` branch
4. Set source to `/ (root)` and select the `out` folder
5. Your site will be available at `https://yourusername.github.io/repository-name`

**Quick Deploy:**
```bash
# Run the deployment script
./deploy.sh

# Then upload the contents of 'deploy-temp/' to your GitHub Pages
```

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Deploy!

### Option 3: Vercel
1. Import your project to Vercel
2. Vercel will automatically detect Next.js
3. For static export, ensure `output: 'export'` is in next.config.js
4. Deploy!

### Option 4: Any Static Host
Upload the contents of the `out` directory to any static hosting service:
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- etc.

## 📧 Contact Form Setup

Since this is a static site, API routes don't work. Here are alternatives:

### Option 1: Netlify Forms
1. Add `netlify` attribute to your form
2. No backend needed - Netlify handles form submissions

### Option 2: Formspree
1. Sign up at formspree.io
2. Replace form action with Formspree endpoint
3. Handle submissions in Formspree dashboard

### Option 3: EmailJS
1. Sign up at emailjs.com
2. Configure email service
3. Use client-side JavaScript to send emails

### Option 4: External API
1. Use services like Resend, SendGrid, or Mailgun
2. Create a separate serverless function
3. Deploy to Vercel Functions, Netlify Functions, or AWS Lambda

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:
```
RESEND_API_KEY=your_resend_api_key_here
```

### Next.js Configuration
The `next.config.js` is configured for static export with:
- `output: 'export'` - Enables static export
- `trailingSlash: true` - Adds trailing slashes to URLs
- `images: { unoptimized: true }` - Disables image optimization for static export

## 📁 Project Structure
```
├── app/                 # Next.js app directory
│   ├── api/            # API routes (disabled for static export)
│   ├── globals.css     # Global styles with Tailwind
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage component
├── out/                # Static export output
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Dependencies and scripts
├── deploy.sh          # Deployment script
└── README.md          # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application
- `npm run start` - Start production server (not used for static export)
- `npm run export` - Build and export static files
- `npm run deploy` - Build and export (alias for export)
- `./deploy.sh` - Build and prepare for deployment

## 🎨 Styling

This project uses **Tailwind CSS** for styling:
- Responsive design
- Modern, clean interface
- Green color scheme matching your brand
- Mobile-first approach

## 🚨 Important Notes

1. **API Routes**: Not available in static export mode
2. **Server-Side Features**: Disabled for static hosting
3. **Image Optimization**: Disabled for static export
4. **Dynamic Routes**: Must be pre-rendered at build time

## 🔄 Updates

To update the site:
1. Make changes to your code
2. Run `npm run build`
3. Deploy the `out` directory to your hosting service

## 📞 Support

For hosting issues or questions, please check:
1. This README
2. Next.js static export documentation
3. Your hosting provider's documentation

## 🎯 Current Status

✅ **Fixed Issues:**
- Missing Next.js configuration files
- Missing page components
- Missing Tailwind CSS setup
- API route compatibility with static hosting
- Proper build process

✅ **Ready for Hosting:**
- Static files generated in `out/` directory
- Responsive design implemented
- All dependencies installed
- Deployment script ready

Your website is now ready for hosting! 🎉
