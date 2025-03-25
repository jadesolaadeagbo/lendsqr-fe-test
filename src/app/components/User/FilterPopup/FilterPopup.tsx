import React, { useState } from "react";
import Image from "next/image";
import styles from "./FilterPopup.module.scss"; // Ensure you create this CSS file

interface Filters {
  organization: string;
  username: string;
  email: string;
  dateJoined: string;
  phone: string;
  status: string;
}

interface FilterPopupProps {
  onApply: (filters: Filters) => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onApply }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    organization: "",
    username: "",
    email: "",
    dateJoined: "",
    phone: "",
    status: "",
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Filter icon inside table header */}
      <Image
        src="/images/downFilter.svg"
        width={10}
        height={10}
        alt="Filter"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.filterIcon}
      />

      {/* Popup Modal */}
      {isOpen && (
          <div className={styles.popup}>
            <label>Organization</label>
            <input type="text" name="organization" placeholder="Organization" value={filters.organization} onChange={handleChange} />

            <label>Username</label>
            <input type="text" name="username" value={filters.username} placeholder="Username" onChange={handleChange} />

            <label>Email</label>
            <input type="email" name="email" value={filters.email} placeholder="Email" onChange={handleChange} />

            <label>Date</label>
            <input type="date" name="dateJoined" value={filters.dateJoined} onChange={handleChange} />

            <label>Phone Number</label>
            <input type="tel" name="phone" value={filters.phone} onChange={handleChange} placeholder="Phone Number"/>

            <label>Status</label>
            <select name="status" value={filters.status} onChange={handleChange}>
              <option value="" className={styles.selectText}>Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>

            <div className={styles.buttons}>
              <button className={styles.reset} onClick={() => setFilters({ organization: "", username: "", email: "", dateJoined: "", phone: "", status: "" })}>
                Reset
              </button>
              <button className={styles.apply} onClick={() => { onApply(filters); setIsOpen(false); }}>
                Filter
              </button>
            </div>
          </div>
      )}
    </>
  );
};

export default FilterPopup;
