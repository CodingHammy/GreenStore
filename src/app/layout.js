import "./globals.css";

import { Providers } from "@/redux/provider";

import LayoutClientSide from "@/layoutClientSide/LayoutClientSide";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LayoutClientSide>{children}</LayoutClientSide>
        </Providers>
      </body>
    </html>
  );
}
