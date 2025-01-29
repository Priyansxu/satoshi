import './globals.css';

export const metadata = {
  title: 'Satoshi Converter',
  description: 'Bitcoin Unit Converter: Accurately convert between Satoshi, Bitcoin, and major currencies with precise and real-time rates.',
  themeColor: '#AB9FF1',
  icons: {
  icon: '/favicon-32x32.png',
 },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
