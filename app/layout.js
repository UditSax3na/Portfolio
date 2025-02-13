import "./globals.css";

export const metadata = {
  title: "Udit Saxena | Portfolio",
  description: "Portfolio of Udit Saxena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" p-10 mb-10">{children}</body>
    </html>
  );
}
