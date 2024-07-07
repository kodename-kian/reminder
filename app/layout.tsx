import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reminders",
  description: "My first full-stack foray into NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
