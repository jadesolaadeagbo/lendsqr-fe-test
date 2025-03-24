"use client"
import { useState, useEffect } from "react";
import React from "react";
import { fetchUsers } from "../../../services/fetchUsers";
import styles from "./UserTable.module.scss";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import OptionsMenu from "../OptionsMenu/OptionsMenu";
import FilterPopup from "../FilterPopup/FilterPopup";


const UserTable = () => {

  type User = {
    organization: string;
    username: string;
    email: string;
    phone: string;
    dateJoined: string;
    status: string;
    id: string;
  };
  const [users, setUsers] = useState<User[]>([]);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [filterOpen, setFilterOpen] = useState<boolean>(false);



  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };

    loadUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;



  const handleSort = (column: keyof typeof users[0]) => {
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
  const totalItems = users.length; 
  const paginatedUsers = users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead >
          <tr className={styles.tableRow}>
            {["organization", "username", "email", "phone", "dateJoined", "status"].map((col, id) => (
              <th key={col} onClick={() => handleSort(col as keyof typeof users[0])} className={id === 0 ? styles.firstTh : styles.th} style={{fontWeight:"500", textTransform: "uppercase", backgroundColor: "white", fontSize:"12px", color: "#545F7D"}}>

                {col.charAt(0).toUpperCase() + col.slice(1)} 
                <FilterPopup onApply={(filters) => console.log(filters)} />

              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{color: "#545F7D"}}>
          {paginatedUsers.map((user) => (
            <tr key={user.id}>

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
          setRowsPerPage(rows);
          setCurrentPage(1); 
        }}
      />



    </div>
  );
};

export default UserTable;
