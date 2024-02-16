import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

import { CartContextProvider } from "./_utils/cart-context"; 

export const metadata = {
  title: "E-commerce App",
  description: "E-commerce App built with Next.js and Tailwind CSS. Made by Garry Jr Dayag.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
        <NavBar />
        {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
