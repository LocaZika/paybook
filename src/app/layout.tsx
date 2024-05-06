import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "@styles/bootstrap.min.css";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Paybook", template: "%s | The Payment Book", absolute: "Paybook | The Payment Book" },
  description: "Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
