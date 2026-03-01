# 🏆 Shresth Ornaments — Next.js Website

Premium gold jewelry website with royal dark gold theme.

---

## 📁 Project Structure (Clean — No Duplicates!)

```
shresth-ornaments/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Pages auto-deploy
├── app/
│   ├── components/
│   │   ├── Navbar.js           ← Navigation bar
│   │   └── Footer.js           ← Footer
│   ├── data/
│   │   └── products.js         ← All products data (edit here)
│   ├── categories/
│   │   └── page.js             ← /categories page
│   ├── product/
│   │   └── [id]/
│   │       └── page.js         ← /product/1, /product/2 etc.
│   ├── about/
│   │   └── page.js             ← /about page
│   ├── contact/
│   │   └── page.js             ← /contact page
│   ├── globals.css             ← Global styles
│   ├── layout.js               ← Root layout (fonts, metadata)
│   └── page.js                 ← Homepage /
├── next.config.js              ← Static export config
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

---

## 🚀 Setup in VSCode (Step by Step)

### Step 1 — Open Project in VSCode
```bash
# Copy this folder to your desired location, then:
cd shresth-ornaments
code .
```

### Step 2 — Install Dependencies
Open VSCode Terminal (Ctrl + `) and run:
```bash
npm install
```

### Step 3 — Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 in browser ✅

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create GitHub Repository
1. Go to https://github.com/new
2. Name it: `shresth-ornaments`
3. Make it **Public**
4. Don't add README (we have one)
5. Click **Create repository**

### Step 2 — Push Code
In VSCode terminal:
```bash
git init
git add .
git commit -m "Initial commit - Shresth Ornaments website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shresth-ornaments.git
git push -u origin main
```
*(Replace YOUR_USERNAME with your GitHub username)*

### Step 3 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Done! ✅

### Step 4 — Auto Deploy
- Every time you push to `main`, the site auto-deploys!
- Your site URL will be: `https://YOUR_USERNAME.github.io/shresth-ornaments`

---

## ✏️ How to Edit Content

### Add/Edit Products → `app/data/products.js`
```js
{
  id: 10,                         // Unique number
  code: 'SO-NECK-9999',
  name: 'Your Product Name',
  weight: '30.00 gm',
  wastage: '12%',
  purity: '22KT',
  price: '₹1,80,000',
  priceNum: 180000,               // For sorting (number only)
  img: 'https://your-image-url', // Unsplash or your own
  tag: 'New',                    // Badge text
  cat: 'necklaces',              // Category ID
  sub: 'Temple Jewelry',
  desc: 'Product description here.',
}
```

### Change Brand Info → Edit text in:
- `app/layout.js` — Page title & description
- `app/components/Navbar.js` — Logo name
- `app/components/Footer.js` — Address, phone, email

---

## 🎨 Pages

| Page | URL |
|------|-----|
| Homepage | `/` |
| Collections | `/categories` |
| Product Detail | `/product/1` |
| About | `/about` |
| Contact | `/contact` |

---

Made with ❤️ for Shresth Ornaments, Jaipur
