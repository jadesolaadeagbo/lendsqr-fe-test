import localFont from "next/font/local"
import type { Metadata } from "next";
import styles from "./dashboard.module.css"
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const workSans = localFont({
  src: [
    {
      path: "../../../public/font/work-sans/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/font/work-sans/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/font/work-sans/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
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
            <section className={styles.mainLayout}>{children}</section>
        </main>
      </body>
    </html>
  );
}
