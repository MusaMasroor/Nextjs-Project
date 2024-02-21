import type { Metadata } from "next";
import "./globals.css";

import Prvider from "../Redux/Provider";
export const metadata: Metadata = {
  title: "Vrx",
  description: "Discover the best cars in the world.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative ">
        <Prvider>{children}</Prvider>
      </body>
    </html>
  );
}
