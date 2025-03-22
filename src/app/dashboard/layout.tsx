import localFont from "next/font/local"
import type { Metadata } from "next";
import "../globals.css"
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const workSans = localFont({
  src:[
    {
      path: "../../../public/font/work-sans/WorkSans-Black.ttf",
      weight: "900",
      style: "normal"
    },     {
        path: "../../../public/font/work-sans/WorkSans-ExtraBold.ttf",
        weight: "800",
        style: "normal"
      },     {
        path: "../../../public/font/work-sans/WorkSans-Bold.ttf",
        weight: "700",
        style: "normal"
      },     {
        path: "../../../public/font/work-sans/WorkSans-SemiBold.ttf",
        weight: "600",
        style: "normal"
      },     {
        path: "../../../public/font/work-sans/WorkSans-Medium.ttf",
        weight: "500",
        style: "normal"
      },     {
        path: "../../../public/font/work-sans/WorkSans-Regular.ttf",
        weight: "400",
        style: "normal"
      },     {
        path: "../../../public/font/work-sans/WorkSans-Thin.ttf",
        weight: "200",
        style: "normal"
      },     {
        path: "../../../public/font/work-sans/WorkSans-ExtraLight.ttf",
        weight: "100",
        style: "normal"
      }, 
  ],
  variable: "--font-work-sans"
})

export const metadata: Metadata = {
    title: "Dashboard",
    description: "User dashboard",
  };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.className}
      >
        <Navbar/>

        <main>
            {/* <Sidebar/> */}
            <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
