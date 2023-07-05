"use client";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";
import { Home } from "../components/Home";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curriculum Vitae",
  description: "Created using Next.JS and Mui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          <Home />
          {children}
        </body>
      </html>
    </>
  );
}
