import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import "@mantine/core/styles.css";

import "./globals.css";
import { HeaderMegaMenu as Navbar } from "@/components/HeaderMegaMenu/HeaderMegaMenu";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
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
        <MantineProvider theme={theme}>
          <Navbar />
          <main className="min-h-[calc(100vh-524px)] py-12 mt-[66px]">
            {children}
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
