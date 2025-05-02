import "./globals.css";
import { Suspense } from 'react';

export const metadata = {
  title: "SEMCOMP 2025",
  icons: "/Logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-lt-installed="true">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <Suspense fallback={null}>
      <body cz-shortcut-listen="true">
        {children}
      </body>
      </Suspense>
    </html>
  );
}
