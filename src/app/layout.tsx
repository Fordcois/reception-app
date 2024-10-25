import type { Metadata } from "next";
import { NavBar } from "@/components/navigationBar";


export const metadata: Metadata = {
  title: "Please Register Your Attendance",
  description: "Reigster you attendance on entering & Leaving the building",
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
        {children} 
      </body>
    </html>
  );
}
