import { FC } from "react";
import styles from "./Pagination.module.css";
import Image from "next/image";

interface PaginationProps {
  totalItems: number;
  rowsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalItems,
  rowsPerPage,
  currentPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const generatePagination = () => {
    const pages: (number | string)[] = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.rowsSelector}>
        <label>Showing</label>
        <select value={rowsPerPage} onChange={(e) => onRowsPerPageChange(Number(e.target.value))}>
          {[10, 20, 30, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>out of {totalItems}</span>
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
            <Image src="/images/angleLeft.svg" width={10} height={10} alt="Angle Left"/>

        </button>

        {generatePagination().map((page, index) => (
          <p
            key={index}
            className={`${styles.numberButton} ${currentPage === page ? styles.active : ""}`}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
          >
            {page}
          </p>
        ))}

        <button
          className={styles.pageButton}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Image src="/images/angleRight.svg" width={10} height={10} alt="Angle Right"/>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
