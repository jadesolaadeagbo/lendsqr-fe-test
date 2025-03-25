import React from 'react';
import Image from 'next/image';
import styles from './Sidebar.module.scss';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
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
  auditLogs,
  systemMessages,
  logout
} from '../../utils';

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
  const router = useRouter();

  const menuItems = [
    {
      section: 'CUSTOMERS',
      options: [
        { icon: users, label: 'Users', disabled: false },
        { icon: guarantors, label: 'Guarantors', disabled: true },
        { icon: loans, label: 'Loans', disabled: true },
        { icon: decisionModels, label: 'Decision Models', disabled: true },
        { icon: savings, label: 'Savings', disabled: true },
        { icon: loanRequests, label: 'Loan Requests', disabled: true },
        { icon: whitelist, label: 'Whitelist', disabled: true },
        { icon: karma, label: 'Karma', disabled: true }
      ]
    },
    {
      section: 'BUSINESSES',
      options: [
        { icon: organization, label: 'Organization', disabled: true },
        { icon: loanProducts, label: 'Loan Products', disabled: true },
        { icon: savingsProducts, label: 'Savings Products', disabled: true },
        { icon: fees, label: 'Fees and Charges', disabled: true },
        { icon: transactions, label: 'Transactions', disabled: true },
        { icon: services, label: 'Services', disabled: true },
        { icon: serviceAccount, label: 'Service Account', disabled: true },
        { icon: settlements, label: 'Karma', disabled: true },
        { icon: reports, label: 'Reports', disabled: true }
      ]
    },
    {
      section: 'SETTINGS',
      options: [
        { icon: preferences, label: 'Preferences', disabled: true },
        { icon: feesPricing, label: 'Fees and Pricing', disabled: true },
        { icon: auditLogs, label: 'Audit Logs', disabled: true },
        { icon: systemMessages, label: 'System Messages', disabled: true }
      ]
    }
  ];

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.sidebarInner}>
        <span className={styles.dashboardItem}>
          <Image
            src={switchOrg}
            width={20}
            height={20}
            alt="Switch Organization"
          />{' '}
          <span>Switch Organization</span>{' '}
          <Image
            src="/images/caretDown.svg"
            width={10}
            height={10}
            alt="Caret Down"
          />
        </span>

        <span className={styles.dashboardItem} style={{ opacity: '0.6' }}>
          <Image src={dashboard} width={20} height={20} alt="Dashboard" />{' '}
          <span>Dashboard</span>
        </span>

        {menuItems.map((group, index) => (
          <div key={index} className={styles.section}>
            <p className={styles.sectionTitle}>{group.section}</p>
            {group.options.map((item, i) => (
              <span
                key={i}
                className={`${styles.menuItem} ${
                  item.disabled ? styles.disabled : ''
                }`}
              >
                <Image
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.label}
                />{' '}
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        ))}
        <div className={styles.logoutSection}>
          <button
            className={`${styles.logoutItem}`}
            onClick={() => {
              Cookies.remove('auth');
              router.push('/');
            }}
          >
            <Image src={logout} width={20} height={20} alt="Logout user" />{' '}
            <span>Logout</span>
          </button>

          <p>v1.2.0</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
