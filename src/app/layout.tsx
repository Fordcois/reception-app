import type { Metadata } from "next";
import { NavBar } from "@/components/navigationBar";


export const metadata: Metadata = {
  title: "TaxAssist",
  description: "Welcome to TaxAssist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app-container">
        <NavBar/>
        <div className="Centralised-container">
        {children} 
        </div>
        <div className="Footer"/>
      </body>
    </html>
  );
}
