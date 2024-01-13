"use client";

import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CheckoutModal from "@/components/Checkout_modal/CheckoutModal";
import { useState, useRef, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import classes from "./LayoutClientSide.module.css";

const LayoutClientSide = ({ children }) => {
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
    <body>
      <div className={`${showCheckoutModal ? classes.overlay : ""}`}>
        <NavBar handleCheckoutModalTrue={handleCheckoutModalTrue} />
        {children}
        <Footer />
      </div>
      {showCheckoutModal && cartPageNotPathname && (
        <div ref={modalRef}>
          <CheckoutModal handleCheckoutModalfalse={handleCheckoutModalfalse} />
        </div>
      )}
    </body>
  );
};

export default LayoutClientSide;
