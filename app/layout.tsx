import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyclery Racing | Coming Soon",
  description: "The new Cyclery Racing website is launching soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
