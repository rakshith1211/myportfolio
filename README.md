# MyPortfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, and contact information.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js
- 🚀 Easy deployment to Vercel or GitHub Pages
- 📊 Dynamic project loading from JSON
- 🎯 Smooth scrolling navigation

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended) or GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MyPortfolio.git
cd MyPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. **Update personal details** in `pages/index.tsx`:
   - Replace "Your Name" with your actual name
   - Update the tagline and description
   - Add your profile photo (replace emoji with image)

2. **Update contact links**:
   - Email: Replace `your.email@example.com`
   - LinkedIn: Replace `https://linkedin.com/in/yourprofile`
   - GitHub: Replace `https://github.com/yourusername`

### Projects

Edit `projects.json` to add your projects:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Brief description of your project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/yourusername/project",
  "demo": "https://your-project-demo.com"
}
```

### Skills

Update the `skills` array in `pages/index.tsx` with your technologies.

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles in `styles/globals.css`

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Option 2: GitHub Pages

1. Build the static site:
```bash
npm run build
```

2. The `out` folder contains your static site
3. Deploy the `out` folder to GitHub Pages

### Option 3: Netlify

1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `out`

## Project Structure

```
MyPortfolio/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   └── Layout.tsx      # Page layout wrapper
├── pages/              # Next.js pages
│   ├── _app.tsx        # App component
│   └── index.tsx       # Main portfolio page
├── styles/             # CSS files
│   └── globals.css     # Global styles with Tailwind
├── assets/             # Images, icons, resume
├── public/             # Static files
├── projects.json       # Project data
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── README.md          # This file
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with setup, please open an issue on GitHub.

---

**Happy coding!** 🚀