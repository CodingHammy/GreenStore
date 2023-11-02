import "./globals.css";
import { Faustina } from "next/font/google";

import { Providers } from "@/redux/provider";

import LayoutClientSide from "@/layoutClientSide/LayoutClientSide";

const inter = Faustina({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <LayoutClientSide>{children}</LayoutClientSide>
        </Providers>
      </body>
    </html>
  );
}
