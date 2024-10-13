import { Playfair_Display } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/header";
import PageTransition from "@/components/PageTransition";

const Playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Playfair.variable}>
        <Header/>
        <PageTransition>
          {children}
        </PageTransition>
        </body>
    </html>
  );
}