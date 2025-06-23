# Strokes by Jena - Permanent Makeup Website Setup

## Overview
This is a static website for Strokes by Jena permanent makeup business, featuring:
- Elegant landing page with scroll animations and moving hero images
- Services showcase with hover effects
- About section with artist information
- Gallery page with filterable portfolio
- Before/after comparison slider
- Contact form with email notifications via Netlify
- Fully mobile responsive design

## Deployment to Netlify

### Step 1: Prepare Your Images
Add the following images to the `images` folder:
- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` - Hero slideshow images
- `eyebrows.jpg`, `lips.jpg`, `eyeliner.jpg` - Service showcase images
- `artist.jpg` - Artist photo for about section
- `gallery-hero.jpg` - Gallery page hero background

In the `images/gallery` folder, add:
- `eyebrows-1.jpg`, `eyebrows-2.jpg`, `eyebrows-3.jpg`
- `lips-1.jpg`, `lips-2.jpg`, `lips-3.jpg`
- `eyeliner-1.jpg`, `eyeliner-2.jpg`, `eyeliner-3.jpg`

In the `images/before-after` folder, add:
- `before-1.jpg`, `after-1.jpg` - First before/after pair
- `before-2.jpg`, `after-2.jpg` - Second before/after pair

### Step 2: Deploy to Netlify

1. Push this code to a GitHub repository
2. Go to [Netlify](https://www.netlify.com) and sign up/log in
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Deploy settings are already configured in `netlify.toml`
6. Click "Deploy site"

### Step 3: Configure Form Notifications

1. In Netlify dashboard, go to Site settings > Forms
2. Forms are automatically detected (the booking form is already set up)
3. Go to Forms > Form notifications
4. Add email notification:
   - Choose "Email notification"
   - Enter the business owner's email address
   - Customize the email template if desired

### Step 4: Custom Domain (Optional)

1. In Site settings > Domain management
2. Add your custom domain
3. Follow Netlify's instructions for DNS configuration

## Customization

### Update Business Information
- Edit the business name in the navigation and footer
- Update contact information in the footer
- Modify service descriptions and features

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --color-primary: #d4a574;        /* Main brand color */
    --color-primary-dark: #b8935f;   /* Darker shade for hover states */
    --color-secondary: #f8f5f1;      /* Background accent color */
}
```

### Modify Content
- Update text content directly in `index.html` and `gallery.html`
- Add or remove gallery items by copying the gallery item structure
- Adjust form fields in the contact section

## Form Submissions

The contact form uses Netlify Forms:
- Submissions are stored in your Netlify dashboard
- Email notifications are sent to configured addresses
- Form includes honeypot field for spam protection
- All form data is accessible in Netlify's Forms section

## Performance Features

- Lazy loading for images
- Optimized animations with Intersection Observer
- Mobile-first responsive design
- Efficient CSS with custom properties
- Minification handled by Netlify

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers 