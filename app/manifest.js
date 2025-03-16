export default function manifest() {
  return {
    name: 'Satoshi Converter',
    short_name: 'Satoshi Converter',
    description: 'Convert Sats between BTC and other currencies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#AB9FF1',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/logo.jpg',
        sizes: 'any',
        type: 'image/jpg',
      },
    ],
  }
}