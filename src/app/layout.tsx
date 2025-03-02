import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export const metadata = {
  title: "SEMCOMP 2025",
  icons: "/Logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Header />
      <body>{children}</body>
      <Footer />
    </html>
  );
}
