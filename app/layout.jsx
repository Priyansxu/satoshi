import './globals.css';

export const metadata = {
  title: 'Satoshi Converter',
  description: 'Bitcoin Unit Converter: Convert between Satoshi, Bitcoin, and major currencies instantly',
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