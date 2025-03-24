"use client"
import { useState } from "react";
import React from "react";
import styles from "./UserTable.module.scss";
import Image from "next/image";
import Pagination from "./Pagination";
import OptionsMenu from "./OptionsMenu";

const usersData = [
  { id:"1", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"2", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"3", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"4", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"5", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"6", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"7", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"8", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"9", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"10", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { id:"11", organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
];

const UserTable = () => {
  const [users, setUsers] = useState(usersData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setrowsPerPage] = useState(10);

  // Sorting function
  const handleSort = (column: keyof typeof usersData[0]) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);

    const sortedUsers = [...users].sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setUsers(sortedUsers);
  };

  // Pagination
  const totalItems = 30; // Example total items
  // const totalPages = Math.ceil(users.length / rowsPerPage);
  const paginatedUsers = users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead >
          <tr className={styles.tableRow}>
            {["organization", "username", "email", "phone", "dateJoined", "status"].map((col, index) => (
              <th key={col} onClick={() => handleSort(col as keyof typeof usersData[0])} className={index === 0 ? styles.firstTh : styles.th} style={{fontWeight:"500", textTransform: "uppercase", backgroundColor: "white", fontSize:"12px", color: "#545F7D"}}>
                {col.charAt(0).toUpperCase() + col.slice(1)} <Image src="/images/downFilter.svg" width={10} height={10} alt="Downward filter"/>
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{color: "#545F7D"}}>
          {paginatedUsers.map((user, index) => (
            <tr key={index}>

                <td className={styles.difcol}>{user.organization}</td>
                <td className={styles.col}>{user.username}</td>
                <td className={styles.col}>{user.email}</td>
                <td className={styles.col}>{user.phone}</td>
                <td className={styles.col}>{user.dateJoined}</td>
                <td className={styles.col}><span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>{user.status}</span></td>
                <td className={styles.col}>
                <OptionsMenu rowId={user.id} />
                </td>


            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        onRowsPerPageChange={(rows) => {
          setrowsPerPage(rows);
          setCurrentPage(1); 
        }}
      />



    </div>
  );
};

export default UserTable;
