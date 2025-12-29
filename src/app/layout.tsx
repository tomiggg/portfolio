import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio personal",
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "any" },                // ICO (prioritario)
      { url: "/icon-512.png?v=5", sizes: "512x512", type: "image/png" }, // PNG
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased bg-[var(--bg)] text-[var(--fg)]`}>
        <main className="container py-10">{children}</main>
      </body>
    </html>
  );
}