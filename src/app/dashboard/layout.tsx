'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import styles from './dashboard.module.scss';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic']
});

const sfCompact = localFont({
  src: [
    {
      path: '../../../public/font/SFCompactDisplay-Ultralight.otf',
      weight: '100',
      style: 'normal'
    }
  ]
});

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const auth = Cookies.get('auth');

    if (!auth) {
      router.replace('/'); // Redirect unauthenticated users
    } else {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) return null; // Prevent rendering if user is not authenticated

  return (
    <div className={`${workSans.className} ${sfCompact.className}`}>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main className={styles.container}>
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <section className={styles.mainLayout}>{children}</section>
      </main>
    </div>
  );
}
