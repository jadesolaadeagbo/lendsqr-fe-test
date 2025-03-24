import React, {useState} from 'react'
import styles from "./UserCard.module.scss"
import Image from 'next/image'
import UserProfile from './UserProfile'


const UserCard = () => {
    const [selectedTab, setSelectedTab] = useState<string>("General Details");

  return (
    <div>
        <section className={styles.card}>

            <div className={styles.cardsContainer}>
                <Image src="/images/useravatar.svg" width={100} height={100} alt='user image'/>

                <div className={styles.firstminicard}>
                    <h1>Grace Effiom</h1>
                    <p>LSQFf587g90</p>
                </div>

                <div className={styles.secondminicard}>
                    <h1>User’s Tier</h1>
                    <p>LSQFf587g90</p>
                </div>                
                
                <div className={styles.thirdminicard}>
                    <h1>₦200,000.00</h1>
                    <p>9912345678/Providus Bank</p>
                </div>

            </div>

            <div className={styles.navigationCards}>
                {["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"].map(
                (tab) => (
                    <p
                    key={tab}
                    className={selectedTab === tab ? styles.active : ""}
                    onClick={() => setSelectedTab(tab)}
                    >
                    {tab}
                    </p>
                )
                )}
            </div>
        </section>

        <div>
            {selectedTab === "General Details" && <UserProfile />}
            {selectedTab === "Documents" && <p className={styles.content}>Documents Section</p>}
            {selectedTab === "Bank Details" && <p className={styles.content}>Bank Details Section</p>}
            {selectedTab === "Loans" && <p className={styles.content}>Loans Section</p>}
            {selectedTab === "Savings" && <p className={styles.content}>Savings Section</p>}
            {selectedTab === "App and System" && <p className={styles.content}>App and System Section</p>}
        </div>
    </div>

  )
}

export default UserCard