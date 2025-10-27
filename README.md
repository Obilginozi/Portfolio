Oguzhan Alfred Bilgin - Portfolio

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a Full-Stack Developer.

🌐 **Live Site**: [oguzhanbilgin.com](https://oguzhanbilgin.com)

## 🚀 About

This portfolio website is built with React and deployed on GitHub Pages. It features a clean, modern design with multilingual support (English/Turkish) and showcases:

- **Professional Experience**: Backend Developer at Init SE, Java Developer at Turk Telekom, and more
- **Projects**: Full-stack applications including Init SE, Turk Telekom web portal, e-commerce sites
- **Certifications**: Java, React, AI/ML certifications from various institutions
- **Skills**: Java, Spring Boot, React, TypeScript, and more

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, HTML5, CSS3, Bootstrap
- **Styling**: SCSS with theme support (Light/Dark themes)
- **Deployment**: GitHub Pages
- **Icons**: Devicon, Font Awesome
- **PWA**: Manifest for Progressive Web App capabilities
- **Local Development**: Python SPA Server with custom routing

## 📁 Project Structure

```
Portfolio/
├── src/                      # Source files
│   └── styles/              # SCSS style files with theme support
│       ├── themes/          # Light and dark theme styles
│       ├── dark-slider.scss
│       └── light-slider.scss
├── Developer/               # Developer profile directory
│   ├── assets/             # CSS, JS, and images
│   ├── portfolio_shared_data.json
│   ├── res_primaryLanguage.json
│   └── res_secondaryLanguage.json
├── IvyMontgomery/          # Ivy Montgomery profile directory
├── AtletikBezelye/         # Atletik Bezelye profile directory
├── PrivacyPolicy/          # Privacy Policy directory
├── portfolio_shared_data.json    # Shared portfolio data
├── res_primaryLanguage.json      # English content
├── res_secondaryLanguage.json    # Turkish content
├── image_mapping.json      # Image mapping configuration
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest
├── spa_server.py           # Python SPA server for local development
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── CNAME                   # Custom domain configuration
├── .htaccess               # Apache redirect rules
├── SECURITY.md             # Security policy
└── README.md               # This file
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Bootstrap
- **Theme Support**: Light and Dark theme options with SCSS styling
- **Mobile Optimized**: Touch-friendly interface with mobile-specific enhancements
- **PWA Ready**: Progressive Web App capabilities with manifest support
- **Multilingual**: English and Turkish language support
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags, sitemap, and robots.txt
- **Fast Loading**: Optimized assets and efficient code structure
- **Cross-Platform**: Works seamlessly on desktop, tablet, and mobile devices
- **Touch Support**: Optimized for touch interactions and gestures
- **Mobile Navigation**: Responsive navigation with mobile-friendly menu
- **Multiple Profiles**: Separate profile pages for different personas (Developer, Ivy Montgomery, Atletik Bezelye)
- **SPA Routing**: Custom Python server for proper Single Page Application navigation

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages:

1. **Repository**: `https://github.com/Obilginozi/Portfolio`
2. **Custom Domain**: `oguzhanbilgin.com`
3. **Deployment**: Automatic deployment on push to main branch
4. **SSL**: Automatic HTTPS via GitHub Pages

### Local Development

To run this portfolio locally:

```bash
# Clone the repository
git clone https://github.com/Obilginozi/Portfolio.git
cd Portfolio

# Option 1: Using the custom SPA server (Recommended)
python3 spa_server.py

# Option 2: Using Python's built-in server
python3 -m http.server 8005

# Option 3: Using Node.js
npx serve .

# Option 4: Using PHP
php -S localhost:8005
```

The SPA server includes special routing for profile pages:
- Access at `http://localhost:8005`
- Mobile testing: `http://YOUR_IP:8005`

## 👥 Profile Pages

This portfolio includes multiple profile pages for different personas:

- **Main Portfolio**: `http://localhost:8005/` - Oğuzhan Alfred Bilgin's main portfolio
- **Developer Profile**: `http://localhost:8005/Developer/` - Technical developer profile
- **Ivy Montgomery**: `http://localhost:8005/IvyMontgomery/` - Creative profile
- **Atletik Bezelye**: `http://localhost:8005/AtletikBezelye/` - Sports/fitness profile
- **Privacy Policy**: `http://localhost:8005/DieterClock_PrivacyPolicy` - Privacy Policy page

### Mobile Testing

To test mobile functionality:

1. **Browser DevTools**: Use Chrome/Firefox DevTools mobile simulation
2. **Real Device Testing**: Access `http://your-ip:8005` from mobile devices
3. **PWA Testing**: Install as app on mobile devices for full PWA experience
4. **Performance**: Test on various mobile devices and network conditions
5. **SPA Server**: The included `spa_server.py` provides proper routing for SPA navigation

## 📱 Contact

- **Email**: oguzhanbilgin@outlook.com
- **LinkedIn**: [linkedin.com/in/obilginozi](https://www.linkedin.com/in/obilginozi/)
- **GitHub**: [github.com/Obilginozi](https://github.com/Obilginozi)
- **Bio Link**: [obilginozi.bio.link](https://obilginozi.bio.link/)

## 🎯 Professional Summary

Experienced Full-Stack Developer with 4+ years of experience specializing in:

- **Backend Development**: Java, Spring Boot, REST APIs, Microservices
- **Frontend Development**: React, TypeScript, HTML5, CSS3, Bootstrap
- **Database Management**: PostgreSQL, Oracle DB, MySQL
- **Additional Skills**: Python, C++, Git, Agile methodologies

Currently working as a Backend Developer at Init SE in Ireland, focusing on intelligent transportation systems and real-time data processing.

## 📄 License

This project is open source.

## 🔒 Privacy

Your privacy is important to us. View our [Privacy Policy](https://oguzhanbilgin.com/Privacy_Policy) to learn how we handle your information.

**Built with ❤️ by Oğuzhan Alfred Bilgin**
