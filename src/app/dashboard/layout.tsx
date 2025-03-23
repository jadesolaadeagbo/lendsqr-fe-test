import { Work_Sans } from 'next/font/google'; 
import type { Metadata } from "next";
import styles from "./dashboard.module.css"
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const workSans = Work_Sans({
  subsets: ['latin'], 
  weight: ['300','400','500', '700', '900'], 
  style: ['normal', 'italic'], 
});

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

        <main className={styles.container}>
            <Sidebar/>
            <section className={styles.mainLayout}>{children}</section>
        </main>
      </body>
    </html>
  );
}
