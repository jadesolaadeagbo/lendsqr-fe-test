"use client";
import React from "react";
import styles from "./UserProfile.module.scss";

interface UserData {
  personalInformation: Record<string, string>;
  educationEmployment: Record<string, string>;
  socials: Record<string, string>;
  guarantor: { [key: string]: string }[];
}

const user: UserData = {
  personalInformation: {
    "FULL NAME": "Grace Effiom",
    "PHONE NUMBER": "07060780922",
    "EMAIL ADDRESS": "grace@gmail.com",
    "BVN": "07060780922",
    "GENDER": "Female",
    "MARITAL STATUS": "Single",
    "CHILDREN": "None",
    "TYPE OF RESIDENCE": "Parent’s Apartment",
  },
  educationEmployment: {
    "LEVEL OF EDUCATION": "B.Sc",
    "EMPLOYMENT STATUS": "Employed",
    "SECTOR OF EMPLOYMENT": "FinTech",
    "DURATION OF EMPLOYMENT": "2 years",
    "OFFICE EMAIL": "grace@lendsqr.com",
    "MONTHLY INCOME": "₦200,000.00- ₦400,000.00",
    "LOAN REPAYMENT": "₦40,000",
  },
  socials: {
    "TWITTER": "@grace_effiom",
    "FACEBOOK": "Grace Effiom",
    "INSTAGRAM": "@grace_effiom",
  },
  guarantor: [
    {
      "FULL NAME": "Debby Ogana",
      "PHONE NUMBER": "07060780922",
      "EMAIL ADDRESS": "debby@gmail.com",
      "RELATIONSHIP": "Sister",
    },
    {
      "FULL NAME": "Jane Doe",
      "PHONE NUMBER": "07060999999",
      "EMAIL ADDRESS": "jane@gmail.com",
      "RELATIONSHIP": "Friend",
    },
  ],
};

const UserProfile: React.FC = () => {
  return (
    <div className={styles.card}>
      {Object.entries(user).map(([category, fields], index) => {
        if (category === "guarantor" && Array.isArray(fields)) {
          return fields.map((guarantor, i) => (
            <div
              key={`guarantor-${i}`}
              className={`${styles.category} ${
                i === fields.length - 1 ? styles.lastGuarantor : ""
              }`}
            >
              {i === 0 && (
                <h2 className={styles.categoryTitle}>
                  {category.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
                </h2>
              )}
              <div className={styles.flex}>
                {Object.entries(guarantor).map(([key, value]) => (
                  <div key={key} className={styles.field}>
                    <p className={styles.label}>{key}</p>
                    <p className={styles.value}>{value}</p>
                  </div>
                ))}
                </div>
            </div>
          ));
        }

        return (
          <div key={index} className={styles.category}>
            <h2 className={styles.categoryTitle}>
              {category.replace(/([a-z])([A-Z])/g, "$1 $2")}
            </h2>
            <div className={styles.flex}>
              {Object.entries(fields).map(([key, value]) => (
                <div key={key} className={styles.field}>
                  <p className={styles.label}>{key}</p>
                  <p className={styles.value}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
