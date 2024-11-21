import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Providers from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "WebDenn",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={manrope.variable}>
      <body className={`${manrope.className} antialiased `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
