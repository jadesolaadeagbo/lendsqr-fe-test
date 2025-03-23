import React from "react";
import styles from "./DashboardStats.module.css";

const statsData = [
  { title: "Users", value: "2,453" },
  { title: "Active Users", value: "2,453" },
  { title: "Users with Loans", value: "12,453" },
  { title: "Users with Savings", value: "102,453" },
];

const DashboardStats = () => {
  return (

    <main className={styles.dashboardContainer}>
        <p className={styles.cardtitle}>Users</p>
        
        <div className={styles.statsContainer}>
        {statsData.map((stat, index) => (
            <div key={index} className={styles.statsBox}>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
            </div>
        ))}
        </div>
    </main>

  );
};

export default DashboardStats;
