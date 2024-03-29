import type { Metadata } from "next";
import { PeaceSans } from "./localFont";

import "./globals.css";

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`${PeaceSans.className} select-none`}>{children}</body>
    </html>
  );
}
