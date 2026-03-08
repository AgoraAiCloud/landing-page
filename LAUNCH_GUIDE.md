# Landing Page Launch Guide

**Status:** Ready to deploy  
**Technology:** React 18 + Vite  
**Hosting:** Vercel (free)  
**Domain:** agorasystems.com  
**Checkout:** Gumroad or Stripe

---

## Quick Start (5 Steps)

### Step 1: Update Gumroad Link
Edit `src/App.jsx` and replace `[YOUR_GUMROAD_LINK]` with your actual Gumroad link.

**Find this line:**
```jsx
window.location.href = `https://gumroad.com/l/[YOUR_GUMROAD_LINK]?email=${encodeURIComponent(email)}`
```

**Replace with your Gumroad link:**
```jsx
window.location.href = `https://gumroad.com/l/docker-guide?email=${encodeURIComponent(email)}`
```

### Step 2: Test Locally
```bash
cd /home/agorasystems/.openclaw/workspace/landing-page
npm install
npm run dev
```

Visit: http://localhost:3000

### Step 3: Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Follow prompts:
- Connect GitHub account (or just deploy directory)
- Select project name: `agora-docker-guide`
- Select root directory: `landing-page`
- Vercel will auto-build and deploy

### Step 4: Connect Domain
In Vercel dashboard:
1. Project settings
2. Domains
3. Add custom domain: `agorasystems.com`
4. Vercel shows you DNS records to add
5. Add those records to your domain registrar

### Step 5: Launch!
- Landing page is now live at agorasystems.com
- Email form sends customers to Gumroad
- Monitor sales in Gumroad dashboard

---

## What Each Section Does

| Section | Purpose | CTA |
|---------|---------|-----|
| **Hero** | Hook + value prop | Email signup |
| **Features** | What they get | Implied benefit |
| **Problem** | Pain points | Credibility |
| **Pricing** | Single option | CTA |
| **FAQ** | Objection handling | Trust building |
| **Final CTA** | Urgency + closing | Purchase |

---

## Email Flow

1. **Landing page** → User enters email
2. **Gumroad link** → Opens with email pre-filled
3. **Gumroad checkout** → Payment processed
4. **Instant delivery** → Docker guide PDF + access

---

## Customization Options

### Change Price
Edit `src/App.jsx` in the pricing section:
```jsx
<div className="price">$97</div>  // Change this
```

### Change Product Name
Search for "OpenClaw Docker Setup" and replace with your name:
```jsx
<h1>Your Product Name Here</h1>
```

### Add More Features
In the features grid, add more cards:
```jsx
<div className="feature-card">
  <div className="feature-icon">🎯</div>
  <h3>Feature Name</h3>
  <p>Feature description</p>
</div>
```

### Change Colors
Edit `src/styles.css` root variables:
```css
:root {
  --primary: #6B46C1;      /* Purple */
  --accent: #10B981;       /* Teal */
  /* etc */
}
```

---

## Tracking & Analytics

### Add Google Analytics
Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Gumroad Sales
Dashboard: https://gumroad.com/dashboard

See:
- Total sales
- Customers
- Revenue
- Refunds
- Affiliates

---

## Next Steps

1. **Create Gumroad listing** (if not already done)
2. **Update Gumroad link** in App.jsx
3. **Deploy to Vercel**
4. **Connect domain**
5. **Add to email campaign**
6. **Start marketing**

---

## Common Issues

### "404 Not Found" after deploying
- Vercel might need 2-3 minutes to build
- Check deployment in Vercel dashboard
- Rebuild if needed

### Email form not working
- Check Gumroad link is correct
- Gumroad must have product live
- Test locally first with real link

### Domain not pointing to Vercel
- Check DNS records were added correctly
- Wait 24 hours for propagation
- Use nslookup to verify: `nslookup agorasystems.com`

### Styling looks broken
- Clear browser cache (Ctrl+Shift+Delete)
- Check all CSS loaded in DevTools
- Rebuild: `npm run build`

---

## Performance Tips

✅ **Already optimized:**
- Minified production build
- Fast Vite builds
- Vercel global CDN

**To improve further:**
- Add image optimization (use WebP)
- Compress PNG/JPEG screenshots
- Lazy load below-the-fold images
- Use `next/image` equivalent

---

## File Structure

```
landing-page/
├── index.html              (Entry point)
├── package.json            (Dependencies)
├── vite.config.js          (Vite config)
├── vercel.json             (Vercel settings)
├── LAUNCH_GUIDE.md         (This file)
├── .gitignore
└── src/
    ├── main.jsx            (React entry)
    ├── App.jsx             (Main component)
    └── styles.css          (Styles)
```

---

## Timeline

- **Setup:** 15 min (npm install, test local)
- **Gumroad:** 10 min (create product listing)
- **Deploy:** 10 min (vercel deploy)
- **Domain:** 5 min (add DNS records)
- **Total:** ~40 minutes to live

---

**Status: READY TO LAUNCH** 🚀
