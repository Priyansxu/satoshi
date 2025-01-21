import './globals.css';

export const metadata = {
  title: 'Satoshi Converter',
  description: 'Satoshi Converter into Bitcoin and other currency.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#AB9FF1" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}