"use client";
import React, {useState, useEffect} from "react";
import styles from "./UserProfile.module.scss";
import { fetchUserDetails } from "../../../services/fetchUserDetails";
import { useParams } from "next/navigation";

interface User {
  personalInformation: Record<string, string>;
  educationEmployment: Record<string, string>;
  socials: Record<string, string>;
  guarantor: { [key: string]: string }[];
}



const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const id = params?.id;



  useEffect(() => {
    if (id) {
      fetchUserDetails(id as string)
        .then((data) => setUser(data))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;


  return (
    <div className={styles.card}>
      {/* Personal Information */}
      <div className={styles.category}>
        <h2 className={styles.categoryTitle}>Personal Information</h2>
        <div className={styles.flex}>
          <div className={styles.field}>
            <p className={styles.label}>Full Name</p>
            <p className={styles.value}>{user.personalInformation?.["FULL NAME"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Phone Number</p>
            <p className={styles.value}>{user.personalInformation?.["PHONE NUMBER"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Email Address</p>
            <p className={styles.value}>{user.personalInformation?.["EMAIL ADDRESS"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>BVN</p>
            <p className={styles.value}>{user.personalInformation?.["BVN"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Gender</p>
            <p className={styles.value}>{user.personalInformation?.["GENDER"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Marital Status</p>
            <p className={styles.value}>{user.personalInformation?.["MARITAL STATUS"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Children</p>
            <p className={styles.value}>{user.personalInformation?.["CHILDREN"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Type of Residence</p>
            <p className={styles.value}>{user.personalInformation?.["TYPE OF RESIDENCE"]}</p>
          </div>
        </div>
      </div>
  
      {/* Education and Employment */}
      <div className={styles.category}>
        <h2 className={styles.categoryTitle}>Education And Employment</h2>
        <div className={styles.flex}>
          <div className={styles.field}>
            <p className={styles.label}>Level of Education</p>
            <p className={styles.value}>{user.educationEmployment?.["LEVEL OF EDUCATION"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Employment Status</p>
            <p className={styles.value}>{user.educationEmployment?.["EMPLOYMENT STATUS"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Sector of Employment</p>
            <p className={styles.value}>{user.educationEmployment?.["SECTOR OF EMPLOYMENT"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Duration of Employment</p>
            <p className={styles.value}>{user.educationEmployment?.["DURATION OF EMPLOYMENT"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Office Email</p>
            <p className={styles.value}>{user.educationEmployment?.["OFFICE EMAIL"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Monthly Income</p>
            <p className={styles.value}>{user.educationEmployment?.["MONTHLY INCOME"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Loan Repayment</p>
            <p className={styles.value}>{user.educationEmployment?.["LOAN REPAYMENT"]}</p>
          </div>
        </div>
      </div>
  
      {/* Socials */}
      <div className={styles.category}>
        <h2 className={styles.categoryTitle}>Socials</h2>
        <div className={styles.flex}>
          <div className={styles.field}>
            <p className={styles.label}>Twitter</p>
            <p className={styles.value}>{user.socials?.["TWITTER"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Facebook</p>
            <p className={styles.value}>{user.socials?.["FACEBOOK"]}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Instagram</p>
            <p className={styles.value}>{user.socials?.["INSTAGRAM"]}</p>
          </div>
        </div>
      </div>
  
      {/* Guarantor */}
      <div className={styles.guarantorCategory}>
        <h2 className={styles.categoryTitle}>Guarantor</h2>
        {user.guarantor?.map((guarantor, i) => (
          <div key={i} className={`${styles.category} ${i === user.guarantor.length - 1 ? styles.lastGuarantor : ""}`}>
            <div className={styles.flex}>
              <div className={styles.field}>
                <p className={styles.label}>Full Name</p>
                <p className={styles.value}>{guarantor["FULL NAME"]}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.label}>Phone Number</p>
                <p className={styles.value}>{guarantor["PHONE NUMBER"]}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.label}>Email Address</p>
                <p className={styles.value}>{guarantor["EMAIL ADDRESS"]}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.label}>Relationship</p>
                <p className={styles.value}>{guarantor["RELATIONSHIP"]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default UserProfile;
