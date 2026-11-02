import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Mahin Nafis | Industrial & Production Engineering Portfolio",
  description:
    "Portfolio of Ahmad Mahin Nafis — Industrial & Production Engineering student at SUST, Campus Lead, Researcher in Human-AI Collaboration for Industry 5.0, and creative technologist.",
  keywords: [
    "Ahmad Mahin Nafis",
    "Industrial & Production Engineering",
    "SUST",
    "Human-AI Collaboration",
    "Industry 5.0",
    "LinkedIn Community Bangladesh",
    "Data Solution-360",
    "Creative Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ahmad Mahin Nafis" }],
  openGraph: {
    title: "Ahmad Mahin Nafis | Industrial & Production Engineering Portfolio",
    description: "Bridging Industrial Engineering with Modern Technology & Leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans bg-[#08090d] text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}

