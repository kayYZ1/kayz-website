import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { Container } from "@chakra-ui/react";

import Navbar from "./components/navbar";

const inter = Inter({
  weight: '400',
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "NextJS, Chakra UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Container maxW={"container.md"} pt={20}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
