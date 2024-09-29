import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Udit Saxena | Portfolio",
  description: "Portfolio of Udit Saxena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" p-10 mb-10"}>{children}</body>
    </html>
  );
}
