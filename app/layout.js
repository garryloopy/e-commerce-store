import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

import { CartContextProvider } from "./_utils/cart-context";
import { FavoriteContextProvider } from "./_utils/favorite-context";
import { OrderContextProvider } from "./_utils/order-context";
import { AuthContextProvider } from "./_utils/auth-context";

export const metadata = {
  title: "E-commerce App",
  description:
    "E-commerce App built with Next.js and Tailwind CSS. Made by Garry Jr Dayag.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <OrderContextProvider>
            <FavoriteContextProvider>
              <CartContextProvider>
                <NavBar />
                {children}
                <Footer />
              </CartContextProvider>
            </FavoriteContextProvider>
          </OrderContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
