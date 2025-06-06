import {  Banner } from "@/components";
import { Header, Footer } from "@/components/common";
import { Poppins, Cinzel } from "next/font/google";
import "../styles/style.css";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${cinzel.variable} antialiased`}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
