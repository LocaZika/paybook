import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "@styles/bootstrap.min.css";
import { Header, Navbar } from "@/components";
import { Col, Container, Row } from "react-bootstrap";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  const userCookie = cookies().get("user");
  if ( userCookie === undefined ) {
    return redirect("/login");
  }
  const user = JSON.parse(userCookie.value);
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Header user={user}/>
        <Container fluid>
          <Row>
            <Col sm={2}>
              <Navbar />
            </Col>
            <Col sm={10}>
              {children}
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
