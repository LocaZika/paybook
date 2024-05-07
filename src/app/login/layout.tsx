import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login"
}
export default function LoginLayout(
  { children }: Readonly<{
    children: React.ReactNode
  }>
) {
  return (
    <html lang="en">
    <head>
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    </head>
    <body className={inter.className}>
      {children}
    </body>
    </html>
  )
}