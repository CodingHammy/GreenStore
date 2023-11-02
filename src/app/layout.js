"use client";
import "./globals.css";
import { Faustina } from "next/font/google";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CheckoutModal from "@/components/Checkout_modal/CheckoutModal";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import classes from "./layout.module.css";

const inter = Faustina({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const modalRef = useRef(null);
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

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCheckoutModalfalse();
    }
  };

  useEffect(() => {
    if (showCheckoutModal) {
      document.addEventListener("mousedown", handleClickOutsideModal);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [showCheckoutModal]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`${showCheckoutModal ? classes.overlay : ""}`}>
          <NavBar handleCheckoutModalTrue={handleCheckoutModalTrue} />
          {children}
          <Footer />
        </div>
        {showCheckoutModal && cartPageNotPathname && (
          <div ref={modalRef}>
            <CheckoutModal
              handleCheckoutModalfalse={handleCheckoutModalfalse}
            />
          </div>
        )}
      </body>
    </html>
  );
}
