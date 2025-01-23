import './globals.css';

export const metadata = {
  title: 'Satoshi Converter',
  description: 'Convert Satoshi into Bitcoin and other currency.',
  themeColor: '#f4f2ff',
  icons: '/logo.jpg',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}