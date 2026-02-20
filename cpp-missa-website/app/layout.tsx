import type { Metadata } from "next";
import NavbarHeader from "./_components/navbar-header";
import ContactFooter from "./_components/contact-footer";
import "./main.css";

export const metadata: Metadata = {
  title: "Cal Poly MISSA",
  description: "Management Information Systems Student Association at Cal Poly Pomona is dedicated to developing students' professional and technical skills in business and technology. We guide students toward careers in fields like business intelligence, information security, and web application development, offering resources, networking, and hands-on experiences to prepare them for the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="has-navbar-fixed-top" lang="en-US">
        <head>
          {/* FONT AWESOME */}
          <script src="https://kit.fontawesome.com/6ba1bc120d.js" crossOrigin="anonymous"></script>
        </head>
      <body>
        <NavbarHeader></NavbarHeader>
        {children}
        <ContactFooter></ContactFooter>
      </body>
    </html>
  );
}
