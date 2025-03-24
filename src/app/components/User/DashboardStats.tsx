import React from "react";
import styles from "./DashboardStats.module.scss";
import Image from "next/image";

const dashboardUser = "/images/dashboardUser.svg";
const activeUsers = "/images/activeUsers.svg";
const userLoans = "/images/userLoans.svg";
const userSavings = "/images/userSavings.svg";

const statsData = [
  { title: "Users", icon: dashboardUser, value: "2,453" },
  { title: "Active Users", icon: activeUsers, value: "2,453" },
  { title: "Users with Loans", icon: userLoans, value: "12,453" },
  { title: "Users with Savings", icon: userSavings, value: "102,453" },
];

const DashboardStats = () => {
  return (

    <main className={styles.dashboardContainer}>
        <p className={styles.cardtitle}>Users</p>
        
        <div className={styles.statsContainer}>
        {statsData.map((stat, index) => (
            <div key={index} className={styles.statsBox}>
            <Image src={stat.icon} alt={stat.title} width={30} height={30}/>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
            </div>
        ))}
        </div>
    </main>

  );
};

export default DashboardStats;
