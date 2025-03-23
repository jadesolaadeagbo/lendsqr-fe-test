import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Sidebar.module.css"
import {
  switchOrg,
  dashboard,
  users,
  guarantors,
  loans,
  decisionModels,
  savings,
  loanRequests,
  whitelist,
  karma,
  organization,
  loanProducts,
  savingsProducts,
  fees,
  transactions,
  services,
  serviceAccount,
  settlements,
  reports,
  preferences,
  feesPricing,
  auditLogs
} from "../../utils";

const Sidebar = () => {

  const menuItems = [
    { section: "CUSTOMERS", options: [
      { icon: users, label: "Users", link: "/users", disabled: false },
      { icon: guarantors, label: "Guarantors", link: "#", disabled: true },
      { icon: loans, label: "Loans", link: "#", disabled: true },
      { icon: decisionModels, label: "Decision Models", link: "#", disabled: true },
      { icon: savings, label: "Savings", link: "#", disabled: true },
      { icon: loanRequests, label: "Loan Requests", link: "#", disabled: true },
      { icon: whitelist, label: "Whitelist", link: "#", disabled: true },
      { icon: karma, label: "Karma", link: "#", disabled: true },
    ]},
    { section: "BUSINESSES", options: [
      { icon: organization, label: "Organization", link: "#", disabled: true },
      { icon: loanProducts, label: "Loan Products", link: "#", disabled: true },
      { icon: savingsProducts, label: "Savings Products", link: "#", disabled: true },
      { icon: fees, label: "Fees and Charges", link: "#", disabled: true },
      { icon: transactions, label: "Transactions", link: "#", disabled: true },
      { icon: services, label: "Services", link: "#", disabled: true },
      { icon: serviceAccount, label: "Service Account", link: "#", disabled: true },
      { icon: settlements, label: "Karma", link: "#", disabled: true },
      { icon: reports, label: "Reports", link: "#", disabled: true },
    ]},
    { section: "SETTINGS", options: [
      { icon: preferences, label: "Preferences", link: "#", disabled: true },
      { icon: feesPricing, label: "Fees and Pricing", link: "#", disabled: true },
      { icon: auditLogs, label: "Audit Logs", link: "#", disabled: true }
    ]}
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>


      <span className={styles.dashboardItem}>
        <Image src={switchOrg} width={20} height={20} alt="Switch Organization"/> <span>Switch Organization</span> <Image src="/images/caretDown.svg" width={10} height={10} alt="Caret Down"/>
      </span>

      <Link href="#" className={styles.dashboardItem} style={{opacity:"0.6"}}>
        <Image src={dashboard} width={20} height={20} alt="Dashboard"/> <span>Dashboard</span>
      </Link>

        {menuItems.map((group, index) => (
          <div key={index} className={styles.section}>
            <p className={styles.sectionTitle}>{group.section}</p>
            {group.options.map((item, i) => (
              <Link href={item.link} key={i} className={`${styles.menuItem} ${item.disabled ? styles.disabled : ""}`}>
                <Image src={item.icon} width={20} height={20} alt={item.label}/> <span>{item.label}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar