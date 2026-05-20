import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Lendsqr Admin Console",
  description: "Lendsqr frontend engineering assessment",
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
