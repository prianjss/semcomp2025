import "./globals.css";
import Footer from '@/components/Footer/Footer';

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
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body cz-shortcut-listen="true">
        {children}
        <Footer />
      </body>
    </html>
  );
}
