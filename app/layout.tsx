import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WRS WOIZ',
  description: 'WRS WOIZ - Wydziałowa Rada Samorządu Wydziału Organizacji i Zarządzania',
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
      <body>
        {children}
      </body>
    </html>
  );
}
