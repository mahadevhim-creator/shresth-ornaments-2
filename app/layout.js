import './globals.css'

export const metadata = {
  title: 'Shresth Ornaments | Premium 22KT Gold Jewelry',
  description: 'Handcrafted gold jewelry from Jaipur. BIS Hallmarked 22KT gold ornaments since 1994.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-[#0a0804]">{children}</body>
    </html>
  )
}
