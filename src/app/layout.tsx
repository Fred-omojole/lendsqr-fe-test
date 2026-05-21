import type { Metadata } from "next";
import { Nunito, Work_Sans } from "next/font/google";
import "./globals.scss";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

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
    <html lang="en" className={`${workSans.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
