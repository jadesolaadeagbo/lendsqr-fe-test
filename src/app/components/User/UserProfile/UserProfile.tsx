"use client";
import React, {useState, useEffect} from "react";
import styles from "./UserProfile.module.scss";
import { fetchUserDetails } from "../../../services/fetchUserDetails";
import { useParams } from "next/navigation";
import { User } from "../../../services/fetchUserDetails";

// export interface User {
//   id: Record<number, number>
//   personalInformation: Record<string, string>;
//   educationEmployment: Record<string, string>;
//   socials: Record<string, string>;
//   guarantor: { [key: string]: string }[];
// }






const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const id = params?.id;



  useEffect(() => {
    if (!id) return;

    const storedUser = localStorage.getItem(`user-${id}`);

    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Load user from localStorage
      setLoading(false);
    } else {
      fetchUserDetails(id as string)
        .then((data) => {
          setUser(data);
          localStorage.setItem(`user-${id}`, JSON.stringify(data)); // Store in localStorage
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p className={styles.loader}>Loading...</p>;
  if (!user) return <p className={styles.loader}>User not found</p>;


  return (
    <div className={styles.card}>
      {/* Personal Information */}
      <div className={styles.category}>
        <h2 className={styles.categoryTitle}>Personal Information</h2>
        <div className={styles.flex}>
          <div className={styles.field}>
            <p className={styles.label}>Full Name</p>
            <p className={styles.value}>{user?.personalInformation?.fullName}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Phone Number</p>
            <p className={styles.value}>{user?.personalInformation?.phoneNumber}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Email Address</p>
            <p className={styles.value}>{user?.personalInformation?.email}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>BVN</p>
            <p className={styles.value}>{user?.personalInformation?.bvn}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Gender</p>
            <p className={styles.value}>{user?.personalInformation?.gender}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Marital Status</p>
            <p className={styles.value}>{user?.personalInformation?.maritalStatus}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Children</p>
            <p className={styles.value}>{user?.personalInformation?.children}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Type of Residence</p>
            <p className={styles.value}>{user?.personalInformation?.typeOfResidence}</p>
          </div>
        </div>
      </div>
  
      {/* Education and Employment */}
      <div className={styles.category}>
        <h2 className={styles.categoryTitle}>Education And Employment</h2>
        <div className={styles.flex}>
          <div className={styles.field}>
            <p className={styles.label}>Level of Education</p>
            <p className={styles.value}>{user?.educationEmployment?.levelOfEducation}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Employment Status</p>
            <p className={styles.value}>{user?.educationEmployment?.employmentStatus}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Sector of Employment</p>
            <p className={styles.value}>{user?.educationEmployment?.sectorOfEmployment}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Duration of Employment</p>
            <p className={styles.value}>{user?.educationEmployment?.durationOfEmployment}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Office Email</p>
            <p className={styles.value}>{user?.educationEmployment?.officeEmail}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Monthly Income</p>
            <p className={styles.value}>{user?.educationEmployment?.monthlyIncome}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Loan Repayment</p>
            <p className={styles.value}>{user?.educationEmployment?.loanRepayment}</p>
          </div>
        </div>
      </div>
  
      {/* Socials */}
      <div className={styles.category}>
        <h2 className={styles.categoryTitle}>Socials</h2>
        <div className={styles.flex}>
          <div className={styles.field}>
            <p className={styles.label}>Twitter</p>
            <p className={styles.value}>{user?.socials?.twitter}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Facebook</p>
            <p className={styles.value}>{user?.socials?.facebook}</p>
          </div>
          <div className={styles.field}>
            <p className={styles.label}>Instagram</p>
            <p className={styles.value}>{user?.socials?.instagram}</p>
          </div>
        </div>
      </div>
  
      {/* Guarantor */}
      <div className={styles.guarantorCategory}>
        <h2 className={styles.categoryTitle}>Guarantor</h2>
        {user?.guarantor?.map((guarantor, i) => (
          <div key={i} className={`${styles.category} ${i === user?.guarantor.length - 1 ? styles.lastGuarantor : ""}`}>
            <div className={styles.flex}>
              <div className={styles.field}>
                <p className={styles.label}>Full Name</p>
                <p className={styles.value}>{guarantor.fullName}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.label}>Phone Number</p>
                <p className={styles.value}>{guarantor.phoneNumber}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.label}>Email Address</p>
                <p className={styles.value}>{guarantor.email}</p>
              </div>
              <div className={styles.field}>
                <p className={styles.label}>Relationship</p>
                <p className={styles.value}>{guarantor.relationship}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default UserProfile;
