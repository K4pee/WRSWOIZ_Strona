import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dzień Wydziału OIZ - 13.05.2026 - WRS WOIZ',
  description: 'Dzień Wydziału OIZ - Największe wydarzenie naszego roku organizowane przez WRS WOIZ. 13 maja 2026, Łódź. Harmonogram, prelegenci, partnerzy, FAQ.',
  icons: {
    icon: '/logo-wrs.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={notoSans.className}>
        {children}
      </body>
    </html>
  );
}
