import React, { useState, useEffect } from "react";
import styles from "./UserCard.module.scss";
import Image from "next/image";
import UserProfile from "../UserProfile/UserProfile";
import { useParams } from "next/navigation";
import { fetchUserDetails } from "../../../services/fetchUserDetails";
import { User } from "../../../services/fetchUserDetails";


const UserCard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("General Details");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (!id) return;

    const storedUser = localStorage.getItem(`user-${id}`);

    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
      setLoading(false);
    } else {
      fetchUserDetails(id as string)
        .then((data) => {
          setUser(data as User  | null);
          localStorage.setItem(`user-${id}`, JSON.stringify(data)); 
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div className={styles.loader}>Loading...</div>;
  }  
  if (!user) return <p className={styles.loader}>User not found</p>;

  return (
    <div>
      <section className={styles.card}>
        <div className={styles.cardsContainer}>
          <Image src="/images/useravatar.svg" width={100} height={100} alt="user image" />

          <div className={styles.minicards}>
            <div className={styles.firstminicard}>
              <h1>{user?.personalInformation?.fullName}</h1>
              <p>LSQFf587g90</p>
            </div>

            <div className={styles.secondminicard}>
              <h1>User’s Tier</h1>
              <span className={styles.stars}>
                <Image src="/images/filledStar.svg" width={15} height={15} alt="star" />
                <Image src="/images/outlinedStar.svg" width={15} height={15} alt="star" />
                <Image src="/images/outlinedStar.svg" width={15} height={15} alt="star" />
              </span>
            </div>

            <div className={styles.thirdminicard}>
              <h1>{user?.educationEmployment?.monthlyIncome}</h1>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
        </div>

        <div className={styles.navigationCards}>
          {["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"].map((tab) => (
            <p key={tab} className={selectedTab === tab ? styles.active : ""} onClick={() => setSelectedTab(tab)}>
              {tab}
            </p>
          ))}
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
  );
};

export default UserCard;
