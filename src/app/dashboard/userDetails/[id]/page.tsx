'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './UserDetails.module.scss';
import UserCard from '../../../components/User/UserCard/UserCard';

const UserDetails = () => {
  const router = useRouter();
  const redirectUser = () => {
    router.push(`/dashboard`);
  };
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <button onClick={redirectUser}>
          <Image
            src="/images/leftArrow.svg"
            width={20}
            height={20}
            alt="left arrow"
          />
          Back to Users
        </button>
      </div>
      <div className={styles.details}>
        <p className={styles.userDetails}>User Details</p>

        <span style={{ display: 'flex', gap: '15px' }}>
          <button style={{ color: '#E4033B', border: '1px solid #E4033B' }}>
            BLACKLIST USER
          </button>
          <button style={{ color: '#39CDCC', border: '1px solid #39CDCC' }}>
            ACTIVATE USER
          </button>
        </span>
      </div>

      <UserCard />

      <div></div>
    </section>
  );
};

export default UserDetails;
