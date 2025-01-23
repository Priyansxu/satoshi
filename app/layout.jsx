import './globals.css';

export const metadata = {
  title: 'Satoshi Converter',
  description: 'Satoshi Converter into Bitcoin and other currency.',
  themeColor: '#FFD700',
  icons: '/logo.jpg',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}