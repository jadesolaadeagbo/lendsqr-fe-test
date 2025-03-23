"use client"
import { useState } from "react";
import styles from "./UserTable.module.css";
import Image from "next/image";
import Pagination from "./Pagination";

const usersData = [
  { organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Active" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Inactive" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },

  { organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Active" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Inactive" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },

  { organization: "Lendsqr", username: "Adedeji", email: "adedeji@lendsqr.com", phone: "08078903721", dateJoined: "May 15, 2020 10:00 AM", status: "Inactive" },
  { organization: "Irorun", username: "Debby Ogana", email: "debby2@irorun.com", phone: "08160780928", dateJoined: "Apr 30, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "07003309226", dateJoined: "Apr 10, 2020 10:00 AM", status: "Pending" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Active" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Active" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Blacklisted" },
  { organization: "Lendsqr", username: "Tosin Dokunmu", email: "tosin@lendsqr.com", phone: "08060780900", dateJoined: "Apr 10, 2020 10:00 AM", status: "Inactive" },
  { organization: "Lendstar", username: "Grace Effiom", email: "grace@lendstar.com", phone: "07060780922", dateJoined: "Apr 30, 2020 10:00 AM", status: "Inactive" },
];

const UserTable = () => {
  const [users, setUsers] = useState(usersData);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

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
                <td className={styles.col}><Image src="/images/option.svg" width={15} height={15} alt="Option icon"/></td>


            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {/* <div className={styles.pagination}>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>❮ Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>Next ❯</button>
      </div> */}


      <Pagination
        totalItems={totalItems}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        onRowsPerPageChange={(rows) => {
          setRowsPerPage(rows);
          setCurrentPage(1); 
        }}
      />



    </div>
  );
};

export default UserTable;
