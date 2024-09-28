import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navinfo from "@/components/Navinfo";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "@/StoreProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const satoshi = localFont({
  src: "./fonts/SatoshiRegular.woff",
  variable: "--satoshi-",
  weight: "500",
});
const satoshibold = localFont({
  src: "./fonts/SatoshiBold.woff",
  variable: "--satoshibold-",
  weight: "700",
});
const integralcf = localFont({
  src: "./fonts/Integralcfbold.otf",
  variable: "--integralcf-",
  weight: "800",
});

export const metadata: Metadata = {
  title: "E.Shop",
  description: "This is a Ecommerce shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${satoshi.variable} ${satoshibold.variable} ${integralcf.variable} antialiased scroll-smooth`}
          >
            <Navinfo />
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
