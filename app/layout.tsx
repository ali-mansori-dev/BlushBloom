import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import "@mantine/core/styles.css";

import "./globals.css";
import { HeaderMegaMenu as Navbar } from "@/components/Header";
import { Footer } from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { Providers } from "@/provider";

export const metadata: Metadata = {
  title: "Next.js Ecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blush Bloom</title>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <MantineProvider theme={theme}>
            <Navbar />
            <main className="min-h-[calc(100vh-524px)] py-12 mt-[66px]">
              {children}
              <AuthModal />
            </main>
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
