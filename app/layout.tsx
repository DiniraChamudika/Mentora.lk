import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentora.lk",
  description: "Find Your Best Tutor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 min-h-screen">
        {children}
      </body>
    </html>
  );
}