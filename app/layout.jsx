import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}
