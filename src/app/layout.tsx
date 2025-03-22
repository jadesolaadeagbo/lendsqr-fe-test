import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: [
    {
      path: "../../public/font/avenir-next/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/avenir-next/AvenirNextLTPro-It.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/avenir-next/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "lendsqr",
  description: "User login and dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={avenir.className}>
      {children}
      </body>
    </html>
  );
}
