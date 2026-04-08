import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "FiveCred | Soluções Financeiras Inteligentes",
  description: "A FiveCred oferece o melhor em crédito consignado, portabilidade e soluções financeiras com taxas competitivas e atendimento humanizado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-dark`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
