import "./globals.css";
import { Faustina } from "next/font/google";
import NavBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Greenstore",
  description: "Mock website for selling plants",
};

const inter = Faustina({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
