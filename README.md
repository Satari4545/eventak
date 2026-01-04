# Eventak - Event & Exhibition Solutions Website

A fully functional, modern, and responsive website for Eventak, an event booth design and exhibition solutions company based in Riyadh, Saudi Arabia.

## Features

- 🎨 Modern and professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading and optimized performance
- 🎯 SEO-friendly structure
- 📧 Contact form with validation
- 🌈 Smooth animations and transitions
- 🔝 Back-to-top button
- 📍 Sticky navigation with scroll effects

## Sections

1. **Home/Hero** - Eye-catching landing section with call-to-action buttons
2. **About** - Company information and key features
3. **Services** - Six main service offerings
4. **Portfolio** - Showcase of recent projects
5. **Why Choose Us** - Four key differentiators
6. **Contact** - Contact form and company information
7. **Footer** - Quick links and social media

## File Structure

```
eventak/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and animations
├── js/
│   └── script.js       # Interactive functionality
├── images/
│   └── logo.png        # Company logo (add your logo here)
└── README.md           # This file
```

## Setup Instructions

### 1. Add Your Logo

1. Save your logo image as `logo.png`
2. Place it in the `images/` folder
3. The logo will automatically appear in the navigation and footer

### 2. Customize Content

Edit `index.html` to update:
- Phone number (currently: +966 XX XXX XXXX)
- Email address (currently: info@eventak-sa.com)
- Social media links
- Any other specific content

### 3. Add Real Images

Replace the placeholder portfolio items with real project images:
- Add your project images to the `images/` folder
- Update the portfolio section in `index.html`
- Recommended image size: 800x600px

### 4. Backend Integration (Contact Form)

The contact form currently uses a simulated submission. To integrate with a real backend:

1. Open `js/script.js`
2. Find the `submitForm()` function
3. Uncomment and modify the fetch API call with your backend URL
4. Set up your backend to receive POST requests with the form data

Example backend integration:
```javascript
fetch('https://your-backend.com/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

## Hosting on Your Domain

### Option 1: Static Hosting (Recommended)

Upload to any static hosting service:

**Netlify (Easiest):**
1. Create account at netlify.com
2. Drag and drop the `eventak` folder
3. Connect your domain: Site settings → Domain management
4. Point www.eventak-sa.com to Netlify

**Vercel:**
1. Create account at vercel.com
2. Import project
3. Add custom domain www.eventak-sa.com

**GitHub Pages:**
1. Create GitHub repository
2. Upload files
3. Enable GitHub Pages in settings
4. Configure custom domain

### Option 2: Traditional Web Hosting

1. Purchase hosting (if not already)
2. Use FTP client (FileZilla) to upload files
3. Upload all files to `public_html` or `www` directory
4. Ensure domain DNS points to hosting server

### Domain Configuration

Update DNS settings for www.eventak-sa.com:
1. Login to your domain registrar
2. Find DNS settings
3. Add/update records as per hosting provider instructions

## Customization Guide

### Colors

The color scheme uses CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6dd5c3;     /* Teal */
    --secondary-color: #f39c7e;   /* Coral */
    --accent-color: #d97ba7;      /* Pink */
    --dark-blue: #1a1f3a;         /* Dark background */
}
```

Change these values to customize the color scheme.

### Fonts

Current font: Poppins (Google Fonts)

To change fonts, update in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

And in `css/style.css`:
```css
font-family: 'YourFont', sans-serif;
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The website is optimized for performance:
- Minified CSS and JavaScript
- Optimized images (recommended)
- Lazy loading for images
- Efficient animations
- Mobile-first responsive design

## SEO Features

- Semantic HTML5 structure
- Meta descriptions
- Proper heading hierarchy
- Alt text for images (add when uploading real images)
- Mobile-friendly
- Fast loading times

## Support & Maintenance

### Regular Updates

1. Update portfolio with new projects
2. Keep contact information current
3. Update browser support as needed
4. Monitor form submissions

### Security

- Use HTTPS (SSL certificate)
- Validate form inputs server-side
- Protect against spam (add reCAPTCHA if needed)
- Regular backups

## Future Enhancements

Consider adding:
1. ✅ Arabic language version
2. ✅ Blog section for company news
3. ✅ Client testimonials
4. ✅ Video background in hero section
5. ✅ Live chat integration
6. ✅ Google Maps integration for location
7. ✅ Newsletter signup
8. ✅ Image gallery/lightbox for portfolio

## Technical Support

For customization help:
1. HTML/CSS modifications: Edit respective files
2. JavaScript functionality: See `js/script.js`
3. Responsive issues: Check media queries in `css/style.css`

## License

© 2026 Eventak. All rights reserved.

---

**Ready to Launch!** 🚀

Once you add your logo and customize the content, your website is ready to be deployed to www.eventak-sa.com!
