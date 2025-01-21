import './globals.css';

export const metadata = {
  title: 'Satoshi Converter',
  description: 'Satoshi Converter into Bitcoin and other currency.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}