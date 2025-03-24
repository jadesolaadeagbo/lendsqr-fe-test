import React from 'react';
import { Work_Sans } from 'next/font/google'; 
import localFont from "next/font/local";
import type { Metadata } from "next";
import styles from "./dashboard.module.scss"
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const workSans = Work_Sans({
  subsets: ['latin'], 
  weight: ['300','400','500', '700', '900'], 
  style: ['normal', 'italic'], 
});

const sfCompact = localFont({
  src: [
    {
      path: "../../../public/font/SFCompactDisplay-Ultralight.otf",
      weight: "100",
      style: "normal",
    }
  ]
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
    <div className={`${workSans.className} ${sfCompact.className}`}>
        <Navbar />
        <main className={styles.container}>
          <Sidebar />
          <section className={styles.mainLayout}>{children}</section>
        </main>
      </div>
  );
}
