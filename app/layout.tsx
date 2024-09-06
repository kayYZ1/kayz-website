import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { Providers } from "./providers";
import { Container } from "@chakra-ui/react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

const openSans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={openSans.className}>
        <Providers>
          <Navbar />
          <Container maxW={"container.md"} pt={20}>
            {children}
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
