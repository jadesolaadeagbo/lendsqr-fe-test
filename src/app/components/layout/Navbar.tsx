import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.nav}>

      <div className={styles.navLeft}>
      <Image src="/images/logo.svg" width={150} height={30} alt="Logo" priority />

      <div className={styles.searchbar}>
        <input type="text" placeholder='Search for anything' className={styles.searchInput} />
        
        <span className={styles.searchicon}>
          <Image src="/images/search.svg" alt="Search icon" width={14} height={14}/>
        </span>
      </div>
      </div>

      <div className={styles.navRight}>
        <Link href='#' className={styles.docslink}>Docs</Link>
        <Image src="/images/bell.png" alt="Bell icon" width={20} height={20}/>

        <span className={styles.userAvatar}>
          <Image src="/images/avatar.svg" alt="Avatar icon" width={48} height={48}/>
          <span className={styles.avatarName}>
            Adedeji
            <Image src="/images/down.svg" alt="Downward icon" width={10} height={10}/>
          </span>
          </span>


      </div>

    </nav>
  )
}

export default Navbar