"use client";
import "./globals.css";
import { Faustina } from "next/font/google";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CheckoutModal from "@/components/Checkout_modal/CheckoutModal";
import { useState } from "react";
import { usePathname } from "next/navigation";

import classes from "./layout.module.css";

const inter = Faustina({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const cartPageNotPathname = pathname !== "/checkout";

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handleCheckoutModalTrue = () => {
    if (cartPageNotPathname) {
      setShowCheckoutModal(true);
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      return null;
    }
  };
  const handleCheckoutModalfalse = () => {
    setShowCheckoutModal(false);
    document.body.style.overflow = "visible";
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`${showCheckoutModal ? classes.overlay : ""}`}>
          <NavBar handleCheckoutModalTrue={handleCheckoutModalTrue} />
          {children}
          <Footer />
        </div>
        {showCheckoutModal && cartPageNotPathname && (
          <CheckoutModal handleCheckoutModalfalse={handleCheckoutModalfalse} />
        )}
      </body>
    </html>
  );
}
