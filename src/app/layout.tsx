import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutomaTech | Automatización y Software Empresarial",
  description:
    "Transformamos operaciones empresariales con automatización inteligente y software personalizado. Optimiza procesos, ahorra tiempo y escala tu negocio.",
  keywords: [
    "automatización",
    "software empresarial",
    "RPA",
    "optimización de procesos",
    "transformación digital",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
