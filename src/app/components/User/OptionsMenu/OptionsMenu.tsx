import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./OptionsMenu.module.scss";

interface OptionsMenuProps {
  rowId: string; 
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ rowId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();


  const toggleMenu = () => setIsOpen((prev) => !prev);


  const handleView = () => {
    router.push(`/dashboard/userDetails/${rowId}`); 
  };

  return (
    <div className={styles.optionsMenu} ref={menuRef}>
      <button onClick={toggleMenu} className={styles.optionButton}>
        <Image src="/images/option.svg" width={15} height={15} alt="Option icon" />
      </button>
      
      {isOpen && (
        <div className={styles.menuPopup}>
            <button onClick={handleView}>
                <Image src="/images/viewDetails.svg" alt="Eye icon" width={15} height={15} />
                View Details
            </button>

            <button>
                <Image src="/images/blacklistUser.svg" alt="Eye icon" width={15} height={15} />
                Blacklist User
            </button>

            <button >
                <Image src="/images/activateUser.svg" alt="Eye icon" width={15} height={15} />
                Activate User
            </button>
        </div>
      )}
    </div>
  );
};

export default OptionsMenu;
