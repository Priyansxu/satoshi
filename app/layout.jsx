import './globals.css';

export const metadata = {
  title: 'Satoshi Converter',
  description: 'Bitcoin Unit Converter: Accurately convert between Satoshi, Bitcoin, and major currencies with precise and real-time rates.',
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